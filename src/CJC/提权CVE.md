---
date: 2024-04-03 16:40:33
---
# 提权CVE

## linux

### Centos 7 pkexec 提权(cve-2021-4034)

#### 前提条件

执行`yum list installed *polkit*`，查看`polkit.x86_64`对应的版本，如果为`0.112-26.el7_9.1`版本以下，则存在该漏洞。
#### 复现

```shell
# 编译
gcc cve-2021-4034-poc.c -o cve-2021-4034-poc

# 提权
./cve-2021-4034-poc
```


## windows