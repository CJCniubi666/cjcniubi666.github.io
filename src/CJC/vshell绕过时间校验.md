---
title: vshell绕过时间校验
date: 2024-07-05 17:45:37
---

# vshell绕过时间校验获取试用许可证

```
# 伪造时间
timedatectl set-ntp no
timedatectl set-time "2024-08-22 00:00:00"
iptables -A OUTPUT -p udp --dport 123 -j DROP

# 启动后清除防火墙规则
iptables -F

#默认密码
qwe123qwe
```