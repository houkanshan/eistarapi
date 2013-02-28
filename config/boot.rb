require "rubygems"
require "bundler"
require "yaml"

# require "bundle gems"
ENV["RACK_ENV"] ||= "development"
Bundler.require(:default, ENV["RACK_ENV"].to_sym)

# init database
#DB = Sequel.connect(YAML.load_file("./config/database.yml")["default"]["url"])

# init sinatra
set :sessions, false
=begin
set :session_secret, "b8b7b8a915fd0900bd4ad841e04d42d5"
set :root, File.expand_path(".")
set :views, settings.root + "/app/views"
=end

# config
set :api, YAML.load_file("./config/api.yml")

# sinatra reloader
if development?
  require "sinatra/reloader"
  also_reload "lib/**/*.rb", "app/{models,helpers}/**/*.rb"
end

# assetpack support
assets do
  serve "/js", :from => "app/assets/js"
  serve "/css", :from => "app/assets/css"
  serve "/img", :from => "app/assets/img"

  css_compression :sass
  js_compression  :uglify

  js :application, ["/js/*.js"]
  css :application, ["/css/*.css"]
end

# require project files
Dir.glob "./{lib,app/models,app/helpers,app/controllers}/**/*.rb" do |f|
  require f
end
