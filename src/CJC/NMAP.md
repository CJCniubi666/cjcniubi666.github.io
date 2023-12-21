---
title: NMAP基础使用命令
date: 2023-07-27 15:17:16
tags:
- 工具使用
categories:
- 工具使用
---





## Nmap语法

`Nmap【空格】【选项|多选项|协议】【空格】【目标】`



## Nmap命令

> 1.全面扫描  `nmap -A 192.168.0.12`

> 2.扫描指定网段 `nmap 192.168.0.0/24 或者 nmap 192.168.0.1-200（扫描1-200的主机）`

> 3.简单扫描 `nmap  192.168.0.12`

> 4.查看nmap版本号 `nmap -v`

> 5.Ping扫描 `nmap -sP 192.168.0.0/24` 或者 `nmap -sP 192.168.0.12`

> 6.无ping扫描 `nmap -P0 192.168.0.12`

> 7.用 --packet-trace 查看协议是如何判断目标主机是都存活 

​		`nmap -p0 --packet-trace scanme.nmap.org`

​		可使用指定的TCP,UDP,IGMP协议，如：

`		nmap -p0 6,17,2 --packet-trace scanme.nmap.org`

备注：（1）TCP：对应协议编号为6。

​			（2）ICMP:对应协议编号为1。

​			（3）IGMP：对应协议编号为2。

​			（4）UDP：对应协议编号为17。

> 8.TCP SYN Ping扫描 `nmap -PS -v 192.168.0.12` 

> 可指定端口 `nmap -PS80,100-200 -v 192.168.0.12`

> 9.TCP ACK Ping扫描 `nmap -PA -v 192.168.0.12`

> 10.ICMP Ping Types扫描 PE选项打开该回声请求功能 `nmap -PE  -v 192.168.0.12`

​												PP选项是ICMP时间戳ping扫描 `nmap -PP -v 192.168.0.12`

​											PM选项可以进行icmp地址掩码ping扫描 `nmap -PM -v 192.168.0.12`

> 11.ARP Ping扫描 `nmap -PR 192.168.0.12`

> 12.扫描列表 `nmap -sL 192.168.0.0/24`

> 13.禁止反向域名解析 `namp -n -sL 192.168.0.0/24`

> 14.反向域名解析 `nmap -R -sL *. 192.168.0.0/24`

> 15.扫描IPv6地址 `nmap -6 fe80::20c:29ff:fee0:2e76`

> 16.路由跟踪 `nmap --traceroute -v www.baidu.com`

> 17.SCTP INIT Ping 扫描 `nmap -PY -v 192.168.0.12`

> 18.扫描端口的方式 `nmap -p 80 192.168.0.12`

> 19.发现具体而又有用的端口 `nmap --top-ports 100 192.168.0.12`

> 20.TCP SYN 扫描 `nmap -sS 192.168.0.12`

> 21.TCP连接扫描 `nmap -sT 192.168.0.12`

> 22.UDP扫描 `nmap -sU -p 80-500 192.168.0.12`

> 23.隐蔽扫描 **-sN**是Null扫描 `nmap -sN 192.168.0.12`

​						**-sF**是FIN扫描 `nmap -sF 192.168.0.12`

​						**-sX**是Xmas扫描 `nmap -sX 192.168.0.12`

> 24.TCP ACK 扫描 `nmap -sA -v 192.168.0.12`

> 25.TCP窗口扫描 `nmap -sW -v -F 192.168.0.12`

> 26.TCP Maimon扫描 `nmap -sM -T4 192.168.0.12`



##     **从nmap**识别端口状态

> （1）Open：对外开放

> （2）Closed：端口关闭状态

> （3）Filtered：防火墙过滤或者网络堵塞

> （4）Unfiltered：未被过滤，端口可访问，但是无法判断是开放还是关闭状态

> （5）Open|Filtered：开放还是被过滤

> （6）Closed|Filtered：不能确定是关闭还是被过滤，只可能出现在IPID Idle扫描中。

