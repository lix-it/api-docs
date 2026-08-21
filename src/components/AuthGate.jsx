'use client'

import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'

const LixAuthContext = createContext(false)

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

const AUTH_COOKIE_NAMES = ['lix_user_id']

export function hasLixWwwAuthToken() {
  if (typeof document === 'undefined') {
    return false
  }

  return document.cookie.split('; ').some((cookie) => {
    const [name] = cookie.split('=')
    return AUTH_COOKIE_NAMES.includes(name)
  })
}

export function LixAuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setIsAuthed(hasLixWwwAuthToken())
  }, [])

  return (
    <LixAuthContext.Provider value={isAuthed}>
      {children}
    </LixAuthContext.Provider>
  )
}

export function useLixAuth() {
  return useContext(LixAuthContext)
}

export function AuthGate({ children }) {
  const isAuthed = useLixAuth()
  return isAuthed ? children : null
}
