source "http://ruby.taobao.org"
#source "https://rubygems.org"

#gem "slim"
#gem "sass"
#gem "sqlite3"
#gem "sequel"
gem "sinatra"
gem "coffee-script"
gem "sinatra-contrib"
gem "sinatra-flash"
gem "sinatra-assetpack", :require => "sinatra/assetpack"
gem "nokogiri"    # depends on libxslt-dev,libxml2-dev
gem "json"
gem "httparty"

group :development, :test do
  gem "pry"
  #gem 'rack', '1.5.0'
  #gem 'rake'
end

group :production do
  #gem "thin"
  gem "unicorn"
end

group :test do
  gem "rack-test"
  #gem "factory_girl"
  #gem "database_cleaner"
end

group :deploy do
  gem "uglifier"
  gem "capistrano"
end
