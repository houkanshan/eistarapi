post '/sessions' do
  content_type :json
  begin 
    new_session = Session.new(params[:username], params[:password])

    cookies = new_session.cookie

    set_response_set_cookies(response, cookies)

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

    cookies = get_bbs_set_cookies(request.cookies)

    Session.destroy(cookies).to_json
  rescue RuntimeError
    status 400
    error_res(:logout_error).to_json
  end
end
