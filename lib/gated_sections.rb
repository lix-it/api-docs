require 'nokogiri'

GATED_SECTION_IDS = %w[send-connection send-message get-connection-request-remaining].freeze

def gate_sections(page_content)
  frag = Nokogiri::HTML::DocumentFragment.parse(page_content)

  frag.css('h1, h2').to_a.each do |header|
    next unless GATED_SECTION_IDS.include?(header['id'])
    next if header.ancestors.any? { |a| a['class']&.include?('auth-gated') }

    div = Nokogiri::HTML::DocumentFragment.parse('<div class="auth-gated"></div>').at('div')
    header.replace(div)
    div.add_child(header)

    sibling = div.next
    while sibling && !%w[h1 h2].include?(sibling.name)
      next_sibling = sibling.next
      div.add_child(sibling)
      sibling = next_sibling
    end
  end

  frag.to_s
end
