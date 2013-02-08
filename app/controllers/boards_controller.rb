get '/boards' do
  begin
    cookies = get_bbs_set_cookies(request.cookies)
    new_board = Board.new cookies
    new_board.all.to_json
  rescue RuntimeError => detail
    status 500
    err = error_res(:server_error)
    err[:detail] = detail.message
    err.to_json
  end
end

get "/boards/:boardname" do
  #params[:boardname]
  begin
    cookies = get_bbs_set_cookies(request.cookies)
    new_board = Board.new cookies
    new_board.find(params[:boardname]).to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

