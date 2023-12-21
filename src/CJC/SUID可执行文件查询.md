---
title: SUID可执行文件查询
date: 2023-09-16 21:03:06
tags:
- 权限
categories:
- 权限
---

# SUID 可执行文件查询

**SUID** (Set User ID) 是文件的一种权限，允许用户以其所有者的权限执行文件。Linux 二进制文件可以拥有这种类型的权限集有很多原因。例如，ping 实用程序需要 root 权限才能打开网络套接字，但它也需要由标准用户执行，以验证与其他主机的连接。

但是，如果某些现有的二进制文件和实用程序具有 SUID 权限，则可以使用它们将权限提升到 root。可以允许提权的已知 Linux 可执行文件有：

```dos
Nmap
Vim
find
Bash
More
Less
Nano
cp
······
```

以下命令可以发现系统上运行的所有 SUID 可执行文件。更具体地说，这些命令是尝试在用户 root 拥有的具有 SUID 权限位的目录中查找文件，然后将所有其重定向到 /dev/null 以便仅列出用户有权访问的二进制文件使用权。

```typescript
find / -user root -perm -4000 -print 2>/dev/null
find / -perm -u=s -type f 2>/dev/null
find / -user root -perm -4000 -exec ls -ldb {} \;
```

例如：

![image](../资源文件/图片/1282531-20220110204032318-51674534.png)

find 二进制文件将以 root 权限执行，因为它们的权限中包含“ s ”，并且它们归 root 用户所有。
