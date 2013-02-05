class BbsSession 
  include HTTParty
  include ParseHtml

  attr_reader :cookie

  host = settings.api['host']
  @@login_url = host + '/bbslogin'
  @@logout_url = host + '/bbslogout'


  def initialize(username, password)
    res = self.class.post(@@login_url, {
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

  def self.destroy(cookie = nil)
    #p cookie

    cookies(cookie)
    res = get(@@logout_url);
    cookie = ParseHtml.get_set_cookies(res.body)

    raise "logout failed" if cookie.empty?

    cookie
  end

  def destroy()
    self.destroy(@cookie)
  end

end
