# encoding: UTF-8
require_relative "../test_helper"

module PostsControllerTestHelper

  def get_posts(boardname, opt = {})
    get "/boards/#{boardname}/posts", opt
    get_json(last_response)
  end

  def create_post(boardname, new_post = {})
    # create new post
    post "/boards/#{boardname}/posts", new_post
    get_json(last_response)
  end

  def get_post(boardname, filename)
    get "/boards/#{boardname}/posts/#{filename}"
    get_json(last_response)
  end

  def update_post(boardname, filename, new_post)
    put "/boards/#{boardname}/posts/#{filename}", new_post
    get_json(last_response)
  end

  def delete_post(boardname, filename)
    delete "/boards/#{boardname}/posts/#{filename}"
    get_json(last_response)
  end

  def reply_post(boardname, filename, reply)
    post "/boards/#{boardname}/posts/#{filename}/reply", reply
    get_json(last_response)
  end

  def get_post_topic(boardname, filename)
    get "/boards/#{boardname}/posts/#{filename}/topic"
    get_json(last_response)
  end

  def cc_post (boardname, filename)
    post "/boards/#{boardname}/posts/#{filename}/cc"
  end

  def assert_same_post(post1, post2)
    assert_equal post1["title"], post2["title"]
    #assert_equal post1["text"], post2["text"]
    #assert_equal post1["author"]["id"], post2["author"]["id"]
    #assert_equal post1["from"], post2["from"]
    assert_equal post1["filename"], post2["filename"]
  end

end

class PostsControllerTest < FunctionalTestCase

  include PostsControllerTestHelper

  def setup
    # login 
    # FIXME: needed?
    #post '/sessions', :username => 'forapia', :password => '1111'

    @boardName = "Weather"

    @new_post = {
      title: 'test1',
      text: 'test for from eistar-api!'
    }

    @update_post = {
      text: 'test for from eistar-api again!'
    }

    @reply = {
      text: 'this is a reply'
    }

  end

  def teardown
  end

  def test_get_posts_list
    posts = get_posts @boardName
    assert_equal false, posts.empty?
  end

  def test_get_20_posts
    posts = get_posts @boardName, start:0, count:20
    posts

    assert_equal 20, posts.length
  end

  def test_get_30_posts
    posts = get_posts @boardName, start: 21, count: 30
    assert_equal 30, posts.length 
  end

  def test_get_5_posts
    posts = get_posts @boardName, start:22, count:5
    assert_equal 5, posts.length
  end

  def test_get_1_posts
    posts = get_posts @boardName, start: 0, count:1
    assert_equal 1810, Integer(posts[0]['index'])
  end

  def test_get_unkown_board
    get "/boards/Wate/posts"
    assert_equal 404, last_response.status
  end

  def test_get_post
    a_post = get_posts(@boardName)[0]

    b_post = get_post(@boardName, a_post["filename"])

    p a_post, b_post

    assert_equal a_post["author_id"], b_post["author"]["id"]
    assert_equal a_post["filename"], b_post["filename"]
  end

  def test_get_no_found_post
    post = get_post(@boardName, 'M.124.A')
    assert_equal 404, last_response.status

    post = get_post('Wate', 'M.123.A')
    assert_equal 404, last_response.status
  end

  def test_delete_no_found
    res = delete_post("Wate", 'M.123.A')
    assert_equal 404, last_response.status

    res = delete_post("Water", 'M.123.A')
    assert_equal 404, last_response.status
  end

  def test_create_failed
    new_post = create_post(@boardName)
    assert_equal 400, last_response.status
  end

  #def test_create_and_delete_post
    #post '/sessions', :username => 'houks', :password => '1111'

    #last_index1 = get_posts(@boardName)[0]["index"]

    ## create new post
    #new_post = create_post(@boardName, @new_post)
    #assert_equal @new_post[:title], new_post["title"]

    ## get new post
    #new_post2 = get_post(@boardName, new_post["filename"])
    #assert_same_post(new_post2, new_post)

    ## delete new post
    #delete_post(@boardName, new_post["filename"])
    #assert_equal 200, last_response.status

    #last_index2 = get_posts(@boardName)[0]["index"]
    #assert_equal(last_index1, last_index2)

    ## get deleted post
    #new_post = get_post(@boardName, new_post["filename"])

    #assert_equal 404, last_response.status

    #p delete '/sessions'
  #end
  
  def test_create_and_update_post_and_delete_post
    post '/sessions', :username => 'houks', :password => '1111'

    new_post = create_post(@boardName, @new_post) 
    assert_equal @new_post[:title], new_post["title"]

    # get new post
    new_post2 = get_post @boardName, new_post["filename"]
    new_post
    assert_same_post new_post2, new_post

    # update post
    new_post = update_post(@boardName, new_post["filename"], @update_post)
    new_post
    #assert_equal true, new_post["text"].index(@update_post[:text])

    # get update post
    new_post = get_post(@boardName, new_post["filename"])
    #assert_same_post(@update_post, new_post)

    # delete new post
    delete_post(@boardName, new_post["filename"])
    #assert_equal 200, last_response.status

    delete '/sessions'
  end

  #def test_create_post_and_reply
    ## create new post
    #new_post = create_post @boardName, @new_post

    #reply_post(new_post["filename"], @reply)
  #end

  #def test_cc_post
    #new_post = create_post( @boardName, @new_post )
    #post cc_post("Game", new_post.filename)
  #end

  #def test_get_post_topic

  #end

end
