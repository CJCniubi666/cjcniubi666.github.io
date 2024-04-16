---
date: 2024-04-08 16:37:35
---

# log4j2漏洞复现

## cve-2021-44228

### 受影响版本

`Apache Log4j 2.x <= 2.14.1`

### 环境搭建

```
docker pull vulfocus/log4j2-rce-2021-12-09:latest
docker run -d -p 80:8080 vulfocus/log4j2-rce-2021-12-09:latest
```
![](../资源文件/图片/log4j2漏洞复现-1.png)

### 漏洞复现

