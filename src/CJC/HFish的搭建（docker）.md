---
date: 2024-04-18 16:33:43
---

# HFish的搭建（docker）

首先下载小皮面板启动`mysql`
```
phpstudy -start
phpstudy -h
//可查看帮助
```

然后打开docker环境,下载并运行hfish
```
docker run -itd --name hfish \
-v /usr/share/hfish:/usr/share/hfish \
--network host \
--privileged=true \
threatbook/hfish-server:latest
```

配置自动升级（可以省略）
```
docker run -d \ --name watchtower \ --restart unless-stopped \ -v /var/run/docker.sock:/var/run/docker.sock \ --label=com.centurylinklabs.watchtower.enable=false \ --privileged=true \ containrrr/watchtower \ --cleanup \ hfish \ --interval 3600
```

登录hfish
```
登陆地址：https://[server]:4433/web/
配置数据库：打开小皮后创建数据库
初始用户名：admin 
初始密码：HFish2021
```

linux打开所有端口
```
iptables -I INPUT -p tcp --dport 0:65535 -j ACCEPT
```

# 快速启动

```
phpstudy -start
//开启小皮面板提供的mysql服务
docker ps -a
//查看hfish的docker ID
docker start ID
//开启hfish
iptables -I INPUT -p tcp --dport 0:65535 -j ACCEPT
//开启所有端口
```