helpers do
  # get the cookie of bbs from the request cookie, 
  # which usually contain session
  def get_bbs_set_cookies(request_cookies)
    cookies = {}
    %w{utmpkey utmpnum utmpuserid}.each do |key|
      cookies[key] = request_cookies[key]
    end

    cookies
  end

  def set_response_set_cookies(response, cookies)
    cookies.each do |key, value|
      response.set_cookie(key, value)
    end
  end

end
