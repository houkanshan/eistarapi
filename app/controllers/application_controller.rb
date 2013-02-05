get '/' do
  slim :'home/index'
end

get '/login' do
  content_type :json
  a = {a:1,b:2}

  a.to_json
end
