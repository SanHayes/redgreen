<?php
header('Content-type: text/json; charset=utf-8');
define('S_ROOT', __DIR__ . DIRECTORY_SEPARATOR);
require S_ROOT . 'core' . DIRECTORY_SEPARATOR . 'base.php';
//https://www.8816822zxzx.com/issue.php?name=xjp28&qsgs=Ymd&qihao=600&nowDate=Y-m-d%20h:i:s&nowDate1=00:02:00&fz=5
//彩种名称
$name = $_GET['name'];
$x = 3266948;
// if($name=='xjp28'){
//       $url = 'http://api.52kc.cc/json?t=xjpxy28&limit=1&token=9337FFB38F81C3D67D54190F03AE65E8';
//         $kjData = json_decode(file_get_contents($url),true);
//         if($kjData['data']){
//             $kjData = $kjData['data'][0];
//             $n= $kjData['expect'];
// //           $y=$n-$x;
// //           $y=$y+442;
//           echo $y.'-------';
//  //         $n=$n-$y;
//         }
// }
// echo $n.'--------------';
//今天的日期
//$nowDate = date('Y-m-d',time());
$nowDate = date($_GET['nowDate'], time());
//第一期时间
$nowDate = date('Y-m-d') . ' ' . $_GET['nowDate1'];
//每日多少期
//$qihao = '41';
$qihao = $_GET['qihao'];
//每期多少分
$fz = $_GET['fz'];
//期数格式
$qsgs = $_GET['qsgs'];
//期数计算
$save_list = array();
$list = array();
for ($i = 1; $i <= $qihao; $i++) {
    if ($name == 'xjp28') {
        $qs = $n + $i;
    } else {
        if ($i < 10) {
            $qs = "00" . $i;//控制00
        } elseif ($i < 100) {
            $qs = "0" . $i;//控制0
        } else {
            $qs = $i;
        }
    }


//期数信息
    if ($name == 'hlft' || $name == 'jssc') {//欢乐飞艇，欢乐赛车
        $save['issue'] = date($qsgs) . '' . $qs;
//欢乐时时彩
    } elseif ($name == 'sfc') {
        $save['issue'] = date($qsgs) . '01' . $qs;
//极速赛车
    } elseif ($name == 'ffpk10') {
        $save['issue'] = date($qsgs) . '07' . $qs;
//极速时时彩
    } elseif ($name == 'ffc') {
        $save['issue'] = date($qsgs) . '05' . $qs;
//百人牛牛
    } elseif ($name == 'brnn') {
        $save['issue'] = date($qsgs) . '04' . $qs;
    } elseif ($name == 'nn') {
        $save['issue'] = date($qsgs) . '04' . $qs;
//欢乐骰宝
    } elseif ($name == 'hlsb') {
        $save['issue'] = date($qsgs) . '06' . $qs;
//极速六合彩
    } elseif ($name == 'jslhc') {
        $save['issue'] = date($qsgs) . '03' . $qs;
//河内1分彩
    } elseif ($name == 'xjp28') {
        $save['issue'] = '' . $qs;
    } elseif ($name == 'hn1fc') {
        if ($qs < 1000) {
            $save['issue'] = date($qsgs) . $qs;
        } else {
            $save['issue'] = date($qsgs) . $qs;
        }
//河   dfesfsd 内1分彩
    } elseif ($name == 'hn5fc') {
        $save['issue'] = date($qsgs) . $qs;
//QQ分分彩，腾讯分分彩，腾讯28
    } elseif ($name == 'qqffc' || $name == 'txffc' || $name == 'tx28') {
//大于10
        if ($qs < 10) {
            $qs = "000" . $i;
//大于100
        } elseif ($qs < 100) {
            $qs = "00" . $i;
//大于1000
        } elseif ($qs < 1000) {
            $qs = "0" . $i;
        } else {
            $qs = $i;
        }
        $save['issue'] = date($qsgs) . $qs;
    } else {
        $save['issue'] = date($qsgs) . $qs;
    }
    $save['date'] = strtotime($nowDate);
    $save['__ymd__'] = $nowDate;
    $save_list[] = $save;
    unset($save);
    $nowDate = date('Y-m-d H:i:s', strtotime("+" . $fz . " minute", strtotime($nowDate)));//控制多少分钟一期
}
//期数组装
$tmp['list'] = $save_list;
$tmp['visit_time'] = time();
$tmp['length'] = count($save_list);
$json = array('txt' => encode($tmp));
//期数输出
$shuju = encode($json);
echo encode($json);

$dumulu = S_ROOT . "/{$name}_qihao.json";
file_put_contents($dumulu, $shuju);

?>