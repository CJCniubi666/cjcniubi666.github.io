import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as t,a as e,b as a,d as s,e as o}from"./app-423671c8.js";const l="/assets/image-20230902111401663-f0fcbdf0.png",n="/assets/image-20230902112332939-88e30ef8.png",k="/assets/image-20230902112145098-2d6dbbf6.png",m={},_=o(`<h1 id="下载docker" tabindex="-1"><a class="header-anchor" href="#下载docker" aria-hidden="true">#</a> 下载docker</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),h={href:"https://www.runoob.com/docker/docker-container-usage.html",target:"_blank",rel:"noopener noreferrer"},u=o('<h1 id="docker常见命令" tabindex="-1"><a class="header-anchor" href="#docker常见命令" aria-hidden="true">#</a> docker常见命令</h1><blockquote><ul><li>查看docker状态：<code>docker ps -a</code></li><li>docker搜索镜像：<code>docker search centos7</code><img src="'+l+'" alt="image-20230902111401663"></li><li>选择一个镜像拉取下来：<code>docker pull ansible/centos7-ansible</code></li><li>查看镜像列表：<code>docker images</code></li><li>启动对应的镜像： <code>docker run -it --name centos7_1 -p 80:80 ansible/centos7-ansible</code></li><li>进入对应的镜像：<code>docker exec -it centos7_1 /bin/bash</code></li><li>停止对应的镜像：<code>docker stop centos7_1</code></li><li>运行对应的镜像：<code>docker start centos7_1</code></li><li>删除对应的镜像：<code>docker rmi centos7_1</code></li><li>新建一个dockerfile文件：<code>vim dockerfile</code><img src="'+n+'" alt="image-20230902112332939"></li><li>自己构建镜像：<code>docker build -t hello .</code></li><li>运行并删除自己构建的镜像：<code>docker run --rm hello</code><img src="'+k+'" alt="image-20230902112145098"></li></ul></blockquote>',2);function p(b,f){const c=r("ExternalLinkIcon");return i(),t("div",null,[_,e("p",null,[e("a",h,[a("Docker 容器使用 | 菜鸟教程 (runoob.com)"),s(c)])]),u])}const v=d(m,[["render",p],["__file","docker.html.vue"]]);export{v as default};