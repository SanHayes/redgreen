<?php

namespace app\index\controller;

use app\common\controller\Frontend;

class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {
        Header("HTTP/1.1 303 See Other");
        $url="http://{$_SERVER['SERVER_NAME']}/h5";
        Header("Location: $url");
        die;

        return $this->view->fetch();
    }

    function createSign($Md5key, $list)
    {
        ksort($list);
        $md5str = "";
        foreach ($list as $key => $val) {
            if (!empty($val)) {
                $md5str = $md5str . $key . "=" . $val . "&";
            }
        }
        $sign = strtoupper(md5($md5str . "key=" . $Md5key));
        return $sign;
    }

    //CURL代码
    public function curlS($url, $return_array)
    {
        $postData = "";
        foreach ($return_array as $key => $val) {
            $postData = $postData . $key . "=" . $val . "&";
        }
        $postData = rtrim($postData, '&');
        $ch        = curl_init();
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_HTTPHEADER,["Content-type: application/x-www-form-urlencoded"]);
        $contents = curl_exec($ch);
        curl_close($ch);
        return $contents;
    }
    /*
     * 支付提交页面生成代码
     */
    public function setHtml($tjurl, $arraystr){
        $str = '<form id="Form1" name="Form1" method="post" action="' . $tjurl . '">';
        foreach ($arraystr as $key => $val) {
            $str .= '<input type="hidden" name="' . $key . '" value="' . $val . '">';
        }
        $str .= '<input type="hidden" name="__hash__" value="539434b08d5a1efeeb9e9dd96ff846ff_2057b2510805cc3988c854a6fdc6d833" /></form>';
        $str .= '<script>';
        $str .= 'document.Form1.submit();';
        $str .= '</script>';
        exit($str);
    }

    //支付页面
    function pay(){
        error_reporting(0);
        header("Content-type: text/html; charset=utf-8");
        $pay_memberid = "200899694";   //商户ID
        $Md5key = "f67lr0en4lw54p8kkpoejmircj8sjawm";   //密钥

        $pay_orderid = date("Ymdhis").mt_rand(00000,999999);    //订单号
        $pay_amount =  "100";    //交易金额
        $pay_bankcode = "961";   //需对接最新通道编码
//961   PayTmWeb
//962	PayTmH5

        if(empty($pay_memberid)||empty($pay_amount)||empty($pay_bankcode)){
            die("信息不完整！");
        }

        $pay_applydate = date("Y-m-d H:i:s");  //订单时间
        $pay_notifyurl = "http://localhost/server.php";   //服务端返回地址
        $pay_callbackurl = "http://localhost/page.php";  //页面跳转返回地址



        $native = array(
            "pay_memberid" => $pay_memberid,
            "out_trade_no" => $pay_orderid,
            "pay_amount" => $pay_amount,
            "pay_applydate" => $pay_applydate,
            "pay_type" => $pay_bankcode,
            "pay_notifyurl" => $pay_notifyurl,
            "pay_callbackurl" => $pay_callbackurl,

        );
        $tjurl = "https://game6.cheapgood.in/Pay_Index.html";   //提交地址
        ksort($native);
        $md5str = "";
        foreach ($native as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }

        $sign = $this->createSign($Md5key,$native);



        $native["customerName"]=$customerName='Kirriya';//付款人名字;
        $native["customerPhone"]=$customerPhone="9876543210";//付款人电话;
        $native["customerEmail"]=$customerEmail="Kirriya@gmail.com";//付款人邮箱
        $native["sign"] = $sign;
        $native['pay_attach'] = "备用字段";
        $native['pay_productname'] ='支付测试商品01';

        $this->view->assign("tjurl", $tjurl);
        $this->view->assign("native", $native);
        return $this->view->fetch();
    }

}
