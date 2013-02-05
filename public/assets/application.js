<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>LoadError at &#x2F;assets&#x2F;application.js</title>

  <script type="text/javascript">
  //<!--
  function toggle(id) {
    var pre  = document.getElementById("pre-" + id);
    var post = document.getElementById("post-" + id);
    var context = document.getElementById("context-" + id);

    if (pre.style.display == 'block') {
      pre.style.display = 'none';
      post.style.display = 'none';
      context.style.background = "none";
    } else {
      pre.style.display = 'block';
      post.style.display = 'block';
      context.style.background = "#fffed9";
    }
  }

  function toggleBacktrace(){
    var bt = document.getElementById("backtrace");
    var toggler = document.getElementById("expando");

    if (bt.className == 'condensed') {
      bt.className = 'expanded';
      toggler.innerHTML = "(condense)";
    } else {
      bt.className = 'condensed';
      toggler.innerHTML = "(expand)";
    }
  }
  //-->
  </script>

<style type="text/css" media="screen">
  *                   {margin: 0; padding: 0; border: 0; outline: 0;}
  div.clear           {clear: both;}
  body                {background: #EEEEEE; margin: 0; padding: 0;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode',
                       'Garuda';}
  code                {font-family: 'Lucida Console', monospace;
                       font-size: 12px;}
  li                  {height: 18px;}
  ul                  {list-style: none; margin: 0; padding: 0;}
  ol:hover            {cursor: pointer;}
  ol li               {white-space: pre;}
  #explanation        {font-size: 12px; color: #666666;
                       margin: 20px 0 0 100px;}
/* WRAP */
  #wrap               {width: 1000px; background: #FFFFFF; margin: 0 auto;
                       padding: 30px 50px 20px 50px;
                       border-left: 1px solid #DDDDDD;
                       border-right: 1px solid #DDDDDD;}
/* HEADER */
  #header             {margin: 0 auto 25px auto;}
  #header img         {float: left;}
  #header #summary    {float: left; margin: 12px 0 0 20px; width:660px;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode';}
  h1                  {margin: 0; font-size: 36px; color: #981919;}
  h2                  {margin: 0; font-size: 22px; color: #333333;}
  #header ul          {margin: 0; font-size: 12px; color: #666666;}
  #header ul li strong{color: #444444;}
  #header ul li       {display: inline; padding: 0 10px;}
  #header ul li.first {padding-left: 0;}
  #header ul li.last  {border: 0; padding-right: 0;}
/* BODY */
  #backtrace,
  #get,
  #post,
  #cookies,
  #rack               {width: 980px; margin: 0 auto 10px auto;}
  p#nav               {float: right; font-size: 14px;}
/* BACKTRACE */
  a#expando           {float: left; padding-left: 5px; color: #666666;
                      font-size: 14px; text-decoration: none; cursor: pointer;}
  a#expando:hover     {text-decoration: underline;}
  h3                  {float: left; width: 100px; margin-bottom: 10px;
                       color: #981919; font-size: 14px; font-weight: bold;}
  #nav a              {color: #666666; text-decoration: none; padding: 0 5px;}
  #backtrace li.frame-info {background: #f7f7f7; padding-left: 10px;
                           font-size: 12px; color: #333333;}
  #backtrace ul       {list-style-position: outside; border: 1px solid #E9E9E9;
                       border-bottom: 0;}
  #backtrace ol       {width: 920px; margin-left: 50px;
                       font: 10px 'Lucida Console', monospace; color: #666666;}
  #backtrace ol li    {border: 0; border-left: 1px solid #E9E9E9;
                       padding: 2px 0;}
  #backtrace ol code  {font-size: 10px; color: #555555; padding-left: 5px;}
  #backtrace-ul li    {border-bottom: 1px solid #E9E9E9; height: auto;
                       padding: 3px 0;}
  #backtrace-ul .code {padding: 6px 0 4px 0;}
  #backtrace.condensed .system,
  #backtrace.condensed .framework {display:none;}
/* REQUEST DATA */
  p.no-data           {padding-top: 2px; font-size: 12px; color: #666666;}
  table.req           {width: 980px; text-align: left; font-size: 12px;
                       color: #666666; padding: 0; border-spacing: 0;
                       border: 1px solid #EEEEEE; border-bottom: 0;
                       border-left: 0;
                       clear:both}
  table.req tr th     {padding: 2px 10px; font-weight: bold;
                       background: #F7F7F7; border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
  table.req tr td     {padding: 2px 20px 2px 10px;
                       border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
/* HIDE PRE/POST CODE AT START */
  .pre-context,
  .post-context       {display: none;}

  table td.code       {width:750px}
  table td.code div   {width:750px;overflow:hidden}
</style>
</head>
<body>
  <div id="wrap">
    <div id="header">
      <img src="/__sinatra__/500.png" alt="application error" height="161" width="313" />
      <div id="summary">
        <h1><strong>LoadError</strong> at <strong>&#x2F;assets&#x2F;application.js
          </strong></h1>
        <h2>no such file to load -- uglifier</h2>
        <ul>
          <li class="first"><strong>file:</strong> <code>
            tools.rb</code></li>
          <li><strong>location:</strong> <code>require
            </code></li>
          <li class="last"><strong>line:
            </strong> 318</li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>

    <div id="backtrace" class='condensed'>
      <h3>BACKTRACE</h3>
      <p><a href="#" id="expando"
            onclick="toggleBacktrace(); return false">(expand)</a></p>
      <p id="nav"><strong>JUMP TO:</strong>
         <a href="#get-info">GET</a>
         <a href="#post-info">POST</a>
         <a href="#cookie-info">COOKIES</a>
         <a href="#env-info">ENV</a>
      </p>
      <div class="clear"></div>

      <ul id="backtrace-ul">

      
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;backports-2.7.1&#x2F;lib&#x2F;backports&#x2F;tools.rb</code> in
                <code><strong>require</strong></code>
            </li>

            <li class="code system">
              
              <ol start="311"
                  class="pre-context" id="pre-1"
                  onclick="toggle(1);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>module Kernel
</code></li>
                
                <li class="pre-context-line"><code>  def require_with_backports(lib)
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="318" class="context" id="1"
                  onclick="toggle(1);">
                <li class="context-line" id="context-1"><code>      return false unless require_without_backports(lib)</code></li>
              </ol>

              
              <ol start="319" class="post-context"
                  id="post-1" onclick="toggle(1);">
                
                <li class="post-context-line"><code>      paths = Backports::StdLib.extended_lib.fetch(lib, nil)
</code></li>
                
                <li class="post-context-line"><code>    rescue LoadError
</code></li>
                
                <li class="post-context-line"><code>      return false if Backports::StdLib::LoadedFeatures.new.include?(lib)
</code></li>
                
                <li class="post-context-line"><code>      raise unless paths = Backports::StdLib.extended_lib.fetch(lib, nil)
</code></li>
                
                <li class="post-context-line"><code>      Backports::StdLib::LoadedFeatures.mark_as_loaded(lib)
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    if paths
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;backports-2.7.1&#x2F;lib&#x2F;backports&#x2F;tools.rb</code> in
                <code><strong>require_with_backports</strong></code>
            </li>

            <li class="code system">
              
              <ol start="311"
                  class="pre-context" id="pre-2"
                  onclick="toggle(2);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>module Kernel
</code></li>
                
                <li class="pre-context-line"><code>  def require_with_backports(lib)
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="318" class="context" id="2"
                  onclick="toggle(2);">
                <li class="context-line" id="context-2"><code>      return false unless require_without_backports(lib)</code></li>
              </ol>

              
              <ol start="319" class="post-context"
                  id="post-2" onclick="toggle(2);">
                
                <li class="post-context-line"><code>      paths = Backports::StdLib.extended_lib.fetch(lib, nil)
</code></li>
                
                <li class="post-context-line"><code>    rescue LoadError
</code></li>
                
                <li class="post-context-line"><code>      return false if Backports::StdLib::LoadedFeatures.new.include?(lib)
</code></li>
                
                <li class="post-context-line"><code>      raise unless paths = Backports::StdLib.extended_lib.fetch(lib, nil)
</code></li>
                
                <li class="post-context-line"><code>      Backports::StdLib::LoadedFeatures.mark_as_loaded(lib)
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    if paths
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;engines&#x2F;uglify.rb</code> in
                <code><strong>js</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1"
                  class="pre-context" id="pre-3"
                  onclick="toggle(3);">
                
                <li class="pre-context-line"><code>module Sinatra::AssetPack
</code></li>
                
                <li class="pre-context-line"><code>  class UglifyEngine &lt; Engine
</code></li>
                
                <li class="pre-context-line"><code>    def js(str, options={})
</code></li>
                
              </ol>
              

              <ol start="4" class="context" id="3"
                  onclick="toggle(3);">
                <li class="context-line" id="context-3"><code>      require &#x27;uglifier&#x27;</code></li>
              </ol>

              
              <ol start="5" class="post-context"
                  id="post-3" onclick="toggle(3);">
                
                <li class="post-context-line"><code>      Uglifier.compile str, options
</code></li>
                
                <li class="post-context-line"><code>    rescue =&gt; e
</code></li>
                
                <li class="post-context-line"><code>      nil
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  Compressor.register :js, :uglify, UglifyEngine
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;compressor.rb</code> in
                <code><strong>compress</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="16"
                  class="pre-context" id="pre-4"
                  onclick="toggle(4);">
                
                <li class="pre-context-line"><code>        raise Error, &quot;Engine #{engine} (#{type}) doesn&#x27;t exist.&quot;  unless klass
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        # Ensure that the engine can support that type.
</code></li>
                
                <li class="pre-context-line"><code>        engine = klass.new
</code></li>
                
                <li class="pre-context-line"><code>        raise Error, &quot;#{klass} does not support #{type.upcase} compression.&quot;  unless engine.respond_to?(type)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        # Build it using the engine, and fallback to defaults if it fails.
</code></li>
                
              </ol>
              

              <ol start="23" class="context" id="4"
                  onclick="toggle(4);">
                <li class="context-line" id="context-4"><code>        output   = engine.send type, str, options</code></li>
              </ol>

              
              <ol start="24" class="post-context"
                  id="post-4" onclick="toggle(4);">
                
                <li class="post-context-line"><code>        output ||= fallback(str, type, options)  unless options[:no_fallback]
</code></li>
                
                <li class="post-context-line"><code>        output
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Compresses a given string using the default engines.
</code></li>
                
                <li class="post-context-line"><code>      def fallback(str, type, options)
</code></li>
                
                <li class="post-context-line"><code>        if type == :js
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;package.rb</code> in
                <code><strong>minify</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="76"
                  class="pre-context" id="pre-5"
                  onclick="toggle(5);">
                
                <li class="pre-context-line"><code>        link_tag production_path, options
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def minify
</code></li>
                
                <li class="pre-context-line"><code>        engine  = @assets.send(:&quot;#{@type}_compression&quot;)
</code></li>
                
                <li class="pre-context-line"><code>        options = @assets.send(:&quot;#{@type}_compression_options&quot;)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="83" class="context" id="5"
                  onclick="toggle(5);">
                <li class="context-line" id="context-5"><code>        Compressor.compress combined, @type, engine, options</code></li>
              </ol>

              
              <ol start="84" class="post-context"
                  id="post-5" onclick="toggle(5);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # The cache hash.
</code></li>
                
                <li class="post-context-line"><code>      def hash
</code></li>
                
                <li class="post-context-line"><code>        if @assets.app.development?
</code></li>
                
                <li class="post-context-line"><code>          &quot;#{name}.#{type}&#x2F;#{mtime}&quot;
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;class_methods.rb</code> in
                <code><strong>block (3 levels) in add_compressed_routes!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="21"
                  class="pre-context" id="pre-6"
                  onclick="toggle(6);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      # Add routes for the compressed versions
</code></li>
                
                <li class="pre-context-line"><code>      def add_compressed_routes!
</code></li>
                
                <li class="pre-context-line"><code>        assets.packages.each do |name, package|
</code></li>
                
                <li class="pre-context-line"><code>          get package.route_regex do
</code></li>
                
                <li class="pre-context-line"><code>            mtime, contents = @template_cache.fetch(package.path) {
</code></li>
                
              </ol>
              

              <ol start="28" class="context" id="6"
                  onclick="toggle(6);">
                <li class="context-line" id="context-6"><code>              [ package.mtime, package.minify ]</code></li>
              </ol>

              
              <ol start="29" class="post-context"
                  id="post-6" onclick="toggle(6);">
                
                <li class="post-context-line"><code>            }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>            content_type package.type
</code></li>
                
                <li class="post-context-line"><code>            last_modified mtime
</code></li>
                
                <li class="post-context-line"><code>            assets_expires
</code></li>
                
                <li class="post-context-line"><code>            contents
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;tilt-1.3.3&#x2F;lib&#x2F;tilt.rb</code> in
                <code><strong>fetch</strong></code>
            </li>

            <li class="code system">
              
              <ol start="120"
                  class="pre-context" id="pre-7"
                  onclick="toggle(7);">
                
                <li class="pre-context-line"><code>  # Subsequent invocations return the already loaded template object.
</code></li>
                
                <li class="pre-context-line"><code>  class Cache
</code></li>
                
                <li class="pre-context-line"><code>    def initialize
</code></li>
                
                <li class="pre-context-line"><code>      @cache = {}
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def fetch(*key)
</code></li>
                
              </ol>
              

              <ol start="127" class="context" id="7"
                  onclick="toggle(7);">
                <li class="context-line" id="context-7"><code>      @cache[key] ||= yield</code></li>
              </ol>

              
              <ol start="128" class="post-context"
                  id="post-7" onclick="toggle(7);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def clear
</code></li>
                
                <li class="post-context-line"><code>      @cache = {}
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;class_methods.rb</code> in
                <code><strong>block (2 levels) in add_compressed_routes!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="20"
                  class="pre-context" id="pre-8"
                  onclick="toggle(8);">
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      # Add routes for the compressed versions
</code></li>
                
                <li class="pre-context-line"><code>      def add_compressed_routes!
</code></li>
                
                <li class="pre-context-line"><code>        assets.packages.each do |name, package|
</code></li>
                
                <li class="pre-context-line"><code>          get package.route_regex do
</code></li>
                
              </ol>
              

              <ol start="27" class="context" id="8"
                  onclick="toggle(8);">
                <li class="context-line" id="context-8"><code>            mtime, contents = @template_cache.fetch(package.path) {</code></li>
              </ol>

              
              <ol start="28" class="post-context"
                  id="post-8" onclick="toggle(8);">
                
                <li class="post-context-line"><code>              [ package.mtime, package.minify ]
</code></li>
                
                <li class="post-context-line"><code>            }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>            content_type package.type
</code></li>
                
                <li class="post-context-line"><code>            last_modified mtime
</code></li>
                
                <li class="post-context-line"><code>            assets_expires
</code></li>
                
                <li class="post-context-line"><code>            contents
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1258"
                  class="pre-context" id="pre-9"
                  onclick="toggle(9);">
                
                <li class="pre-context-line"><code>        method_name             = &quot;#{verb} #{path}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        unbound_method          = generate_method(method_name, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile path
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        [ pattern, keys, conditions, block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>            proc { |a,p| unbound_method.bind(a).call(*p) } :
</code></li>
                
              </ol>
              

              <ol start="1265" class="context" id="9"
                  onclick="toggle(9);">
                <li class="context-line" id="context-9"><code>            proc { |a,p| unbound_method.bind(a).call } ]</code></li>
              </ol>

              
              <ol start="1266" class="post-context"
                  id="post-9" onclick="toggle(9);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        keys = []
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
                <li class="post-context-line"><code>          pattern = path.to_str.gsub(&#x2F;[^\?\%\\\&#x2F;\:\*\w]&#x2F;) { |c| encoded(c) }
</code></li>
                
                <li class="post-context-line"><code>          pattern.gsub!(&#x2F;((:\w+)|\*)&#x2F;) do |match|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in compile!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1258"
                  class="pre-context" id="pre-10"
                  onclick="toggle(10);">
                
                <li class="pre-context-line"><code>        method_name             = &quot;#{verb} #{path}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        unbound_method          = generate_method(method_name, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile path
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        [ pattern, keys, conditions, block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>            proc { |a,p| unbound_method.bind(a).call(*p) } :
</code></li>
                
              </ol>
              

              <ol start="1265" class="context" id="10"
                  onclick="toggle(10);">
                <li class="context-line" id="context-10"><code>            proc { |a,p| unbound_method.bind(a).call } ]</code></li>
              </ol>

              
              <ol start="1266" class="post-context"
                  id="post-10" onclick="toggle(10);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        keys = []
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
                <li class="post-context-line"><code>          pattern = path.to_str.gsub(&#x2F;[^\?\%\\\&#x2F;\:\*\w]&#x2F;) { |c| encoded(c) }
</code></li>
                
                <li class="post-context-line"><code>          pattern.gsub!(&#x2F;((:\w+)|\*)&#x2F;) do |match|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>[]</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="828"
                  class="pre-context" id="pre-11"
                  onclick="toggle(11);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
              </ol>
              

              <ol start="835" class="context" id="11"
                  onclick="toggle(11);">
                <li class="context-line" id="context-11"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="836" class="post-context"
                  id="post-11" onclick="toggle(11);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block (3 levels) in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="828"
                  class="pre-context" id="pre-12"
                  onclick="toggle(12);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
              </ol>
              

              <ol start="835" class="context" id="12"
                  onclick="toggle(12);">
                <li class="context-line" id="context-12"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="836" class="post-context"
                  id="post-12" onclick="toggle(12);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route_eval</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="844"
                  class="pre-context" id="pre-13"
                  onclick="toggle(13);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      route_eval(&amp;pass_block) if pass_block
</code></li>
                
                <li class="pre-context-line"><code>      route_missing
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run a route block and throw :halt with the result.
</code></li>
                
                <li class="pre-context-line"><code>    def route_eval
</code></li>
                
              </ol>
              

              <ol start="851" class="context" id="13"
                  onclick="toggle(13);">
                <li class="context-line" id="context-13"><code>      throw :halt, yield</code></li>
              </ol>

              
              <ol start="852" class="post-context"
                  id="post-13" onclick="toggle(13);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # If the current request matches pattern and conditions, fill params
</code></li>
                
                <li class="post-context-line"><code>    # with keys and call the given block.
</code></li>
                
                <li class="post-context-line"><code>    # Revert params afterwards.
</code></li>
                
                <li class="post-context-line"><code>    #
</code></li>
                
                <li class="post-context-line"><code>    # Returns pass block.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block (2 levels) in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="828"
                  class="pre-context" id="pre-14"
                  onclick="toggle(14);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
              </ol>
              

              <ol start="835" class="context" id="14"
                  onclick="toggle(14);">
                <li class="context-line" id="context-14"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="836" class="post-context"
                  id="post-14" onclick="toggle(14);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="865"
                  class="pre-context" id="pre-15"
                  onclick="toggle(15);">
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      catch(:pass) do
</code></li>
                
                <li class="pre-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
              </ol>
              

              <ol start="872" class="context" id="15"
                  onclick="toggle(15);">
                <li class="context-line" id="context-15"><code>        block ? block[self, values] : yield(self, values)</code></li>
              </ol>

              
              <ol start="873" class="post-context"
                  id="post-15" onclick="toggle(15);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # No matching route was found or all routes passed. The default
</code></li>
                
                <li class="post-context-line"><code>    # implementation is to forward the request downstream when running
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="863"
                  class="pre-context" id="pre-16"
                  onclick="toggle(16);">
                
                <li class="pre-context-line"><code>      values += match.captures.to_a.map { |v| force_encoding URI.decode(v) if v }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="870" class="context" id="16"
                  onclick="toggle(16);">
                <li class="context-line" id="context-16"><code>      catch(:pass) do</code></li>
              </ol>

              
              <ol start="871" class="post-context"
                  id="post-16" onclick="toggle(16);">
                
                <li class="post-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
                <li class="post-context-line"><code>        block ? block[self, values] : yield(self, values)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="863"
                  class="pre-context" id="pre-17"
                  onclick="toggle(17);">
                
                <li class="pre-context-line"><code>      values += match.captures.to_a.map { |v| force_encoding URI.decode(v) if v }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="870" class="context" id="17"
                  onclick="toggle(17);">
                <li class="context-line" id="context-17"><code>      catch(:pass) do</code></li>
              </ol>

              
              <ol start="871" class="post-context"
                  id="post-17" onclick="toggle(17);">
                
                <li class="post-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
                <li class="post-context-line"><code>        block ? block[self, values] : yield(self, values)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="827"
                  class="pre-context" id="pre-18"
                  onclick="toggle(18);">
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
              </ol>
              

              <ol start="834" class="context" id="18"
                  onclick="toggle(18);">
                <li class="context-line" id="context-18"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|</code></li>
              </ol>

              
              <ol start="835" class="post-context"
                  id="post-18" onclick="toggle(18);">
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="826"
                  class="pre-context" id="pre-19"
                  onclick="toggle(19);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="833" class="context" id="19"
                  onclick="toggle(19);">
                <li class="context-line" id="context-19"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="834" class="post-context"
                  id="post-19" onclick="toggle(19);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="826"
                  class="pre-context" id="pre-20"
                  onclick="toggle(20);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="833" class="context" id="20"
                  onclick="toggle(20);">
                <li class="context-line" id="context-20"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="834" class="post-context"
                  id="post-20" onclick="toggle(20);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>dispatch!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="929"
                  class="pre-context" id="pre-21"
                  onclick="toggle(21);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Dispatch a request with error handling.
</code></li>
                
                <li class="pre-context-line"><code>    def dispatch!
</code></li>
                
                <li class="pre-context-line"><code>      static! if settings.static? &amp;&amp; (request.get? || request.head?)
</code></li>
                
                <li class="pre-context-line"><code>      filter! :before
</code></li>
                
              </ol>
              

              <ol start="936" class="context" id="21"
                  onclick="toggle(21);">
                <li class="context-line" id="context-21"><code>      route!</code></li>
              </ol>

              
              <ol start="937" class="post-context"
                  id="post-21" onclick="toggle(21);">
                
                <li class="post-context-line"><code>    rescue ::Exception =&gt; boom
</code></li>
                
                <li class="post-context-line"><code>      handle_exception!(boom)
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      filter! :after unless env[&#x27;sinatra.static_file&#x27;]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Error handling during requests.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="762"
                  class="pre-context" id="pre-22"
                  onclick="toggle(22);">
                
                <li class="pre-context-line"><code>      @request  = Request.new(env)
</code></li>
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="769" class="context" id="22"
                  onclick="toggle(22);">
                <li class="context-line" id="context-22"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="770" class="post-context"
                  id="post-22" onclick="toggle(22);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if Array === body and body[0].respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body[0].content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="914"
                  class="pre-context" id="pre-23"
                  onclick="toggle(23);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="921" class="context" id="23"
                  onclick="toggle(23);">
                <li class="context-line" id="context-23"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="922" class="post-context"
                  id="post-23" onclick="toggle(23);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
                <li class="post-context-line"><code>        body res
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="914"
                  class="pre-context" id="pre-24"
                  onclick="toggle(24);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="921" class="context" id="24"
                  onclick="toggle(24);">
                <li class="context-line" id="context-24"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="922" class="post-context"
                  id="post-24" onclick="toggle(24);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
                <li class="post-context-line"><code>        body res
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="914"
                  class="pre-context" id="pre-25"
                  onclick="toggle(25);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="921" class="context" id="25"
                  onclick="toggle(25);">
                <li class="context-line" id="context-25"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="922" class="post-context"
                  id="post-25" onclick="toggle(25);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
                <li class="post-context-line"><code>        body res
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="762"
                  class="pre-context" id="pre-26"
                  onclick="toggle(26);">
                
                <li class="pre-context-line"><code>      @request  = Request.new(env)
</code></li>
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="769" class="context" id="26"
                  onclick="toggle(26);">
                <li class="context-line" id="context-26"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="770" class="post-context"
                  id="post-26" onclick="toggle(26);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if Array === body and body[0].respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body[0].content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="748"
                  class="pre-context" id="pre-27"
                  onclick="toggle(27);">
                
                <li class="pre-context-line"><code>      @app = app
</code></li>
                
                <li class="pre-context-line"><code>      @template_cache = Tilt::Cache.new
</code></li>
                
                <li class="pre-context-line"><code>      yield self if block_given?
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Rack call interface.
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="755" class="context" id="27"
                  onclick="toggle(27);">
                <li class="context-line" id="context-27"><code>      dup.call!(env)</code></li>
              </ol>

              
              <ol start="756" class="post-context"
                  id="post-27" onclick="toggle(27);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    attr_accessor :env, :request, :response, :params
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def call!(env) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      @env      = env
</code></li>
                
                <li class="post-context-line"><code>      @request  = Request.new(env)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;xss_header.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="20"
                  class="pre-context" id="pre-28"
                  onclick="toggle(28);">
                
                <li class="pre-context-line"><code>          &#x27;X-Content-Type-Options&#x27; =&gt; &quot;nosniff&quot;
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>        headers.delete(&quot;X-Content-Type-Options&quot;) unless options[:nosniff]
</code></li>
                
                <li class="pre-context-line"><code>        headers
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="27" class="context" id="28"
                  onclick="toggle(28);">
                <li class="context-line" id="context-28"><code>        status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="28" class="post-context"
                  id="post-28" onclick="toggle(28);">
                
                <li class="post-context-line"><code>        headers = header.merge(headers) if options[:nosniff] and html?(headers)
</code></li>
                
                <li class="post-context-line"><code>        [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="41"
                  class="pre-context" id="pre-29"
                  onclick="toggle(29);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="48" class="context" id="29"
                  onclick="toggle(29);">
                <li class="context-line" id="context-29"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="49" class="post-context"
                  id="post-29" onclick="toggle(29);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="41"
                  class="pre-context" id="pre-30"
                  onclick="toggle(30);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="48" class="context" id="30"
                  onclick="toggle(30);">
                <li class="context-line" id="context-30"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="49" class="post-context"
                  id="post-30" onclick="toggle(30);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;path_traversal.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="9"
                  class="pre-context" id="pre-31"
                  onclick="toggle(31);">
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # Unescapes &#x27;&#x2F;&#x27; and &#x27;.&#x27;, expands +path_info+.
</code></li>
                
                <li class="pre-context-line"><code>    # Thus &lt;tt&gt;GET &#x2F;foo&#x2F;%2e%2e%2fbar&lt;&#x2F;tt&gt; becomes &lt;tt&gt;GET &#x2F;bar&lt;&#x2F;tt&gt;.
</code></li>
                
                <li class="pre-context-line"><code>    class PathTraversal &lt; Base
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        path_was         = env[&quot;PATH_INFO&quot;]
</code></li>
                
                <li class="pre-context-line"><code>        env[&quot;PATH_INFO&quot;] = cleanup path_was if path_was &amp;&amp; !path_was.empty?
</code></li>
                
              </ol>
              

              <ol start="16" class="context" id="31"
                  onclick="toggle(31);">
                <li class="context-line" id="context-31"><code>        app.call env</code></li>
              </ol>

              
              <ol start="17" class="post-context"
                  id="post-31" onclick="toggle(31);">
                
                <li class="post-context-line"><code>      ensure
</code></li>
                
                <li class="post-context-line"><code>        env[&quot;PATH_INFO&quot;] = path_was
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def cleanup(path)
</code></li>
                
                <li class="post-context-line"><code>        parts     = []
</code></li>
                
                <li class="post-context-line"><code>        unescaped = path.gsub(&#x27;%2e&#x27;, &#x27;.&#x27;).gsub(&#x27;%2f&#x27;, &#x27;&#x2F;&#x27;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;json_csrf.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="10"
                  class="pre-context" id="pre-32"
                  onclick="toggle(32);">
                
                <li class="pre-context-line"><code>    # JSON GET APIs are vulnerable to being embedded as JavaScript while the
</code></li>
                
                <li class="pre-context-line"><code>    # Array prototype has been patched to track data. Checks the referrer
</code></li>
                
                <li class="pre-context-line"><code>    # even on GET requests if the content type is JSON.
</code></li>
                
                <li class="pre-context-line"><code>    class JsonCsrf &lt; Base
</code></li>
                
                <li class="pre-context-line"><code>      default_reaction :deny
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="17" class="context" id="32"
                  onclick="toggle(32);">
                <li class="context-line" id="context-32"><code>        status, headers, body = app.call(env)</code></li>
              </ol>

              
              <ol start="18" class="post-context"
                  id="post-32" onclick="toggle(32);">
                
                <li class="post-context-line"><code>        if headers[&#x27;Content-Type&#x27;].to_s.split(&#x27;;&#x27;, 2).first =~ &#x2F;^\s*application\&#x2F;json\s*$&#x2F;
</code></li>
                
                <li class="post-context-line"><code>          if origin(env).nil? and referrer(env) != Request.new(env).host
</code></li>
                
                <li class="post-context-line"><code>            result = react(env)
</code></li>
                
                <li class="post-context-line"><code>            warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>        result or [status, headers, body]
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="41"
                  class="pre-context" id="pre-33"
                  onclick="toggle(33);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="48" class="context" id="33"
                  onclick="toggle(33);">
                <li class="context-line" id="context-33"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="49" class="post-context"
                  id="post-33" onclick="toggle(33);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="41"
                  class="pre-context" id="pre-34"
                  onclick="toggle(34);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="48" class="context" id="34"
                  onclick="toggle(34);">
                <li class="context-line" id="context-34"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="49" class="post-context"
                  id="post-34" onclick="toggle(34);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-protection-1.3.2&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;xss_header.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="20"
                  class="pre-context" id="pre-35"
                  onclick="toggle(35);">
                
                <li class="pre-context-line"><code>          &#x27;X-Content-Type-Options&#x27; =&gt; &quot;nosniff&quot;
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>        headers.delete(&quot;X-Content-Type-Options&quot;) unless options[:nosniff]
</code></li>
                
                <li class="pre-context-line"><code>        headers
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="27" class="context" id="35"
                  onclick="toggle(35);">
                <li class="context-line" id="context-35"><code>        status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="28" class="post-context"
                  id="post-35" onclick="toggle(35);">
                
                <li class="post-context-line"><code>        headers = header.merge(headers) if options[:nosniff] and html?(headers)
</code></li>
                
                <li class="post-context-line"><code>        [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;session&#x2F;abstract&#x2F;id.rb</code> in
                <code><strong>context</strong></code>
            </li>

            <li class="code system">
              
              <ol start="198"
                  class="pre-context" id="pre-36"
                  onclick="toggle(36);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        def call(env)
</code></li>
                
                <li class="pre-context-line"><code>          context(env)
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        def context(env, app=@app)
</code></li>
                
                <li class="pre-context-line"><code>          prepare_session(env)
</code></li>
                
              </ol>
              

              <ol start="205" class="context" id="36"
                  onclick="toggle(36);">
                <li class="context-line" id="context-36"><code>          status, headers, body = app.call(env)</code></li>
              </ol>

              
              <ol start="206" class="post-context"
                  id="post-36" onclick="toggle(36);">
                
                <li class="post-context-line"><code>          commit_session(env, status, headers, body)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        def initialize_sid
</code></li>
                
                <li class="post-context-line"><code>          @sidbits = @default_options[:sidbits]
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;session&#x2F;abstract&#x2F;id.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="193"
                  class="pre-context" id="pre-37"
                  onclick="toggle(37);">
                
                <li class="pre-context-line"><code>          @default_options = self.class::DEFAULT_OPTIONS.merge(options)
</code></li>
                
                <li class="pre-context-line"><code>          @key = @default_options.delete(:key)
</code></li>
                
                <li class="pre-context-line"><code>          @cookie_only = @default_options.delete(:cookie_only)
</code></li>
                
                <li class="pre-context-line"><code>          initialize_sid
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        def call(env)
</code></li>
                
              </ol>
              

              <ol start="200" class="context" id="37"
                  onclick="toggle(37);">
                <li class="context-line" id="context-37"><code>          context(env)</code></li>
              </ol>

              
              <ol start="201" class="post-context"
                  id="post-37" onclick="toggle(37);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        def context(env, app=@app)
</code></li>
                
                <li class="post-context-line"><code>          prepare_session(env)
</code></li>
                
                <li class="post-context-line"><code>          status, headers, body = app.call(env)
</code></li>
                
                <li class="post-context-line"><code>          commit_session(env, status, headers, body)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;logger.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="8"
                  class="pre-context" id="pre-38"
                  onclick="toggle(38);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
                <li class="pre-context-line"><code>      logger = ::Logger.new(env[&#x27;rack.errors&#x27;])
</code></li>
                
                <li class="pre-context-line"><code>      logger.level = @level
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      env[&#x27;rack.logger&#x27;] = logger
</code></li>
                
              </ol>
              

              <ol start="15" class="context" id="38"
                  onclick="toggle(38);">
                <li class="context-line" id="context-38"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="16" class="post-context"
                  id="post-38" onclick="toggle(38);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;commonlogger.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="26"
                  class="pre-context" id="pre-39"
                  onclick="toggle(39);">
                
                <li class="pre-context-line"><code>    def initialize(app, logger=nil)
</code></li>
                
                <li class="pre-context-line"><code>      @app = app
</code></li>
                
                <li class="pre-context-line"><code>      @logger = logger
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
                <li class="pre-context-line"><code>      began_at = Time.now
</code></li>
                
              </ol>
              

              <ol start="33" class="context" id="39"
                  onclick="toggle(39);">
                <li class="context-line" id="context-39"><code>      status, header, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="34" class="post-context"
                  id="post-39" onclick="toggle(39);">
                
                <li class="post-context-line"><code>      header = Utils::HeaderHash.new(header)
</code></li>
                
                <li class="post-context-line"><code>      body = BodyProxy.new(body) { log(env, status, header, began_at) }
</code></li>
                
                <li class="post-context-line"><code>      [status, header, body]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="129"
                  class="pre-context" id="pre-40"
                  onclick="toggle(40);">
                
                <li class="pre-context-line"><code>      env[&#x27;sinatra.commonlogger&#x27;] ? @app.call(env) : super
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    superclass.class_eval do
</code></li>
                
                <li class="pre-context-line"><code>      alias call_without_check call unless method_defined? :call_without_check
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        env[&#x27;sinatra.commonlogger&#x27;] = true
</code></li>
                
              </ol>
              

              <ol start="136" class="context" id="40"
                  onclick="toggle(40);">
                <li class="context-line" id="context-40"><code>        call_without_check(env)</code></li>
              </ol>

              
              <ol start="137" class="post-context"
                  id="post-40" onclick="toggle(40);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  class NotFound &lt; NameError #:nodoc:
</code></li>
                
                <li class="post-context-line"><code>    def code ; 404 ; end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="122"
                  class="pre-context" id="pre-41"
                  onclick="toggle(41);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>  # Behaves exactly like Rack::CommonLogger with the notable exception that it does nothing,
</code></li>
                
                <li class="pre-context-line"><code>  # if another CommonLogger is already in the middleware chain.
</code></li>
                
                <li class="pre-context-line"><code>  class CommonLogger &lt; Rack::CommonLogger
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="129" class="context" id="41"
                  onclick="toggle(41);">
                <li class="context-line" id="context-41"><code>      env[&#x27;sinatra.commonlogger&#x27;] ? @app.call(env) : super</code></li>
              </ol>

              
              <ol start="130" class="post-context"
                  id="post-41" onclick="toggle(41);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    superclass.class_eval do
</code></li>
                
                <li class="post-context-line"><code>      alias call_without_check call unless method_defined? :call_without_check
</code></li>
                
                <li class="post-context-line"><code>      def call(env)
</code></li>
                
                <li class="post-context-line"><code>        env[&#x27;sinatra.commonlogger&#x27;] = true
</code></li>
                
                <li class="post-context-line"><code>        call_without_check(env)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;head.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="4"
                  class="pre-context" id="pre-42"
                  onclick="toggle(42);">
                
                <li class="pre-context-line"><code>  # Rack::Head returns an empty body for all HEAD requests. It leaves
</code></li>
                
                <li class="pre-context-line"><code>  # all other requests unchanged.
</code></li>
                
                <li class="pre-context-line"><code>  def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>    @app = app
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>  def call(env)
</code></li>
                
              </ol>
              

              <ol start="11" class="context" id="42"
                  onclick="toggle(42);">
                <li class="context-line" id="context-42"><code>    status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="12" class="post-context"
                  id="post-42" onclick="toggle(42);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    if env[&quot;REQUEST_METHOD&quot;] == &quot;HEAD&quot;
</code></li>
                
                <li class="post-context-line"><code>      body.close if body.respond_to? :close
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, []]
</code></li>
                
                <li class="post-context-line"><code>    else
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.5.0&#x2F;lib&#x2F;rack&#x2F;methodoverride.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="14"
                  class="pre-context" id="pre-43"
                  onclick="toggle(43);">
                
                <li class="pre-context-line"><code>        method = method_override(env)
</code></li>
                
                <li class="pre-context-line"><code>        if HTTP_METHODS.include?(method)
</code></li>
                
                <li class="pre-context-line"><code>          env[&quot;rack.methodoverride.original_method&quot;] = env[&quot;REQUEST_METHOD&quot;]
</code></li>
                
                <li class="pre-context-line"><code>          env[&quot;REQUEST_METHOD&quot;] = method
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="21" class="context" id="43"
                  onclick="toggle(43);">
                <li class="context-line" id="context-43"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="22" class="post-context"
                  id="post-43" onclick="toggle(43);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def method_override(env)
</code></li>
                
                <li class="post-context-line"><code>      req = Request.new(env)
</code></li>
                
                <li class="post-context-line"><code>      method = req.POST[METHOD_OVERRIDE_PARAM_KEY] ||
</code></li>
                
                <li class="post-context-line"><code>        env[HTTP_METHOD_OVERRIDE_HEADER]
</code></li>
                
                <li class="post-context-line"><code>      method.to_s.upcase
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;showexceptions.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="14"
                  class="pre-context" id="pre-44"
                  onclick="toggle(44);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>      @app      = app
</code></li>
                
                <li class="pre-context-line"><code>      @template = ERB.new(TEMPLATE)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="21" class="context" id="44"
                  onclick="toggle(44);">
                <li class="context-line" id="context-44"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="22" class="post-context"
                  id="post-44" onclick="toggle(44);">
                
                <li class="post-context-line"><code>    rescue Exception =&gt; e
</code></li>
                
                <li class="post-context-line"><code>      errors, env[&quot;rack.errors&quot;] = env[&quot;rack.errors&quot;], @@eats_errors
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if respond_to?(:prefers_plain_text?) and prefers_plain_text?(env)
</code></li>
                
                <li class="post-context-line"><code>        content_type = &quot;text&#x2F;plain&quot;
</code></li>
                
                <li class="post-context-line"><code>        body = [dump_exception(e)]
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="92"
                  class="pre-context" id="pre-45"
                  onclick="toggle(45);">
                
                <li class="pre-context-line"><code>  # Some Rack handlers (Thin, Rainbows!) implement an extended body object protocol, however,
</code></li>
                
                <li class="pre-context-line"><code>  # some middleware (namely Rack::Lint) will break it by not mirroring the methods in question.
</code></li>
                
                <li class="pre-context-line"><code>  # This middleware will detect an extended body object and will make sure it reaches the
</code></li>
                
                <li class="pre-context-line"><code>  # handler directly. We do this here, so our middleware and middleware set up by the app will
</code></li>
                
                <li class="pre-context-line"><code>  # still be able to run.
</code></li>
                
                <li class="pre-context-line"><code>  class ExtendedRack &lt; Struct.new(:app)
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="99" class="context" id="45"
                  onclick="toggle(45);">
                <li class="context-line" id="context-45"><code>      result, callback = app.call(env), env[&#x27;async.callback&#x27;]</code></li>
              </ol>

              
              <ol start="100" class="post-context"
                  id="post-45" onclick="toggle(45);">
                
                <li class="post-context-line"><code>      return result unless callback and async?(*result)
</code></li>
                
                <li class="post-context-line"><code>      after_response { callback.call result }
</code></li>
                
                <li class="post-context-line"><code>      setup_close(env, *result)
</code></li>
                
                <li class="post-context-line"><code>      throw :async
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1382"
                  class="pre-context" id="pre-46"
                  onclick="toggle(46);">
                
                <li class="pre-context-line"><code>        setup_default_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        setup_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        builder.run new!(*args, &amp;bk)
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1389" class="context" id="46"
                  onclick="toggle(46);">
                <li class="context-line" id="context-46"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1390" class="post-context"
                  id="post-46" onclick="toggle(46);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>      def setup_default_middleware(builder)
</code></li>
                
                <li class="post-context-line"><code>        builder.use ExtendedRack
</code></li>
                
                <li class="post-context-line"><code>        builder.use ShowExceptions       if show_exceptions?
</code></li>
                
                <li class="post-context-line"><code>        builder.use Rack::MethodOverride if method_override?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>synchronize</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1464"
                  class="pre-context" id="pre-47"
                  onclick="toggle(47);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @@mutex = Mutex.new
</code></li>
                
                <li class="pre-context-line"><code>      def synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        if lock?
</code></li>
                
                <li class="pre-context-line"><code>          @@mutex.synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="1471" class="context" id="47"
                  onclick="toggle(47);">
                <li class="context-line" id="context-47"><code>          yield</code></li>
              </ol>

              
              <ol start="1472" class="post-context"
                  id="post-47" onclick="toggle(47);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    public
</code></li>
                
                <li class="post-context-line"><code>      CALLERS_TO_IGNORE = [ # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>        &#x2F;\&#x2F;sinatra(\&#x2F;(base|main|showexceptions))?\.rb$&#x2F;, # all sinatra code
</code></li>
                
                <li class="post-context-line"><code>        &#x2F;lib\&#x2F;tilt.*\.rb$&#x2F;,                              # all tilt code
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.3.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1382"
                  class="pre-context" id="pre-48"
                  onclick="toggle(48);">
                
                <li class="pre-context-line"><code>        setup_default_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        setup_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        builder.run new!(*args, &amp;bk)
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1389" class="context" id="48"
                  onclick="toggle(48);">
                <li class="context-line" id="context-48"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1390" class="post-context"
                  id="post-48" onclick="toggle(48);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>      def setup_default_middleware(builder)
</code></li>
                
                <li class="post-context-line"><code>        builder.use ExtendedRack
</code></li>
                
                <li class="post-context-line"><code>        builder.use ShowExceptions       if show_exceptions?
</code></li>
                
                <li class="post-context-line"><code>        builder.use Rack::MethodOverride if method_override?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;mock_session.rb</code> in
                <code><strong>request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="23"
                  class="pre-context" id="pre-49"
                  onclick="toggle(49);">
                
                <li class="pre-context-line"><code>    def set_cookie(cookie, uri = nil)
</code></li>
                
                <li class="pre-context-line"><code>      cookie_jar.merge(cookie, uri)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>      env[&quot;HTTP_COOKIE&quot;] ||= cookie_jar.for(uri)
</code></li>
                
                <li class="pre-context-line"><code>      @last_request = Rack::Request.new(env)
</code></li>
                
              </ol>
              

              <ol start="30" class="context" id="49"
                  onclick="toggle(49);">
                <li class="context-line" id="context-49"><code>      status, headers, body = @app.call(@last_request.env)</code></li>
              </ol>

              
              <ol start="31" class="post-context"
                  id="post-49" onclick="toggle(49);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @last_response = MockResponse.new(status, headers, body, env[&quot;rack.errors&quot;].flush)
</code></li>
                
                <li class="post-context-line"><code>      body.close if body.respond_to?(:close)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      cookie_jar.merge(last_response.headers[&quot;Set-Cookie&quot;], uri)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @after_request.each { |hook| hook.call }
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>process_request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="223"
                  class="pre-context" id="pre-50"
                  onclick="toggle(50);">
                
                <li class="pre-context-line"><code>        Rack::MockRequest.env_for(uri.to_s, env)
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def process_request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>        uri = URI.parse(uri)
</code></li>
                
                <li class="pre-context-line"><code>        uri.host ||= @default_host
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="230" class="context" id="50"
                  onclick="toggle(50);">
                <li class="context-line" id="context-50"><code>        @rack_mock_session.request(uri, env)</code></li>
              </ol>

              
              <ol start="231" class="post-context"
                  id="post-50" onclick="toggle(50);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        if retry_with_digest_auth?(env)
</code></li>
                
                <li class="post-context-line"><code>          auth_env = env.merge({
</code></li>
                
                <li class="post-context-line"><code>            &quot;HTTP_AUTHORIZATION&quot;          =&gt; digest_auth_header,
</code></li>
                
                <li class="post-context-line"><code>            &quot;rack-test.digest_auth_retry&quot; =&gt; true
</code></li>
                
                <li class="post-context-line"><code>          })
</code></li>
                
                <li class="post-context-line"><code>          auth_env.delete(&#x27;rack.request&#x27;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="50"
                  class="pre-context" id="pre-51"
                  onclick="toggle(51);">
                
                <li class="pre-context-line"><code>      # the app&#x27;s response in #last_response. Yield #last_response to a block
</code></li>
                
                <li class="pre-context-line"><code>      # if given.
</code></li>
                
                <li class="pre-context-line"><code>      #
</code></li>
                
                <li class="pre-context-line"><code>      # Example:
</code></li>
                
                <li class="pre-context-line"><code>      #   get &quot;&#x2F;&quot;
</code></li>
                
                <li class="pre-context-line"><code>      def get(uri, params = {}, env = {}, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        env = env_for(uri, env.merge(:method =&gt; &quot;GET&quot;, :params =&gt; params))
</code></li>
                
              </ol>
              

              <ol start="57" class="context" id="51"
                  onclick="toggle(51);">
                <li class="context-line" id="context-51"><code>        process_request(uri, env, &amp;block)</code></li>
              </ol>

              
              <ol start="58" class="post-context"
                  id="post-51" onclick="toggle(51);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Issue a POST request for the given URI. See #get
</code></li>
                
                <li class="post-context-line"><code>      #
</code></li>
                
                <li class="post-context-line"><code>      # Example:
</code></li>
                
                <li class="post-context-line"><code>      #   post &quot;&#x2F;signup&quot;, &quot;name&quot; =&gt; &quot;Bryan&quot;
</code></li>
                
                <li class="post-context-line"><code>      def post(uri, params = {}, env = {}, &amp;block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>block in build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="184"
                  class="pre-context" id="pre-52"
                  onclick="toggle(52);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      attr_reader :served
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        session = Rack::Test::Session.new app
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        get = lambda { |path|
</code></li>
                
              </ol>
              

              <ol start="191" class="context" id="52"
                  onclick="toggle(52);">
                <li class="context-line" id="context-52"><code>          response = session.get(path)</code></li>
              </ol>

              
              <ol start="192" class="post-context"
                  id="post-52" onclick="toggle(52);">
                
                <li class="post-context-line"><code>          out      = response.body
</code></li>
                
                <li class="post-context-line"><code>          mtime    = Time.parse(response.headers[&#x27;Last-Modified&#x27;])  if response.headers[&#x27;Last-Modified&#x27;]
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          [ out, mtime ]
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        packages.each { |_, pack|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>[]</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="192"
                  class="pre-context" id="pre-53"
                  onclick="toggle(53);">
                
                <li class="pre-context-line"><code>          out      = response.body
</code></li>
                
                <li class="pre-context-line"><code>          mtime    = Time.parse(response.headers[&#x27;Last-Modified&#x27;])  if response.headers[&#x27;Last-Modified&#x27;]
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>          [ out, mtime ]
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        packages.each { |_, pack|
</code></li>
                
              </ol>
              

              <ol start="199" class="context" id="53"
                  onclick="toggle(53);">
                <li class="context-line" id="context-53"><code>          out, mtime = get[pack.path]</code></li>
              </ol>

              
              <ol start="200" class="post-context"
                  id="post-53" onclick="toggle(53);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
                <li class="post-context-line"><code>          out, mtime = get[path]
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>block in build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="192"
                  class="pre-context" id="pre-54"
                  onclick="toggle(54);">
                
                <li class="pre-context-line"><code>          out      = response.body
</code></li>
                
                <li class="pre-context-line"><code>          mtime    = Time.parse(response.headers[&#x27;Last-Modified&#x27;])  if response.headers[&#x27;Last-Modified&#x27;]
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>          [ out, mtime ]
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        packages.each { |_, pack|
</code></li>
                
              </ol>
              

              <ol start="199" class="context" id="54"
                  onclick="toggle(54);">
                <li class="context-line" id="context-54"><code>          out, mtime = get[pack.path]</code></li>
              </ol>

              
              <ol start="200" class="post-context"
                  id="post-54" onclick="toggle(54);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
                <li class="post-context-line"><code>          out, mtime = get[path]
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="191"
                  class="pre-context" id="pre-55"
                  onclick="toggle(55);">
                
                <li class="pre-context-line"><code>          response = session.get(path)
</code></li>
                
                <li class="pre-context-line"><code>          out      = response.body
</code></li>
                
                <li class="pre-context-line"><code>          mtime    = Time.parse(response.headers[&#x27;Last-Modified&#x27;])  if response.headers[&#x27;Last-Modified&#x27;]
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>          [ out, mtime ]
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="198" class="context" id="55"
                  onclick="toggle(55);">
                <li class="context-line" id="context-55"><code>        packages.each { |_, pack|</code></li>
              </ol>

              
              <ol start="199" class="post-context"
                  id="post-55" onclick="toggle(55);">
                
                <li class="post-context-line"><code>          out, mtime = get[pack.path]
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="191"
                  class="pre-context" id="pre-56"
                  onclick="toggle(56);">
                
                <li class="pre-context-line"><code>          response = session.get(path)
</code></li>
                
                <li class="pre-context-line"><code>          out      = response.body
</code></li>
                
                <li class="pre-context-line"><code>          mtime    = Time.parse(response.headers[&#x27;Last-Modified&#x27;])  if response.headers[&#x27;Last-Modified&#x27;]
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>          [ out, mtime ]
</code></li>
                
                <li class="pre-context-line"><code>        }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="198" class="context" id="56"
                  onclick="toggle(56);">
                <li class="context-line" id="context-56"><code>        packages.each { |_, pack|</code></li>
              </ol>

              
              <ol start="199" class="post-context"
                  id="post-56" onclick="toggle(56);">
                
                <li class="post-context-line"><code>          out, mtime = get[pack.path]
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, mtime, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.1.2&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;rake.rb</code> in
                <code><strong>block (2 levels) in &lt;top (required)&gt;</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="18"
                  class="pre-context" id="pre-57"
                  onclick="toggle(57);">
                
                <li class="pre-context-line"><code>  require File.expand_path(APP_FILE, Dir.pwd)
</code></li>
                
                <li class="pre-context-line"><code>  class_from_string(APP_CLASS)
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>namespace :assetpack do
</code></li>
                
                <li class="pre-context-line"><code>  desc &quot;Build assets&quot;
</code></li>
                
                <li class="pre-context-line"><code>  task :build do
</code></li>
                
              </ol>
              

              <ol start="25" class="context" id="57"
                  onclick="toggle(57);">
                <li class="context-line" id="context-57"><code>    app.assets.build! { |file|</code></li>
              </ol>

              
              <ol start="26" class="post-context"
                  id="post-57" onclick="toggle(57);">
                
                <li class="post-context-line"><code>      puts &quot;+ #{file.gsub(Dir.pwd, &#x27;&#x27;)}&quot;
</code></li>
                
                <li class="post-context-line"><code>    }
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="221"
                  class="pre-context" id="pre-58"
                  onclick="toggle(58);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="228" class="context" id="58"
                  onclick="toggle(58);">
                <li class="context-line" id="context-58"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="229" class="post-context"
                  id="post-58" onclick="toggle(58);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in execute</strong></code>
            </li>

            <li class="code system">
              
              <ol start="221"
                  class="pre-context" id="pre-59"
                  onclick="toggle(59);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="228" class="context" id="59"
                  onclick="toggle(59);">
                <li class="context-line" id="context-59"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="229" class="post-context"
                  id="post-59" onclick="toggle(59);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code system">
              
              <ol start="216"
                  class="pre-context" id="pre-60"
                  onclick="toggle(60);">
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="223" class="context" id="60"
                  onclick="toggle(60);">
                <li class="context-line" id="context-60"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="224" class="post-context"
                  id="post-60" onclick="toggle(60);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>execute</strong></code>
            </li>

            <li class="code system">
              
              <ol start="216"
                  class="pre-context" id="pre-61"
                  onclick="toggle(61);">
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="223" class="context" id="61"
                  onclick="toggle(61);">
                <li class="context-line" id="context-61"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="224" class="post-context"
                  id="post-61" onclick="toggle(61);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in invoke_with_call_chain</strong></code>
            </li>

            <li class="code system">
              
              <ol start="159"
                  class="pre-context" id="pre-62"
                  onclick="toggle(62);">
                
                <li class="pre-context-line"><code>      @lock.synchronize do
</code></li>
                
                <li class="pre-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="pre-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
              </ol>
              

              <ol start="166" class="context" id="62"
                  onclick="toggle(62);">
                <li class="context-line" id="context-62"><code>        execute(task_args) if needed?</code></li>
              </ol>

              
              <ol start="167" class="post-context"
                  id="post-62" onclick="toggle(62);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue Exception =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>      add_chain_to(ex, new_chain)
</code></li>
                
                <li class="post-context-line"><code>      raise ex
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    protected :invoke_with_call_chain
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;monitor.rb</code> in
                <code><strong>mon_synchronize</strong></code>
            </li>

            <li class="code app">
              
              <ol start="194"
                  class="pre-context" id="pre-63"
                  onclick="toggle(63);">
                
                <li class="pre-context-line"><code>  # Enters exclusive section and executes the block.  Leaves the exclusive
</code></li>
                
                <li class="pre-context-line"><code>  # section automatically when the block exits.  See example under
</code></li>
                
                <li class="pre-context-line"><code>  # +MonitorMixin+.
</code></li>
                
                <li class="pre-context-line"><code>  #
</code></li>
                
                <li class="pre-context-line"><code>  def mon_synchronize
</code></li>
                
                <li class="pre-context-line"><code>    mon_enter
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="201" class="context" id="63"
                  onclick="toggle(63);">
                <li class="context-line" id="context-63"><code>      yield</code></li>
              </ol>

              
              <ol start="202" class="post-context"
                  id="post-63" onclick="toggle(63);">
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      mon_exit
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>  alias synchronize mon_synchronize
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  #
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke_with_call_chain</strong></code>
            </li>

            <li class="code system">
              
              <ol start="152"
                  class="pre-context" id="pre-64"
                  onclick="toggle(64);">
                
                <li class="pre-context-line"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="pre-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
              </ol>
              

              <ol start="159" class="context" id="64"
                  onclick="toggle(64);">
                <li class="context-line" id="context-64"><code>      @lock.synchronize do</code></li>
              </ol>

              
              <ol start="160" class="post-context"
                  id="post-64" onclick="toggle(64);">
                
                <li class="post-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="post-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="post-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="post-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
                <li class="post-context-line"><code>        execute(task_args) if needed?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code system">
              
              <ol start="145"
                  class="pre-context" id="pre-65"
                  onclick="toggle(65);">
                
                <li class="pre-context-line"><code>      @comment = nil
</code></li>
                
                <li class="pre-context-line"><code>      self
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Invoke the task if it is needed.  Prerequisites are invoked first.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(*args)
</code></li>
                
                <li class="pre-context-line"><code>      task_args = TaskArguments.new(arg_names, args)
</code></li>
                
              </ol>
              

              <ol start="152" class="context" id="65"
                  onclick="toggle(65);">
                <li class="context-line" id="context-65"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)</code></li>
              </ol>

              
              <ol start="153" class="post-context"
                  id="post-65" onclick="toggle(65);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="post-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="post-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
                <li class="post-context-line"><code>      @lock.synchronize do
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>invoke_task</strong></code>
            </li>

            <li class="code system">
              
              <ol start="136"
                  class="pre-context" id="pre-66"
                  onclick="toggle(66);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # private ----------------------------------------------------------------
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_task(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      name, args = parse_task_string(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      t = self[name]
</code></li>
                
              </ol>
              

              <ol start="143" class="context" id="66"
                  onclick="toggle(66);">
                <li class="context-line" id="context-66"><code>      t.invoke(*args)</code></li>
              </ol>

              
              <ol start="144" class="post-context"
                  id="post-66" onclick="toggle(66);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def parse_task_string(string)
</code></li>
                
                <li class="post-context-line"><code>      if string =~ &#x2F;^([^\[]+)(\[(.*)\])$&#x2F;
</code></li>
                
                <li class="post-context-line"><code>        name = $1
</code></li>
                
                <li class="post-context-line"><code>        args = $3.split(&#x2F;\s*,\s*&#x2F;)
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block (2 levels) in top_level</strong></code>
            </li>

            <li class="code system">
              
              <ol start="94"
                  class="pre-context" id="pre-67"
                  onclick="toggle(67);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="101" class="context" id="67"
                  onclick="toggle(67);">
                <li class="context-line" id="context-67"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="102" class="post-context"
                  id="post-67" onclick="toggle(67);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code system">
              
              <ol start="94"
                  class="pre-context" id="pre-68"
                  onclick="toggle(68);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="101" class="context" id="68"
                  onclick="toggle(68);">
                <li class="context-line" id="context-68"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="102" class="post-context"
                  id="post-68" onclick="toggle(68);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in top_level</strong></code>
            </li>

            <li class="code system">
              
              <ol start="94"
                  class="pre-context" id="pre-69"
                  onclick="toggle(69);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="101" class="context" id="69"
                  onclick="toggle(69);">
                <li class="context-line" id="context-69"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="102" class="post-context"
                  id="post-69" onclick="toggle(69);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>run_with_threads</strong></code>
            </li>

            <li class="code system">
              
              <ol start="103"
                  class="pre-context" id="pre-70"
                  onclick="toggle(70);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="pre-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="pre-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="110" class="context" id="70"
                  onclick="toggle(70);">
                <li class="context-line" id="context-70"><code>      yield</code></li>
              </ol>

              
              <ol start="111" class="post-context"
                  id="post-70" onclick="toggle(70);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.join
</code></li>
                
                <li class="post-context-line"><code>      if options.job_stats
</code></li>
                
                <li class="post-context-line"><code>        stats = thread_pool.statistics
</code></li>
                
                <li class="post-context-line"><code>        puts &quot;Maximum active threads: #{stats[:max_active_threads]}&quot;
</code></li>
                
                <li class="post-context-line"><code>        puts &quot;Total threads in play:  #{stats[:total_threads_in_play]}&quot;
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>top_level</strong></code>
            </li>

            <li class="code system">
              
              <ol start="88"
                  class="pre-context" id="pre-71"
                  onclick="toggle(71);">
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        raw_load_rakefile
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the top level tasks of a Rake application.
</code></li>
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
              </ol>
              

              <ol start="95" class="context" id="71"
                  onclick="toggle(71);">
                <li class="context-line" id="context-71"><code>      run_with_threads do</code></li>
              </ol>

              
              <ol start="96" class="post-context"
                  id="post-71" onclick="toggle(71);">
                
                <li class="post-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="post-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="post-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="post-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in run</strong></code>
            </li>

            <li class="code system">
              
              <ol start="66"
                  class="pre-context" id="pre-72"
                  onclick="toggle(72);">
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        init
</code></li>
                
                <li class="pre-context-line"><code>        load_rakefile
</code></li>
                
              </ol>
              

              <ol start="73" class="context" id="72"
                  onclick="toggle(72);">
                <li class="context-line" id="context-72"><code>        top_level</code></li>
              </ol>

              
              <ol start="74" class="post-context"
                  id="post-72" onclick="toggle(72);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
                <li class="post-context-line"><code>    def init(app_name=&#x27;rake&#x27;)
</code></li>
                
                <li class="post-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="post-context-line"><code>        @name = app_name
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>standard_exception_handling</strong></code>
            </li>

            <li class="code system">
              
              <ol start="153"
                  class="pre-context" id="pre-73"
                  onclick="toggle(73);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      [name, args]
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Provide standard exception handling for the given block.
</code></li>
                
                <li class="pre-context-line"><code>    def standard_exception_handling
</code></li>
                
                <li class="pre-context-line"><code>      begin
</code></li>
                
              </ol>
              

              <ol start="160" class="context" id="73"
                  onclick="toggle(73);">
                <li class="context-line" id="context-73"><code>        yield</code></li>
              </ol>

              
              <ol start="161" class="post-context"
                  id="post-73" onclick="toggle(73);">
                
                <li class="post-context-line"><code>      rescue SystemExit =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        # Exit silently with current status
</code></li>
                
                <li class="post-context-line"><code>        raise
</code></li>
                
                <li class="post-context-line"><code>      rescue OptionParser::InvalidOption =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        $stderr.puts ex.message
</code></li>
                
                <li class="post-context-line"><code>        exit(false)
</code></li>
                
                <li class="post-context-line"><code>      rescue Exception =&gt; ex
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>run</strong></code>
            </li>

            <li class="code system">
              
              <ol start="63"
                  class="pre-context" id="pre-74"
                  onclick="toggle(74);">
                
                <li class="pre-context-line"><code>    # * Define the tasks (+load_rakefile+).
</code></li>
                
                <li class="pre-context-line"><code>    # * Run the top level tasks (+top_level+).
</code></li>
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
              </ol>
              

              <ol start="70" class="context" id="74"
                  onclick="toggle(74);">
                <li class="context-line" id="context-74"><code>      standard_exception_handling do</code></li>
              </ol>

              
              <ol start="71" class="post-context"
                  id="post-74" onclick="toggle(74);">
                
                <li class="post-context-line"><code>        init
</code></li>
                
                <li class="post-context-line"><code>        load_rakefile
</code></li>
                
                <li class="post-context-line"><code>        top_level
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;var&#x2F;lib&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-10.0.3&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;top (required)&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="26"
                  class="pre-context" id="pre-75"
                  onclick="toggle(75);">
                
                <li class="pre-context-line"><code>  require &#x27;rubygems&#x27;
</code></li>
                
                <li class="pre-context-line"><code>  gem &#x27;rake&#x27;
</code></li>
                
                <li class="pre-context-line"><code>rescue LoadError
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>require &#x27;rake&#x27;
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="33" class="context" id="75"
                  onclick="toggle(75);">
                <li class="context-line" id="context-75"><code>Rake.application.run</code></li>
              </ol>

              
              <ol start="34" class="post-context"
                  id="post-75" onclick="toggle(75);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;bin&#x2F;rake</code> in
                <code><strong>load</strong></code>
            </li>

            <li class="code system">
              
              <ol start="12"
                  class="pre-context" id="pre-76"
                  onclick="toggle(76);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>if ARGV.first =~ &#x2F;^_(.*)_$&#x2F; and Gem::Version.correct? $1 then
</code></li>
                
                <li class="pre-context-line"><code>  version = $1
</code></li>
                
                <li class="pre-context-line"><code>  ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="19" class="context" id="76"
                  onclick="toggle(76);">
                <li class="context-line" id="context-76"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="20" class="post-context"
                  id="post-76" onclick="toggle(76);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;main&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="12"
                  class="pre-context" id="pre-77"
                  onclick="toggle(77);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>if ARGV.first =~ &#x2F;^_(.*)_$&#x2F; and Gem::Version.correct? $1 then
</code></li>
                
                <li class="pre-context-line"><code>  version = $1
</code></li>
                
                <li class="pre-context-line"><code>  ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="19" class="context" id="77"
                  onclick="toggle(77);">
                <li class="context-line" id="context-77"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="20" class="post-context"
                  id="post-77" onclick="toggle(77);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      

      </ul>
    </div> <!-- /BACKTRACE -->

    <div id="get">
      <h3 id="get-info">GET</h3>
      
        <p class="no-data">No GET data.</p>
      
      <div class="clear"></div>
    </div> <!-- /GET -->

    <div id="post">
      <h3 id="post-info">POST</h3>
      
        <p class="no-data">No POST data.</p>
      
      <div class="clear"></div>
    </div> <!-- /POST -->

    <div id="cookies">
      <h3 id="cookie-info">COOKIES</h3>
      
        <p class="no-data">No cookie data.</p>
      
      <div class="clear"></div>
    </div> <!-- /COOKIES -->

    <div id="rack">
      <h3 id="env-info">Rack ENV</h3>
      <table class="req">
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
         
         <tr>
           <td>CONTENT_LENGTH</td>
           <td class="code"><div>0</div></td>
         </tr>
         
         <tr>
           <td>HTTPS</td>
           <td class="code"><div>off</div></td>
         </tr>
         
         <tr>
           <td>HTTP_COOKIE</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>HTTP_HOST</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>PATH_INFO</td>
           <td class="code"><div>&#x2F;assets&#x2F;application.js</div></td>
         </tr>
         
         <tr>
           <td>QUERY_STRING</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>REMOTE_ADDR</td>
           <td class="code"><div>127.0.0.1</div></td>
         </tr>
         
         <tr>
           <td>REQUEST_METHOD</td>
           <td class="code"><div>GET</div></td>
         </tr>
         
         <tr>
           <td>SCRIPT_NAME</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>SERVER_NAME</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>SERVER_PORT</td>
           <td class="code"><div>80</div></td>
         </tr>
         
         <tr>
           <td>rack.errors</td>
           <td class="code"><div>#&lt;Object:0x93709d4&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.input</td>
           <td class="code"><div>#&lt;StringIO:0x9a18494&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.logger</td>
           <td class="code"><div>#&lt;Logger:0xa0ea240 @progname=nil, @level=1, @default_formatter=#&lt;Logger::Formatter:0xa0ea22c @datetime_format=nil&gt;, @formatter=nil, @logdev=#&lt;Logger::LogDevice:0xa0ea150 @shift_size=nil, @shift_age=nil, @filename=nil, @dev=#&lt;StringIO:0x9a184f8&gt;, @mutex=#&lt;Logger::LogDevice::LogDeviceMutex:0xa0ea09c @mon_owner=nil, @mon_count=0, @mon_mutex=#&lt;Mutex:0xa0ea074&gt;&gt;&gt;&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.multiprocess</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.multithread</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.run_once</td>
           <td class="code"><div>false</div></td>
         </tr>
         
         <tr>
           <td>rack.session</td>
           <td class="code"><div>{&quot;session_id&quot;=&gt;&quot;23c2296d6b74dffbf539350d6f62d5ca7fc9d8bfb935c1e5afee501df5e3f771&quot;, &quot;tracking&quot;=&gt;{&quot;HTTP_USER_AGENT&quot;=&gt;&quot;da39a3ee5e6b4b0d3255bfef95601890afd80709&quot;, &quot;HTTP_ACCEPT_ENCODING&quot;=&gt;&quot;da39a3ee5e6b4b0d3255bfef95601890afd80709&quot;, &quot;HTTP_ACCEPT_LANGUAGE&quot;=&gt;&quot;da39a3ee5e6b4b0d3255bfef95601890afd80709&quot;}}</div></td>
         </tr>
         
         <tr>
           <td>rack.session.options</td>
           <td class="code"><div>{:path=&gt;&quot;&#x2F;&quot;, :domain=&gt;nil, :expire_after=&gt;nil, :secure=&gt;false, :httponly=&gt;true, :defer=&gt;false, :renew=&gt;false, :sidbits=&gt;128, :secure_random=&gt;SecureRandom, :secret=&gt;&quot;b8b7b8a915fd0900bd4ad841e04d42d5&quot;, :coder=&gt;#&lt;Rack::Session::Cookie::Base64::Marshal:0xa18acf4&gt;}</div></td>
         </tr>
         
         <tr>
           <td>rack.session.unpacked_cookie_data</td>
           <td class="code"><div>{&quot;session_id&quot;=&gt;&quot;23c2296d6b74dffbf539350d6f62d5ca7fc9d8bfb935c1e5afee501df5e3f771&quot;}</div></td>
         </tr>
         
         <tr>
           <td>rack.test</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.url_scheme</td>
           <td class="code"><div>http</div></td>
         </tr>
         
         <tr>
           <td>rack.version</td>
           <td class="code"><div>[1, 2]</div></td>
         </tr>
         
         <tr>
           <td>sinatra.commonlogger</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>sinatra.error</td>
           <td class="code"><div>#&lt;LoadError: no such file to load -- uglifier&gt;</div></td>
         </tr>
         
      </table>
      <div class="clear"></div>
    </div> <!-- /RACK ENV -->

    <p id="explanation">You're seeing this error because you have
enabled the <code>show_exceptions</code> setting.</p>
  </div> <!-- /WRAP -->
  </body>
</html>
