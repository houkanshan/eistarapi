get '/users/:id' do
  content_type :json
  begin

    usr = User.new(get_bbs_set_cookies(request.cookies))
    usr.find(params[:id]).to_json

  rescue RuntimeError => detail
    p detail.message
    status 404
    err = error_res(:no_user)
    err[:detail] = detail.message
    err.to_json
  end
end
