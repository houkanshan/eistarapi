class Session < Resource

  attr_reader :cookie

  host = settings.api['host']
  URL = {
    login: "#{host}/bbslogin",
    logout: "#{host}/bbslogout"
  }


  def initialize(username, password)
    res = self.class.post(URL[:login], {
      body: {
        id: username,
        pw: password
      }
    })
    @cookie = get_set_cookies(res.body)

    raise "login failed" if @cookie.empty?
  end

  def get_cookies
    @cookie
  end

  def self.destroy(cookie = {})
    #p cookie

    cookies(cookie)
    res = get(URL[:logout]);
    cookie = ParseHtml.get_set_cookies(res.body)

    raise "logout failed" if cookie.empty?

    cookie
  end

  def destroy()
    self.destroy(@cookie)
  end

end
