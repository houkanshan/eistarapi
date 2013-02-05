post '/sessions' do
  content_type :json
  begin 
    new_session = BbsSession.new(params[:username], params[:password])

    cookies = new_session.cookie

    cookies.each do |key, value|
      response.set_cookie(key, value)
    end
    logger.info "#{params[:username]} login success"

    {'set_cookie'=> cookies}.to_json
  rescue RuntimeError
    logger.info "#{params[:username]} login failed"

    status 403
    error_res(:login_error).to_json
  end
end


delete '/sessions' do
  begin 
    content_type :json

    cookies = get_bbs_cookies(request.cookies)

    BbsSession.destroy(cookies).to_json
  rescue RuntimeError
    status 400
    error_res(:logout_error).to_json
  end
end
