require_relative "./parse_html.rb"

class Resource
  include HTTParty
  include ParseHtml

end
