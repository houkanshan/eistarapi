get "/boards/:boardname/posts" do
  content_type :json
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))

    start = Integer(params[:start] || 0)
    count = Integer(params[:count] || 20)

    post.list(params[:boardname], start:start, count:count).to_json
  rescue RuntimeError => detail
    p detail.message
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

get "/boards/:boardname/posts/:filename" do
  content_type :json
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    post.find(params[:boardname], params[:filename]).to_json
  rescue RuntimeError => detail
    p detail.message
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end
end

post "/boards/:boardname/posts" do
  content_type :json
  boardname = params[:boardname]
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    post.create(boardname, {
      title: (params[:title]),
      text: (params[:text]),
      signature: params[:signature],
      autocr: params[:autocr]
    })

    post.find(boardname, post.list(params[:boardname])[0][:filename]).to_json
  rescue RuntimeError => detail
    p detail.message
    status 400
    err = error_res(:create_failed)
    err[:detail] = detail.message
    err.to_json
  end
end

put "/boards/:boardname/posts/:filename" do
  content_type :json

  boardname = params[:boardname]
  filename = params[:filename]
  begin 

    post = Post.new(get_bbs_set_cookies(request.cookies))
    res = post.update(boardname, filename, {
      text: (params[:text])
    })

    #post.find(boardname, post.list(boardname)[0][:filename]).to_json
    post.find(boardname, filename).to_json

  rescue RuntimeError => detail
    p detail.message
    status 400
    err = error_res(:update_failed)
    err[:detail] = detail.message
    err.to_json
  end

end

delete "/boards/:boardname/posts/:filename" do
  content_type :json
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    res = post.delete(params[:boardname], params[:filename])

    post = error_res(:success)
    post[:detail] = res

    post.to_json
  rescue RuntimeError => detail
    p detail.message
    status 404
    err = error_res(:no_board)
    err[:detail] = detail.message
    err.to_json
  end

end

post "/boards/:boardname/posts/:filename/reply" do
  content_type :json
  boardname = params[:boardname]
  filename = params[:filename]
  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))

    opt = {
      text: (params[:text])
    }
    params[:title] && (opt[:title] = (params[:title]))
    params[:signature] && (opt[:signature] = params[:signature])
    params[:autocr] && (opt[:autocr] = params[:autocr])

    reply = post.reply(boardname, filename, opt)

    post.find(boardname, post.list(boardname)[0][:filename]).to_json

  rescue RuntimeError => detail
    p detail.message
    status 400
    err = error_res(:create_failed)
    err[:detail] = detail.message
    err.to_json
  end
end

post "/boards/:boardname/posts/:filename/cc" do
  content_type :json

  boardname = params[:boardname]
  filename = params[:filename]
  to = params[:to]

  begin
    post = Post.new(get_bbs_set_cookies(request.cookies))
    res = post.cc(boardname, filename, to)

    cced = post.find(to, post.list(to)[0][:filename])

    cced.to_json
  rescue RuntimeError => detail
    p detail.message
    status 400
    err = error_res(:cc_failed)
    err[:detail] = detail.message
    err.to_json
  end

end
