require_relative "../test_helper"

module PostsControllerTestHelper

  def create_post(new_post)
    # create new post
    post '/posts', new_post
    get_json(last_response)
  end

  def get_post(filename)
    get "/posts/#{filename}"
    get_json(last_response)
  end

  def update_post(filename, new_post)
    put "/posts/#{filename}", new_post
    get_json(last_response)
  end

  def delete_post(filename)
    delete "/posts/#{filename}"
    get_json(last_response)
  end

  def reply_post(filename)
    post "/posts/#{filename}/reply"
    get_json(last_response)
  end

  def assert_same_post(post1, post2)
    assert_equal a_post.title,    b_post.title
    assert_equal a_post.content,  b_post.content
  end


end

class PostsControllerTest < FunctionalTestCase

  include PostsControllerTestHelper

  def setup
    # login 
    # FIXME: needed?
    post '/sessions', :username => 'forapia', :password => '1111'

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
    get '/posts' 
    posts = get_json(last_response)
    assert_equal false, posts.empty?
  end

  def test_get_20_posts
    get '/posts', :start => 0,:count => 20
    posts = get_json(last_response)

    assert_equal 20, posts.length
  end

  def test_get_post
    get '/posts'
    a_post = get_json(last_response)[0]

    b_post = get_post(a_post.filename)

    assert_same_post(a_post, b_post)
  end

  def test_create_and_update_post
    new_post = create_post(@new_post)
    assert_same_post(new_post, @new_post)

    # get new post
    new_post = get_post(new_post.filename)
    assert_same_post @new_post, new_post

    # update post
    new_post = update_post(new_post.filename, @update_post)
    assert_same_post(@update_post, new_post)

    # get update post
    new_post = get_post(new_post.filename)
    assert_same_post(@update_post, new_post)
  end

  def test_create_and_delete_post
    # TODO, how insert real content in POST
    
    # create new post
    new_post = create_post(@new_post)
    assert_same_post(@new_post, new_post)

    # get new post
    new_post = get_post(new_post.filename)
    assert_same_post(@new_post, new_post)

    # delete new post
    delete_post(new_post.filename)
    assert_equal 200, last_response.status

    # get deleted post
    new_post = get_post(new_post.title)

    # TODO: or make it failed
    assert_not_equal @new_post.title, new_post.title
    assert_not_equal @new_post.content, new_post.content
  end

  def test_create_post_and_reply
    # create new post
    new_post = create_post @new_post

    reply_post(new_post.filename, @reply)
  end

end
