<?php
/**
 * Created by PhpStorm.
 * User: TheWay
 * Date: 2020/6/23
 * Time: 22:16
 */
function curlPost($mobile,$content,$header=array())
{
    $post = "userid=474&account=userloan&password=8023@loan&action=send&rt=json&mobile=".$mobile."&content=【深晖】".$content."&sendTime=&extno=";
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "http://120.26.230.213:8888/sms.aspx",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => $post,
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/x-www-form-urlencoded",
            "Cookie: ASP.NET_SessionId=spxj2d45imiwynrpwhbbve45"
        ),
    ));
    $response = curl_exec($curl);

    curl_close($curl);
    $file_contents = json_decode($response, true);

    if($file_contents['Message'] == 'ok'){
        return 1;
    }else{
        return 0;
    }
}

/*function sendTsms($phone,$content){
        $AppID="ef806433bd66404a87f10aa3d8a11c72";//应用id
        $Account_Sid="5517c9047ef19fbe25e4f4376fb45701";//用户sid
        $Auth_Token="326d676b9c2**********3af611bbd78";//应用id
        $Rest_URL="https://open.ucpaas.com/ol/sms/{function}";//鉴权密钥
    $smsapi = C('cfg_SMS_API'); //短信网关
    $user = C('cfg_SMS_USER'); //短信平台帐号
  	$tm = date("Y-m-d H:i:s");
    $pass = C('cfg_sms_pass'); //短信平台密码
    $content=$content;//要发送的短信内容
    $phone = $phone;
    //http://api.daiyicloud.com/asmx/smsservice.aspx?name=".$user."&pwd=".$pass."&content=".$content."&mobile=".$phone."&stime=".$tm."&sign=普惠易贷&type=pt&extno=
    $sendurl = $smsapi."?name=".$user."&pwd=".$pass."&content=".$content."&mobile=".$phone."&stime=".$tm."&sign=普惠易贷&type=pt&extno=";
  	//var_dump($sendurl);exit();
    $result =file_get_contents($sendurl) ;
    return $result;
}*/

function getResult($url, $body = null, $method)
{
    $data = connection($url,$body,$method);
    if (isset($data) && !empty($data)) {
        $result = $data;
    } else {
        $result = '没有返回数据';
    }
    return $result;
}

/**
 * @param $url    请求链接
 * @param $body   post数据
 * @param $method post或get
 * @return mixed|string
 */

function connection($url, $body,$method)
{
    if (function_exists("curl_init")) {
        $header = array(
            'Accept:application/json',
            'Content-Type:application/json;charset=utf-8',
        );
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        if($method == 'post'){
            curl_setopt($ch,CURLOPT_POST,1);
            curl_setopt($ch,CURLOPT_POSTFIELDS,$body);
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $result = curl_exec($ch);
        curl_close($ch);
    } else {
        $opts = array();
        $opts['http'] = array();
        $headers = array(
            "method" => strtoupper($method),
        );
        $headers[]= 'Accept:application/json';
        $headers['header'] = array();
        $headers['header'][]= 'Content-Type:application/json;charset=utf-8';

        if(!empty($body)) {
            $headers['header'][]= 'Content-Length:'.strlen($body);
            $headers['content']= $body;
        }

        $opts['http'] = $headers;
        $result = file_get_contents($url, false, stream_context_create($opts));
    }
    return $result;
}

/**
单条发送短信的function，适用于注册/找回密码/认证/操作提醒等单个用户单条短信的发送场景
 * @param $appid        应用ID
 * @param $mobile       接收短信的手机号码
 * @param $templateid   短信模板，可在后台短信产品→选择接入的应用→短信模板-模板ID，查看该模板ID
 * @param null $param   变量参数，多个参数使用英文逗号隔开（如：param=“a,b,c”）
 * @param $uid			用于贵司标识短信的参数，按需选填。
 * @return mixed|string
 * @throws Exception
 */
function sendSms($mobile,$templateid,$param=null,$uid=null){
    $url = "https://open.ucpaas.com/ol/sms/sendsms";
    $body_json = array(
        'sid'=>"5517c9047ef19fbe25e4f4376fb45701",
        'token'=>"326d676b9c209625aa2123af611bbd78",
        'appid'=>"ef806433bd66404a87f10aa3d8a11c72",
        'templateid'=>$templateid,
        'param'=>$param,
        'mobile'=>$mobile,
        'uid'=>$uid,
    );
    $body = json_encode($body_json);
    $data = getResult($url, $body,'post');
    return $data;
}
