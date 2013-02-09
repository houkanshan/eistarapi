require_relative "../test_helper"
module PostsControllerTestHelper
  def get_posts(boardname, opt = {})
    get "/boards/#{boardname}/posts", opt
    get_json(last_response)
  end

  def create_post(boardname, new_post)
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
    assert_equal post1.title,    post2.title
    assert_equal post1.content,  post2.content
  end

end

class PostsControllerTest < FunctionalTestCase

  include PostsControllerTestHelper

  def setup
    # login 
    # FIXME: needed?
    #post '/sessions', :username => 'forapia', :password => '1111'

    @boardName = "Water"

    @new_post = {
      title: 'test',
      content: 'test for fun'
    }

    @update_post = {
      title: 'test2',
      content: 'test for fun again!'
    }

    @reply = {
      content: 'this is a reply'
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
    assert_equal 12153, Integer(posts[0]['index'])
  end

  #def test_get_post
    #a_post = get_posts(@boardName)[0]

    #b_post = get_post(@boardName, a_post.filename)

    #assert_same_post(a_post, b_post)
  #end

  #def test_create_and_update_post
    #new_post = create_post @boardName, @new_post
    #assert_same_post(new_post, @new_post)

    ## get new post
    #new_post = get_post @boardName, new_post.filename
    #assert_same_post @new_post, new_post

    ## update post
    #new_post = update_post(@boardName, new_post.filename, @update_post)
    #assert_same_post(@update_post, new_post)

    ## get update post
    #new_post = get_post(@boardName, new_post.filename)
    #assert_same_post(@update_post, new_post)
  #end

  #def test_create_and_delete_post
    ## TODO, how insert real content in POST
    
    ## create new post
    #new_post = create_post(@boardName, @new_post)
    #assert_same_post(@new_post, new_post)

    ## get new post
    #new_post = get_post(@boardName, new_post.filename)
    #assert_same_post(@new_post, new_post)

    ## delete new post
    #delete_post(@boardNaem, new_post.filename)
    #assert_equal 200, last_response.status

    ## get deleted post
    #new_post = get_post(@boardName, new_post.title)

    ## TODO: or make it failed
    #assert_not_equal @new_post.title, new_post.title
    #assert_not_equal @new_post.content, new_post.content
  #end

  #def test_create_post_and_reply
    ## create new post
    #new_post = create_post @boardName, @new_post

    #reply_post(new_post.filename, @reply)
  #end

  #def test_cc_post
    #new_post = create_post( @boardName, @new_post )
    #post cc_post("Game", new_post.filename)
  #end

  #def test_get_post_topic

  #end

end
