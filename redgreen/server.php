<?php
/**
 * 启动GatewayWorker
 * php start.php start
 */
 
//ini_set('display_errors', 'on');
 
if(strpos(strtolower(PHP_OS), 'win') === 0)
{
    exit("worker.php不支持windows系统\n");
}
// 检查扩展
if(!extension_loaded('pcntl'))
{
    exit("请安装pcntl扩展，详情请查看http://doc3.workerman.net/appendices/install-extension.html\n");
}
 
if(!extension_loaded('posix'))
{
    exit("请安装posix扩展，详情请查看http://doc3.workerman.net/appendices/install-extension.html\n");
}
 
define('APP_PATH', __DIR__ . '/application/');
define('RUNTIME_PATH', __DIR__ . '/runtime/');
define('BIND_MODULE','socket/start');
// 加载框架引导文件
require __DIR__ . '/thinkphp/start.php';