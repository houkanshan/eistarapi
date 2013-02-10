get "/boards/:boardname/posts" do
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))

    start = Integer(params[:start] || 0)
    count = Integer(params[:count] || 20)

    post.list(params[:boardname], start:start, count:count).to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

get "/boards/:boardname/posts/:filename" do
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    post.find(params[:boardname], params[:filename]).to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

post "/boards/:boardname/posts" do
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    post.create(params[:boardname], {
      title: params[:title],
      text: params[:text],
      signature: params[:signature],
      autocr: params[:autocr]
    })

    post.list(params[:boardname])[0].to_json
  rescue RuntimeError => detail
    status 400
    err = error_res(:create_failed)
    err[:detail] = detail.message
    err.to_json
  end
end

delete "/boards/:boardname/posts/:filename" do
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    res = post.delete(params[:boardname], params[:filename])

    post = error_res(:success)
    post[:detail] = res

    post.to_json
  rescue RuntimeError => detail
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end
