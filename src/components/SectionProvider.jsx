'use client'

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { createStore, useStore } from 'zustand'

import { useLixAuth } from '@/components/AuthGate'
import { remToPx } from '@/lib/remToPx'

const AUTH_GATED_SECTION_TITLES = ['Send Connection', 'Send Message']

function filterGatedSections(sections, isAuthed) {
  if (!sections || isAuthed) return sections
  return sections.filter(
    (section) => !AUTH_GATED_SECTION_TITLES.includes(section.title),
  )
}

function createSectionStore(sections) {
  return createStore()((set) => ({
    sections,
    visibleSections: [],
    setVisibleSections: (visibleSections) =>
      set((state) =>
        state.visibleSections.join() === visibleSections.join()
          ? {}
          : { visibleSections },
      ),
    registerHeading: ({ id, ref, offsetRem }) =>
      set((state) => {
        return {
          sections: state.sections.map((section) => {
            if (section.id === id) {
              return {
                ...section,
                headingRef: ref,
                offsetRem,
              }
            }
            return section
          }),
        }
      }),
  }))
}

function useVisibleSections(sectionStore) {
  let setVisibleSections = useStore(sectionStore, (s) => s.setVisibleSections)
  let sections = useStore(sectionStore, (s) => s.sections)

  useEffect(() => {
    function checkVisibleSections() {
      let { innerHeight, scrollY } = window
      let newVisibleSections = []

      for (
        let sectionIndex = 0;
        sectionIndex < sections.length;
        sectionIndex++
      ) {
        let { id, headingRef, offsetRem = 0 } = sections[sectionIndex]

        if (!headingRef?.current) {
          continue
        }

        let offset = remToPx(offsetRem)
        let top = headingRef.current.getBoundingClientRect().top + scrollY

        if (sectionIndex === 0 && top - offset > scrollY) {
          newVisibleSections.push('_top')
        }

        let nextSection = sections[sectionIndex + 1]
        let bottom =
          (nextSection?.headingRef?.current?.getBoundingClientRect().top ??
            Infinity) +
          scrollY -
          remToPx(nextSection?.offsetRem ?? 0)

        if (
          (top > scrollY && top < scrollY + innerHeight) ||
          (bottom > scrollY && bottom < scrollY + innerHeight) ||
          (top <= scrollY && bottom >= scrollY + innerHeight)
        ) {
          newVisibleSections.push(id)
        }
      }

      setVisibleSections(newVisibleSections)
    }

    let raf = window.requestAnimationFrame(() => checkVisibleSections())
    window.addEventListener('scroll', checkVisibleSections, { passive: true })
    window.addEventListener('resize', checkVisibleSections)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', checkVisibleSections)
      window.removeEventListener('resize', checkVisibleSections)
    }
  }, [setVisibleSections, sections])
}

const SectionStoreContext = createContext(null)

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export function SectionProvider({ sections, children }) {
  let isAuthed = useLixAuth()
  let [sectionStore] = useState(() =>
    createSectionStore(filterGatedSections(sections, isAuthed)),
  )

  useVisibleSections(sectionStore)

  useIsomorphicLayoutEffect(() => {
    sectionStore.setState({
      sections: filterGatedSections(sections, isAuthed),
    })
  }, [sectionStore, sections, isAuthed])

  return (
    <SectionStoreContext.Provider value={sectionStore}>
      {children}
    </SectionStoreContext.Provider>
  )
}

export function useSectionStore(selector) {
  let store = useContext(SectionStoreContext)
  return useStore(store, selector)
}
