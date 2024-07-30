<?php
namespace app\socket\controller;
 
use \Workerman\Worker;
use \Workerman\Autoloader;
use \Workerman\WebServer;
use \GatewayWorker\Register;
use \GatewayWorker\BusinessWorker;
use \GatewayWorker\Gateway;
 
class Start extends Worker
{
    /**
     * 构造函数
     * @access public
     */
    public function __construct()
    {
        // //由于是手动添加，因此需要注册命名空间，方便自动加载，具体代码路径以实际情况为准
        // \think\Loader::addNamespace([
        //     'Workerman' => EXTEND_PATH . 'Workerman/workerman',
        //     'GatewayWorker' =>EXTEND_PATH . 'Workerman/gateway-worker/src',
        // ]);
        new Register('text://0.0.0.0:1238');
         
         //初始化 bussinessWorker 进程
        $worker = new BusinessWorker();
        $worker->name = 'BusinessWorker';
        $worker->count = 1;
        $worker->registerAddress = '127.0.0.1:1238';
        //设置处理业务的类,此处制定Events的命名空间
        $worker->eventHandler = '\app\socket\controller\Events';
        // 初始化 gateway 进程
        $context = array(
            // 更多ssl选项请参考手册 https://php.net/manual/zh/context.ssl.php
            'ssl' => array(
                // 请使用绝对路径
                'local_cert' => '/www/server/panel/vhost/cert/redgreen.com/fullchain.pem', // 也可以是crt文件
                'local_pk' => '/www/server/panel/vhost/cert/redgreen.com/privkey.pem',
                'verify_peer' => false,
                'allow_self_signed' => true,   //如果是自签名证书需要开启此选项
            )
        );
        //$gateway = new Gateway("websocket://0.0.0.0:442", $context);
        // 开启SSL，websocket+SSL 即wss
        $gateway = new Gateway("websocket://0.0.0.0:8282",$context);
        $gateway->name = 'Gateway';
        $gateway->count = 1;
        $gateway->lanIp = '127.0.0.1';
        $gateway->startPort = 9501;
        $gateway->registerAddress = '127.0.0.1:1238';
        $gateway->transport = 'ssl';
         
         //运行所有Worker;
        Worker::runAll();
    }
 
}