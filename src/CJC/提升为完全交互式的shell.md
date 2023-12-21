---
title: 提升为完全交互式的shell
date: 2023-10-24 17:16:20
tags:
---

```bash
$ python -c 'import pty; pty.spawn("/bin/bash")'
Ctrl-Z
$ stty raw -echo
$ fg
$ reset
$ export SHELL=bash
//$ export TERM=xterm-256color
```
