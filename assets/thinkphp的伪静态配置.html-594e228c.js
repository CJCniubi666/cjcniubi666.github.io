import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c90f8518.js";const t="/assets/thinkphp-nginx伪静态配置-1-032d3d6a.png",p={},i=e(`<h1 id="thinkphp-nginx伪静态配置" tabindex="-1"><a class="header-anchor" href="#thinkphp-nginx伪静态配置" aria-hidden="true">#</a> thinkphp-nginx伪静态配置</h1><p>点击<code>伪静态</code>后输入如下代码,并重启Nginx。<br> 代码如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">-</span><span class="token class-name type-declaration">e</span> <span class="token variable">$request_filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token operator">/</span>index<span class="token operator">.</span>php<span class="token operator">?</span>s<span class="token operator">=</span><span class="token variable">$1</span> last<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx中的配置会变为：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#nginx配置</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html index.htm index.php l.php</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">autoindex</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (!-e <span class="token variable">$request_filename</span>)</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^(.*)$ /index.php?s=<span class="token variable">$1</span> last</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">break</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><h1 id="thinkphp-apache伪静态" tabindex="-1"><a class="header-anchor" href="#thinkphp-apache伪静态" aria-hidden="true">#</a> thinkphp-apache伪静态</h1><p>1、httpd.conf 配置文件中需加载 mod_rewrite.so 模块；</p><p>2、AllowOverride None 将 None 改为 All；</p><p>3、把下面的内容保存为 .htaccess 文件放到应用入口文件的同级目录下；</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>IfModule mod_rewrite<span class="token operator">.</span>c<span class="token operator">&gt;</span>
Options <span class="token operator">+</span>FollowSymlinks <span class="token operator">-</span>Multiviews
RewriteEngine on

RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">REQUEST_FILENAME</span><span class="token punctuation">}</span> <span class="token operator">!</span><span class="token operator">-</span>d
RewriteCond <span class="token operator">%</span><span class="token punctuation">{</span><span class="token constant">REQUEST_FILENAME</span><span class="token punctuation">}</span> <span class="token operator">!</span><span class="token operator">-</span>f
RewriteRule <span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ index<span class="token operator">.</span>php<span class="token operator">?</span><span class="token operator">/</span><span class="token variable">$1</span> <span class="token punctuation">[</span><span class="token constant">QSA</span><span class="token punctuation">,</span><span class="token constant">PT</span><span class="token punctuation">,</span><span class="token constant">L</span><span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>IfModule<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="thinkphp-iss伪静态" tabindex="-1"><a class="header-anchor" href="#thinkphp-iss伪静态" aria-hidden="true">#</a> thinkphp-ISS伪静态</h1><p>如果你的服务器环境支持ISAPI_Rewrite的话，可以配置httpd.ini文件，添加下面的内容：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>RewriteRule (.*)$ /index\\.php\\?s=$1 [I]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在IIS的高版本下面可以配置web.Config，在中间添加rewrite节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;rewrite&gt;
 &lt;rules&gt;
 &lt;rule name=&quot;OrgPage&quot; stopProcessing=&quot;true&quot;&gt;
 &lt;match url=&quot;^(.*)$&quot; /&gt;
 &lt;conditions logicalGrouping=&quot;MatchAll&quot;&gt;
 &lt;add input=&quot;{HTTP_HOST}&quot; pattern=&quot;^(.*)$&quot; /&gt;
 &lt;add input=&quot;{REQUEST_FILENAME}&quot; matchType=&quot;IsFile&quot; negate=&quot;true&quot; /&gt;
 &lt;add input=&quot;{REQUEST_FILENAME}&quot; matchType=&quot;IsDirectory&quot; negate=&quot;true&quot; /&gt;
 &lt;/conditions&gt;
 &lt;action type=&quot;Rewrite&quot; url=&quot;index.php/{R:1}&quot; /&gt;
 &lt;/rule&gt;
 &lt;/rules&gt;
 &lt;/rewrite&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[i];function l(c,r){return s(),a("div",null,o)}const v=n(p,[["render",l],["__file","thinkphp的伪静态配置.html.vue"]]);export{v as default};
