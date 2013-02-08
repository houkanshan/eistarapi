require_relative "./parse_html.rb"

class Resource
  include HTTParty
  include ParseHtml

  def initialize(cookies)
    @cookies = cookies
    self.class.cookies(cookies)
  end

end

