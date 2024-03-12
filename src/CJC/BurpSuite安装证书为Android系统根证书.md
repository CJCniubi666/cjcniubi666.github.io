---
date: 2024-03-12 10:59:12
---

# BurpSuite安装证书为Android系统根证书

## 转换证书

转换为pem：

```
openssl x509 -inform DER -in bp.der -out bp.pem
```

获取Hash：

```
openssl x509 -inform PEM -subject_hash_old -in bp.pem
```

重命名证书：
![[Pasted image 20240312105005.png]]

将`pem`重命名为`.0`

移动证书：

将`.0`证书移动到`/system/etc/security/cacerts/`，权限为`644`