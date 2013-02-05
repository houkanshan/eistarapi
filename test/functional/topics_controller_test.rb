require_relative "../test_helper"

class TopicsControllerTest < FunctionalTestCase
  def setup
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

  end

  def teardown
  end

  def test_get_topics_list
    get '/topics'
    topics = get_json(last_response)

    assert_equal false, topics.empty?
  end

  def test_get_20_topics
    get '/topics', :start => 0, :count => 10
    topics = get_json(last_response)

    assert_equal 20, topics.length
  end

  def test_create_and_update_topic
    # TODO, how insert real content in POST
    post '/topics', @new_post

  end


end
