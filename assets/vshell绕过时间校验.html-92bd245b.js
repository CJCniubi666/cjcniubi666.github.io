import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-2c702068.js";const l={},t=s(`<h1 id="vshell绕过时间校验获取试用许可证" tabindex="-1"><a class="header-anchor" href="#vshell绕过时间校验获取试用许可证" aria-hidden="true">#</a> vshell绕过时间校验获取试用许可证</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 伪造时间
timedatectl set-ntp no
timedatectl set-time &quot;2024-08-22 00:00:00&quot;
iptables -A OUTPUT -p udp --dport 123 -j DROP

# 启动后清除防火墙规则
iptables -F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[t];function d(c,r){return i(),n("div",null,a)}const m=e(l,[["render",d],["__file","vshell绕过时间校验.html.vue"]]);export{m as default};
