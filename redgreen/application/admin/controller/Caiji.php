<?php
namespace app\admin\controller;
use app\admin\model\Admin;
use app\common\model\Users;
use think\Config;
use think\Controller;
use app\admin\model\Bet;
use app\admin\model\Caidata as CaidataModel;
use app\common\controller\Backend;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * @icon fa fa-circle-o
 */
class Caiji extends Controller
{
    
    /**
     * Caidata模型对象
     * @var \app\admin\model\Caidata
     */
    protected $model = null;
    protected $site = null;
    protected $period = ['WinGo'=> [
        'color_fast' => [1,1440,1], 
        'color_plain' => [3,480,2], 
        'color_slow' => [5,288,3]
    ], 'BigGame' => [
        'btc' => [3,480,4], 
        'eth' => [3,480,5]
    ]];

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Caidata;
        $this->site = Config::get('site');
        //$this->view->assign("statusList", $this->model->getStatusList());
    }
    
    public function test(){
        return '采集和结算';
    }
    
    public function index(){
        echo '采集和结算<br>';
        //添加新的一期用于竞猜
        $this->add_next_cai();
        $this->caiji();
    }
    
    /*
     * 采集本期
     */
    function caiji(){
        $site = $this->site;
        //需要配置
        /*
          3分钟1期，2分钟30秒订购，30秒显示彩票结果。它全天开放。交易总数为480期。
            如果您花费100积分进行交易，则在扣除2信用服务费后，您的合同金额为98信用
         */
        $where=[
            'status'=>0,
            'starttime'=>['<=',date('Y-m-d H:i:s')]
        ];
        $caidata=$this->model->where($where)->order('qishu','desc')->select();

        if (!$caidata){
            echo '没有需要采集的期数<br>';return;
        }

         foreach ($caidata as $v){
             $Period=$v->qishu;
             $game_en=$v->game_en;
             // b.开始采集
             if ($v->status==0 && time()>=strtotime($v->starttime)){//到达开奖时间
                //dump($v->id);
                //b.开始caiji
                //b1.更改caidata的状态
                 $data=[];
                 $data['status']=1;
                 $data['send']=1;
                 $data['result']=$v->result;
                 if (!$v->result||$v->result==''){//没有直接预设
                    //判断预设表
                     $yushe=\app\admin\model\Yushe::get(['qishu'=>$Period]);
                     if ($yushe){
                         if(in_array($game_en,['btc','eth'])){
                             $getclose = getclose($yushe->result,'btc');
                            $data['result']=$getclose['result'];
                            $data['close']=$getclose['close'];
                            $data['source']=$getclose['source'];
                         }else{
                            $data['result']=$yushe->result;
                         }
                     } else {
                         //所有投注
                         $betarr=Bet::where(['qishu'=>$Period])->select();
                         if(in_array($game_en,['btc','eth'])){
                             if ($site['kong']=='1'&& $betarr){//控杀已开启 且 有人下注
                                 $zz_ying=-100;//最终盈利
                                 $result=[9,10,11,12,13,14,15,16,17,18,19,20];
                                 shuffle($result);//随机顺序进行控杀
                                 foreach ($result as $k2=>$v2){
                                     $zongying= $this->yingli2($Period,$v2);
                                     
                                     if ($zongying>0){
                                         $getclose = getclose($v2, $game_en);
                                         $data['result']=$getclose['result'];
                                         $data['close']=$getclose['close'];
                                         $data['source']=$getclose['source'];
                                         // $zz_ying=$zongying;
                                         break;
    //                                     continue;
                                     }
    //                                 if ($zongying>$zz_ying){
    //                                     $zz_ying=$zongying;
    //                                     $data['result']=$v2;
    //                                 }
                                 }
    
                             }else{
                                 $getclose = getclose(-1, $game_en);
                                 $data['result']=$getclose['result'];
                                 $data['close']=$getclose['close'];
                                 $data['source']=$getclose['source'];
                             }
                         }else{
                             if ($site['kong']=='1'&& $betarr){//控杀已开启 且 有人下注
                                 $zz_ying=-100;//最终盈利
                                 $result=[0,1,2,3,4,5,6,7,8,9];
                                 shuffle($result);//随机顺序进行控杀
                                 foreach ($result as $k2=>$v2){
                                     $zongying= $this->yingli($Period,$v2);
                                     $data['result']=$v2;
                                     if ($zongying>0){
                                         // $zz_ying=$zongying;
                                         break;
    //                                     continue;
                                     }
    //                                 if ($zongying>$zz_ying){
    //                                     $zz_ying=$zongying;
    //                                     $data['result']=$v2;
    //                                 }
                                 }
    
                             }else{
                                 $data['result']=rand(0,9);//随机
                             }
                         }
                         
                     }
                 }

                 $up=$this->model->update($data,['id'=>$v->id]);
                 if ($up){
                     echo '已采集'.$Period.'开奖结果为'.$data['result'].'<br>';
                     $this->jieshuan($Period);
                 }
                // $caidata=$this->model->get(['qishu'=>$Period]);
             }
         }
    }
    /*
     * 根据开奖结果进行结算
     */
    function jieshuan($Period=''){
        $site = Config::get('site');
        //echo '结算逻辑未写-----<br>';die;
        if ($Period==null||$Period==''){//结算当前投注的
            return false;
        }
        //所有投注
        $betarr=Bet::where(['qishu'=>$Period,'status'=>0])->select();
        $caidata=CaidataModel::get(['qishu'=>$Period]);
        $result=$caidata->result;//开奖结果
        //循环结算
        foreach ($betarr as $k=>$v){
            $yings=$v->result;//这单输赢；
            $ying=$v->result;
            $money=$v->money;//这单下注金额
            if($v->game_en == 'btc' || $v->game_en == 'eth'){
                switch ($v->bet_code) {
                    case 'big'://大
                        if(in_array($result,['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'])){
                            $ying=$money*$site['bbig'];//中奖金额=下注金额*赔率
                        }
                        break;
                    case 'small'://小
                        if(in_array($result,['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'])){
                            $ying=$money*$site['bsmall'];
                        }
                        break;
                    case 'odd'://单
                        if(in_array($result,['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'])){
                            $ying=$money*$site['bodd'];
                        }
                        break;
                    case 'even'://双
                        if(in_array($result,['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26'])){
                            $ying=$money*$site['beven'];
                        }
                        break;
                    case 'bigeven'://大双
                        if(in_array($result,['14', '16', '18', '20', '22', '24', '26'])){
                            $ying=$money*$site['bbigeven'];
                        }
                        break;
                    case 'smalleven'://小双
                        if(in_array($result,['0', '2', '4', '6', '8', '10', '12'])){
                            $ying=$money*$site['bsmalleven'];
                        }
                        break;
                    case 'bigodd'://大单
                        if(in_array($result,['15', '17', '19', '21', '23', '25', '27'])){
                            $ying=$money*$site['bbigodd'];
                        }
                        break;
                    case 'smallodd'://小单
                        if(in_array($result,['1', '3', '5', '7', '9', '11', '13'])){
                            $ying=$money*$site['bsmallodd'];
                        }
                        break;
                }
            }else{
                switch ($v->bet_code) {
                    case 'big'://大
                        if(in_array($result,array('5','6','7','8','9'))){
                            $ying=$money*$site['big'];//中奖金额=下注金额*赔率
                        }
                        break;
                    case 'small'://小
                        if(in_array($result,array('0','1','2','3','4'))){
                            $ying=$money*$site['small'];//中奖金额=下注金额*赔率
                        }
                        break;
                    case 'odd'://单
                        if(in_array($result,array('1','3','5','7','9'))){
                            $ying=$money*$site['odd'];//中奖金额=下注金额*赔率
                        }
                        break;
                    case 'even'://单
                        if(in_array($result,array('0','2','4','6','8'))){
                            $ying=$money*$site['even'];//中奖金额=下注金额*赔率
                        }
                        break;
                    case 'green'://绿色
                        if(in_array($result,array('1','3','7','9'))){
                            $ying=$money*$site['green1379'];//中奖金额=（下注有效金额*赔率）
                        }elseif($result==5){
                            $ying=$money*$site['green5'];
                        }
                        break;
                    case 'violet'://紫色
                        if(in_array($result,['0','5'])){
                            $ying=$money*$site['violet05'];
                        }
                        break;
                    case 'red'://红色
                        if(in_array($result,array('2','4','6','8'))){
                            $ying=$money*$site['red2468'];//中奖金额=下注金额*赔率
                        }elseif($result==0){
                            $ying=$money*$site['red0'];
                        }
                        break;
                    default://下注0-9
                        if (in_array($v->bet_code,['0','1','2','3','4','5','6','7','8','9','0'])){
                            if ($v->bet_code==$result){
                                $ying=$money*$site['number0-9'];
                            }
    
                        }
                }
            }
            if ($ying>0){
                $yings+=$ying;//中奖金额-下注金额=输赢金额
            }
            Db::startTrans();//事务开始
            try {
                //1.添加用户金额 添加金额明细记录
                if ($ying>0){
                    Users::money($yings+$v->bet_money,$v->users_id,"第{$v->qishu}期,下注{$v->bet_code}获奖");
                    echo "用户id:{$v->users_id}第{$v->qishu}期,下注{$v->bet_code}获奖<br>";
                }
                //2.修改注单结果和输赢金额
                $update=[
                    'status'=>1,
                    'result'=>$yings,
                    'clearingtime'=>time(),
                ];
                Bet::where('id',$v->id)->Update($update);
                //3.会员返水（在下注做）
                //4.代理占成
                //a.找到该用户的代理
                //找到该用户所有占成的上级代理，并列出占成比率
                $adminModel=new Admin();
                $zc_arr=$adminModel->zc_daili_arr($v->users_id);
                if(!empty($zc_arr)){
                    foreach ($zc_arr as $vv){
    //                    $yxmoney=$ying;//有效金额（用户输的也需要扣除2%）
    //                    $money;//本次下注金额
    //                    $ying=
                        if ($ying>0){//用户中奖，后台减少值的公式（）
                            $ying= ($ying-$money)*-1;//（中奖金额-下注有效金额）*-1
                        }else{//用户没中奖，后台增加的公式
                            $ying=$money;
                        }
    
                        $zc_money=($vv['zhancheng']/100)*$ying;
                        $adminModel->money($zc_money,$vv['admin_id'],"用户id:{$v->users_id}第{$v->qishu}期,下注占成{$vv['zhancheng']}%");
                    }
                }
                //5,代理返水（在下注做）
                Db::commit();
            } catch (ValidateException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
        }
        //3.本期开奖状态-已结算
        $caidata->save(['status'=>3]);
    }
    /*
     * 计算某种开奖盈利金额
     */
    function yingli($Period='',$result='0'){
        $site = Config::get('site');

        if ($Period==null||$Period==''){//结算当前投注的
            $Period=$this->model->where('status','1')->order('qishu','desc')->value();
        }
        //所有投注
        $betarr=Bet::where(['qishu'=>$Period,'status'=>0])->select();
//        $caidata=CaidataModel::get(['qishu'=>$Period]);
//        $result;//开奖结果
        $zongying=0;//玩家盈利总数
        //循环结算
        foreach ($betarr as $k=>$v){
            $ying=$v->money*-1;//这单输赢；
            $money=$v->money*(1-0.02);//这单下注金额(需要扣除信用服务费（2%）)；
            switch ($v->bet_code) {
                case 'big'://大
                    if(in_array($result,array('5','6','7','8','9'))){
                        $ying+=$money*$site['big'];//中奖金额=下注金额*赔率
                    }
                    break;
                case 'small'://小
                    if(in_array($result,array('0','1','2','3','4'))){
                        $ying+=$money*$site['small'];//中奖金额=下注金额*赔率
                    }
                    break;
                case 'odd'://单
                    if(in_array($result,array('1','3','5','7','9'))){
                        $ying+=$money*$site['odd'];//中奖金额=下注金额*赔率
                    }
                    break;
                case 'even'://单
                    if(in_array($result,array('0','2','4','6','8'))){
                        $ying+=$money*$site['even'];//中奖金额=下注金额*赔率
                    }
                    break;
                case 'green'://绿色
                    if(in_array($result,array('1','3','7','9'))){
                        $ying+=$money*$site['green1379'];//中奖金额=下注金额*赔率
                    }elseif($result==5){
                        $ying+=$money*$site['green5'];
                    }
                    break;
                case 'violet'://紫色
                    if(in_array($result,['0','5'])){
                        $ying+=$money*$site['violet05'];
                    }
                    break;
                case 'red'://红色
                    if(in_array($result,array('2','4','6','8'))){
                        $ying+=$money*$site['red2468'];//中奖金额=下注金额*赔率
                    }elseif($result==0){
                        $ying+=$money*$site['red0'];
                    }
                    break;
                default://下注0-9
                    if (in_array($v->bet_code,['0','1','2','3','4','5','6','7','8','9'])){
                        if ($v->bet_code==$result){
                            $ying+=$money*$site['number0-9'];
                        }
                    }
            }
            $zongying+=$ying;
        }
        return $zongying*-1;
    }
    /*
    * 计算某种开奖盈利金额
    */
    function yingli2($Period='',$result='0'){
        $site = Config::get('site');
        if ($Period==null||$Period==''){//结算当前投注的
            $Period=$this->model->where('status','1')->order('qishu','desc')->value();
        }
        //所有投注
        $betarr=Bet::where(['qishu'=>$Period])->select();
        //$caidata=CaidataModel::get(['qishu'=>$Period]);
        //$result;//开奖结果
        $zongying=0;//玩家盈利总数
        //循环结算
        foreach ($betarr as $k=>$v){
            $ying=$v->money*-1;//这单输赢；
            $money=$v->money*(1-0.02);//这单下注金额(需要扣除信用服务费（2%）)；
            switch ($v->bet_code) {
                case 'big'://绿色
                    if(in_array($result,['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'])){
                        $ying+=$money*$site['bbig'];//中奖金额=下注金额*赔率
                    }
                    break;
                case 'small'://紫色
                    if(in_array($result,['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'])){
                        $ying+=$money*$site['bsmall'];
                    }
                    break;
                case 'odd'://红色
                    if(in_array($result,['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'])){
                        $ying+=$money*$site['bodd'];
                    }
                    break;
                case 'even'://红色
                    if(in_array($result,['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26'])){
                        $ying+=$money*$site['beven'];
                    }
                    break;
                case 'bigeven'://红色
                    if(in_array($result,['14', '16', '18', '20', '22', '24', '26'])){
                        $ying+=$money*$site['bbigeven'];
                    }
                    break;
                case 'smalleven'://红色
                    if(in_array($result,['0', '2', '4', '6', '8', '10', '12'])){
                        $ying+=$money*$site['bsmalleven'];
                    }
                    break;
                case 'bigodd'://红色
                    if(in_array($result,['15', '17', '19', '21', '23', '25', '27'])){
                        $ying+=$money*$site['bbigodd'];
                    }
                    break;
                case 'smallodd'://红色
                    if(in_array($result,['1', '3', '5', '7', '9', '11', '13'])){
                        $ying+=$money*$site['bsmallodd'];
                    }
                    break;
            }
            $zongying+=$ying;
        }
        return $zongying*-1;
    }

    /*
     * 添加新的一期
     */
    function add_next_cai(){
        $periodNum = $this->period;
        
        $result = [];
        foreach($periodNum as $key => $game){
            foreach($game as $game_en => $item){
                // 随机下注
                $betcode=[0,1,2,3,4,5,6,7,8,9];
                shuffle($betcode);//随机顺序
                $bot_bet = array_slice($betcode, 0, 7);
        
                $pastPeriod=$this->getPeriod($item[0]);
                $Period=$pastPeriod+1;
                $Period=str_pad($Period,3,"0",STR_PAD_LEFT);//补零
                $Period=date('Ymd').$item[2].$Period;
                $starttime=strtotime(date('Y-m-d'))+($item[0] * 60 *($pastPeriod + 1)); //开奖时间
    
                $nextPeriod=$Period + 1;
                if($pastPeriod==$item[1]){
                    $nextPeriod=date('Ymd').$item[2].'001';
                }
                $caidata=$this->model->get(['qishu'=>$Period]);
                if (!$caidata){//不存在 开始添加
                    $insert=[
                        'qishu'=>$Period,
                        'result'=>null,
                        'status'=>0,
                        'starttime'=>date('Y-m-d H:i:s',$starttime),
                        'next_qishu'=>$nextPeriod,
                        'next_time'=>date('Y-m-d H:i:s',$starttime + $item[0] * 60),
                        'game_en'=>$game_en,
                        //'bot_bet'=>implode(',', $bot_bet)
                    ];
                    $add=$this->model->save($insert);
                    if ($add){
                        $result[] = $game_en;
                        echo '生成期数'.$Period.'<br>';
                    }
                }else{
                    echo '已有'.$Period.'<br>';
                }
            }
        }
        return $result;
    }
    /*
     * 获取今天已经到第几期
     */
    function getPeriod($type){
        $pastTime = time()-strtotime(date('Y-m-d'));//今天过去了多久
        $pastPeriod = $pastTime / ($type * 60);//已经过去多少期
        $Period=(int)$pastPeriod;
        return $Period;
    }
}
