---
date: 2024-04-16 10:32:47
---

# thinkphp-nginx伪静态配置

点击`伪静态`后输入如下代码,并重启Nginx。  
代码如下：

```php
if (!-e $request_filename) {
    rewrite ^(.*)$ /index.php?s=$1 last;
    break;
}
```

nginx中的配置会变为：

```nginx
#nginx配置
location / {
    index  index.html index.htm index.php l.php;
    autoindex  on;
    if (!-e $request_filename) {
        rewrite ^(.*)$ /index.php?s=$1 last;
        break;
    }

}
```

![](../资源文件/图片/thinkphp-nginx伪静态配置-1.png)