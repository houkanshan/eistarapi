get "/boards/:boardname/topics" do
  content_type :json
  begin
    topic = Topic.new(get_bbs_set_cookies(request.cookies))

    start = Integer(params[:start] || 0)
    count = Integer(params[:count] || 20)

    topic.list(params[:boardname], start:start, count:count).to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

get "/boards/:boardname/topics/:filename" do
  content_type :json
  begin
    topic = Topic.new(get_bbs_set_cookies(request.cookies))
    topic.find(params[:boardname], params[:filename]).to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

