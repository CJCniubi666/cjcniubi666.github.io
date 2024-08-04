import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,e as d}from"./app-2939163e.js";const n={},a=d(`<h1 id="hfish的搭建-docker" tabindex="-1"><a class="header-anchor" href="#hfish的搭建-docker" aria-hidden="true">#</a> HFish的搭建（docker）</h1><p>首先下载小皮面板启动<code>mysql</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>phpstudy -start
phpstudy -h
//可查看帮助
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开docker环境,下载并运行hfish</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name hfish \\
-v /usr/share/hfish:/usr/share/hfish \\
--network host \\
--privileged=true \\
threatbook/hfish-server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置自动升级（可以省略）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\ --name watchtower \\ --restart unless-stopped \\ -v /var/run/docker.sock:/var/run/docker.sock \\ --label=com.centurylinklabs.watchtower.enable=false \\ --privileged=true \\ containrrr/watchtower \\ --cleanup \\ hfish \\ --interval 3600
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录hfish</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>登陆地址：https://[server]:4433/web/
配置数据库：打开小皮后创建数据库
初始用户名：admin 
初始密码：HFish2021
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linux打开所有端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iptables -I INPUT -p tcp --dport 0:65535 -j ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="快速启动" tabindex="-1"><a class="header-anchor" href="#快速启动" aria-hidden="true">#</a> 快速启动</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>phpstudy -start
//开启小皮面板提供的mysql服务
docker ps -a
//查看hfish的docker ID
docker start ID
//开启hfish
iptables -I INPUT -p tcp --dport 0:65535 -j ACCEPT
//开启所有端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[a];function t(l,c){return i(),s("div",null,r)}const o=e(n,[["render",t],["__file","HFish的搭建（docker）.html.vue"]]);export{o as default};
