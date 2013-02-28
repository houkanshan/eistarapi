get '/' do
  'hello world, check the document at https://github.com/houkanshan/eistarapi'
end

post '/login' do
  call! env.merge("PATH_INFO" => '/sessions')
end

post 'logout' do
  call! env.merge("PATH_INFO" => '/sessions',
                  "REQUEST_METHOD" => 'DELETE')
end

#error 404 do
    #params.to_json
#end
