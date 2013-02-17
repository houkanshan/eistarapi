require_relative "../test_helper"

module TopicsControllerTestHelper

  def get_topics(boardname, opt = {})
    get "/boards/#{boardname}/topics", opt
    get_json(last_response)
  end

  def create_topic(boardname, new_topic)
    # create new topic
    post "/boards/#{boardname}/topics", new_topic
    get_json(last_response)
  end

  def get_topic(boardname, filename)
    get "/boards/#{boardname}/topics/#{filename}"
    get_json(last_response)
  end


end
class TopicsControllerTest < FunctionalTestCase
  include TopicsControllerTestHelper

  def setup
    @boardName = "Weather"

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
    topics = get_topics @boardName

    assert_equal false, topics.empty?
    assert_equal 20, topics.length
  end

  def test_get_20_topics
    topics = get_topics @boardName, start: 0, count: 10

    assert_equal 10, topics.length
  end

  def test_get_topic
    last_topic = get_topics(@boardName)[0]
    got_topic = get_topic(@boardName, last_topic["filename"])

    p last_topic
    p got_topic

    assert_equal last_topic["filename"], got_topic.first["filename"]
  end
end
