---
title: docker
date: 2024-04-08 11:21:48
tags:
- 基础
categories: 
- 基础
---

# 下载docker

```
apt install docker.io
```


[Docker 容器使用 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/docker-container-usage.html)
# docker常见命令
## docker基础命令
> - 查看docker状态：`docker ps -a`
> - docker搜索镜像：`docker search centos7`
>  ![image-20230902111401663](../资源文件/图片/image-20230902111401663.png)
> - 选择一个镜像拉取下来：`docker pull ansible/centos7-ansible`
> - 查看镜像列表：`docker images`
> - 启动对应的镜像： `docker run -it --name centos7_1 -p 80:80 ansible/centos7-ansible` （前面的端口为本机的端口，后面的端口为docker开放的端口）
> - 进入对应的镜像：`docker exec -it centos7_1 /bin/bash`
> - 停止对应的镜像：`docker stop centos7_1`
> - 运行对应的镜像：`docker start centos7_1`
> - 删除对应的镜像：`docker rm -f centos7_1` 
> - 新建一个dockerfile文件：`vim dockerfile`
>  ![image-20230902112332939](../资源文件/图片/image-20230902112332939.png)
> - 自己构建镜像：`docker build -t hello .`
> - 运行并删除自己构建的镜像：`docker run --rm hello`
> ![image-20230902112145098](../资源文件/图片/image-20230902112145098.png)

## docker的web命令

> runoob@runoob:~# docker pull training/webapp  # 载入镜像
> runoob@runoob:~# docker run -d -P training/webapp python app.py
> 
> ![](https://www.runoob.com/wp-content/uploads/2016/05/docker29.png)
> 
> 参数说明:
> 
> - **-d:**让容器在后台运行。
>    
> - **-P:**将容器内部使用的网络端口随机映射到我们使用的主机上。
