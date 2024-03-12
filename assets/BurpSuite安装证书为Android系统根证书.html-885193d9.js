import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as t,e as a}from"./app-15259f3d.js";const s={},c=a(`<h2 id="转换证书" tabindex="-1"><a class="header-anchor" href="#转换证书" aria-hidden="true">#</a> 转换证书</h2><p>转换为pem：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl x509 -inform DER -in bp.der -out bp.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取Hash：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl x509 -inform PEM -subject_hash_old -in bp.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重命名证书： ![[Pasted image 20240312105005.png]]</p><p>将<code>pem</code>重命名为<code>.0</code></p><p>移动证书：</p><p>将<code>.0</code>证书移动到<code>/system/etc/security/cacerts/</code>，权限为<code>644</code></p>`,9),i=[c];function n(o,r){return d(),t("div",null,i)}const _=e(s,[["render",n],["__file","BurpSuite安装证书为Android系统根证书.html.vue"]]);export{_ as default};
