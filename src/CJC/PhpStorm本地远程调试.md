---
date: 2024-03-01 16:32:25
---
## 步骤

1. 添加服务器（本地）

![](https://study.yinsel.top/assets/images/PhpStorm%E6%9C%AC%E5%9C%B0%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95-1-f6a05e859b2860262fea477654d732cb.png)

2. 添加调试配置

![](https://study.yinsel.top/assets/images/PhpStorm%E6%9C%AC%E5%9C%B0%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95-2-ad36fb6d96401c74b71f9099de6b2ef0.png)

3. 配置PHP环境

![](https://study.yinsel.top/assets/images/PhpStorm%E6%9C%AC%E5%9C%B0%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95-3-7de7d6c76c4a2a2956b165dc880f0e92.png)

4. 启用`xdebug`扩展并添加以下内容至`php.ini`

```
xdebug.remote_enable=Onxdebug.remote_host=localhostxdebug.remote_port=9000xdebug.remote_handler=dbgpxdebug.idekey="phpstudy"xdebug.remote_autostart=On
```

5. 开始调试

![](https://study.yinsel.top/assets/images/PhpStorm%E6%9C%AC%E5%9C%B0%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95-4-c28588384f1d94a9b3b19d58921b9e62.png)

## 解决调试超时
`php.ini`中的`xdebug`部分：

```
xdebug.remote_cookie_expire_time = 3600max_execution_time=3600max_input_time=3600default_socket_timeout = 3600
```

`Aapache`中`httpd.conf`

```
Timeout 3600FcgidIOTimeout 3600FcgidIdleTimeout 3600IPCConnectTimeout 3600IPCCommTimeout 3600
```