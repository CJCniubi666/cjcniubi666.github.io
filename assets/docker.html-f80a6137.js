import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as e,b as n,d as s,e as d}from"./app-d99091c8.js";const t="/assets/image-20230902111401663-f0fcbdf0.png",l="/assets/image-20230902112332939-88e30ef8.png",u="/assets/image-20230902112145098-2d6dbbf6.png",b="/assets/docker-1-84d4c777.png",h={},p=d(`<h1 id="docker的使用" tabindex="-1"><a class="header-anchor" href="#docker的使用" aria-hidden="true">#</a> docker的使用</h1><h2 id="下载docker" tabindex="-1"><a class="header-anchor" href="#下载docker" aria-hidden="true">#</a> 下载docker</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),m={href:"https://www.runoob.com/docker/docker-container-usage.html",target:"_blank",rel:"noopener noreferrer"},k=d('<h2 id="docker基础命令" tabindex="-1"><a class="header-anchor" href="#docker基础命令" aria-hidden="true">#</a> docker基础命令</h2><blockquote><ul><li>查看docker状态：<code>docker ps -a</code></li><li>docker搜索镜像：<code>docker search centos7</code><img src="'+t+'" alt="image-20230902111401663"></li><li>选择一个镜像拉取下来：<code>docker pull ansible/centos7-ansible</code></li><li>查看镜像列表：<code>docker images</code></li><li>启动对应的镜像： <code>docker run -it --name centos7_1 -p 80:80 ansible/centos7-ansible</code> （前面的端口为本机的端口，后面的端口为docker开放的端口）</li><li>进入对应的镜像：<code>docker exec -it centos7_1 /bin/bash</code></li><li>停止对应的镜像：<code>docker stop centos7_1</code></li><li>运行对应的镜像：<code>docker start centos7_1</code></li><li>删除对应的镜像：<code>docker rm -f centos7_1</code></li><li>新建一个dockerfile文件：<code>vim dockerfile</code><img src="'+l+'" alt="image-20230902112332939"></li><li>自己构建镜像：<code>docker build -t hello .</code></li><li>运行并删除自己构建的镜像：<code>docker run --rm hello</code><img src="'+u+`" alt="image-20230902112145098"></li></ul></blockquote><h2 id="docker的web命令" tabindex="-1"><a class="header-anchor" href="#docker的web命令" aria-hidden="true">#</a> docker的web命令</h2><h3 id="载入docker测试web环境" tabindex="-1"><a class="header-anchor" href="#载入docker测试web环境" aria-hidden="true">#</a> 载入docker测试web环境</h3><blockquote><p>runoob@runoob:~# docker pull training/webapp # 载入镜像 runoob@runoob:~# docker run -d -P training/webapp python app.py</p><p><img src="https://www.runoob.com/wp-content/uploads/2016/05/docker29.png" alt=""></p><p>参数说明:</p><ul><li><p>**-d:**让容器在后台运行。</p></li><li><p>**-P:**将容器内部使用的网络端口随机映射到我们使用的主机上。</p></li></ul></blockquote><h3 id="网络端口的快捷方式" tabindex="-1"><a class="header-anchor" href="#网络端口的快捷方式" aria-hidden="true">#</a> 网络端口的快捷方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runoob@runoob:~$ docker port bf08b7f2cd89
5000/tcp -&gt; 0.0.0.0:5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看web应用程序日志" tabindex="-1"><a class="header-anchor" href="#查看web应用程序日志" aria-hidden="true">#</a> 查看web应用程序日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌──(root㉿kali)-[~]
└─# docker logs --details -f 7e9fc771521b 
  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
 172.17.0.1 - - [08/Apr/2024 03:14:55] &quot;GET / HTTP/1.1&quot; 200 -
 172.17.0.1 - - [08/Apr/2024 03:14:55] &quot;GET /favicon.ico HTTP/1.1&quot; 404 -
 172.17.0.1 - - [08/Apr/2024 03:16:28] &quot;GET / HTTP/1.1&quot; 200 -

具体的docker logs命令可以用docker logs --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看web容器的进程" tabindex="-1"><a class="header-anchor" href="#查看web容器的进程" aria-hidden="true">#</a> 查看web容器的进程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌──(root㉿kali)-[~]
└─# docker top 7e9fc771521b
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                203843              203823              0                   11:12               ?                   00:00:00            python app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p>',12);function v(g,_){const o=r("ExternalLinkIcon");return a(),c("div",null,[p,e("p",null,[e("a",m,[n("Docker 容器使用 | 菜鸟教程 (runoob.com)"),s(o)])]),k])}const w=i(h,[["render",v],["__file","docker.html.vue"]]);export{w as default};
