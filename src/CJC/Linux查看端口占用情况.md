---
title: Linux查看端口占用情况
date: 2024-01-17 08:47:00
---
#### **一，指定端口，例8080**

     1，netstat -tunlp |grep  8080

     2，lsof  -i:8080

#### **二、查看服务器所有端口**

     1，netstat -ntlp

#### **三、查看某进程端口占用，例Tomcat**

     1，ps -ef |grep tomcat