get '/boards' do
  cookies = get_bbs_set_cookies(request.cookies)
  new_board = Board.new cookies
  new_board.all.to_json
end

get "/boards/:boardname" do
  #params[:boardname]
  
  cookies = get_bbs_set_cookies(request.cookies)
  new_board = Board.new cookies
  new_board.find(params[:boardname]).to_json
end

