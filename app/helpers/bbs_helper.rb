helpers do
  # get the cookie of bbs from the request cookie, 
  # which usually contain session
  def get_bbs_cookies(request_cookies)
    cookies = {}
    %w{utmpkey utmpnum utmpuserid}.each do |key|
      cookies[key] = request_cookies[key]
    end

    cookies
  end
end
