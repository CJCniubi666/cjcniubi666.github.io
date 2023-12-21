---
title: htaccess文件中RewriteRule规则
date: 2023-12-10 17:00:21
tags:
---

# .htaccess 文件



```
<``IfModule` `mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</``IfModule``>
```
