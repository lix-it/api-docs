require 'nokogiri'

GATED_SECTION_IDS = %w[
  send-connection
  send-message
  get-connection-request-remaining
  linkedin-recruiter-candidate-search
  recruiter-search-facet-typeahead
].freeze

# Marks each element of a gated section rather than wrapping the section, so
# the `.content > *` layout rules and the search index still see them.
def gate_sections(page_content)
  frag = Nokogiri::HTML::DocumentFragment.parse(page_content)

  frag.css('h1, h2').to_a.each do |header|
    next unless GATED_SECTION_IDS.include?(header['id'])

    node = header
    while node && (node.equal?(header) || !%w[h1 h2].include?(node.name))
      node.add_class('auth-gated') if node.element?
      node = node.next
    end
  end

  frag.to_s
end
