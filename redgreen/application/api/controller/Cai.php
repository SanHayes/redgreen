<?php

namespace app\api\controller;

use app\admin\model\Admin;
use app\admin\model\Bet;
use app\admin\model\Caidata;
use app\common\model\Users as UsersModel;
use app\common\controller\Api;
use think\Config;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 彩相关
 *
 */
class Cai extends Api
{
    protected $noNeedLogin = ['bet','bet_log'];
    protected $noNeedRight = '*';
    protected $period = ['color_fast' => 10, 'color_plain' => 30, 'color_slow' => 30, 'btc' => 30, 'eth' => 30];
    protected $minute = ['color_fast' => 1, 'color_plain' => 3, 'color_slow' => 5, 'btc' => 3, 'eth' => 3];

    public function _initialize()
    {
//        parent::_initialize(); // TODO: Change the autogenerated stub
    }

    /**
     *  本期信息（当前下注这期）
     * @param string $token  密钥
     * @ApiReturn   ({
    "code": 1,
    "msg": "本期信息",
    "time": "1600523227",
    "data": {
    "qishu": 20200919523,//期数
    "starttime": "2020-09-19 21:47:30",//开奖时间
    "count_down": 23,//倒计时
    "feng": "30"//封盘时间
    }
    })
     */
    function cai_current(){
        $userid = $this->token();//token验证
        $game_en = $this->request->request('game_en');
        if (!$game_en && $game_en==''){
            $this->error('no game_en');
        }
        $site=Config::get('site');
        if(in_array($game_en,['btc', 'eth'])){
            $config = [
                'bbig' => $site['bbig'],
                'bsmall' => $site['bsmall'],
                'bodd' => $site['bodd'],
                'beven' => $site['beven'],
                'bbigodd' => $site['bbigodd'],
                'bbigeven' => $site['bbigeven'],
                'bsmallodd' => $site['bsmallodd'],
                'bsmalleven' => $site['bsmalleven']
            ];
        }else{
            $config = [
                'green5' => $site['green5'],
                'green' => $site['green1379'],
                'red0' => $site['red0'],
                'red' => $site['red2468'],
                'small' => $site['small'],
                'big' => $site['big'],
                'odd' => $site['odd'],
                'even' => $site['even'],
                'violet' => $site['violet05'],
                'number0-9' => $site['number0-9']
            ];
        }
        //现在的期数
        $where=[
            'status'=>0,
            'starttime'=>['<=',date('Y-m-d H:i:s',time() + $this->minute[$game_en] * 60)],
            'game_en'=>$game_en
        ];
        $caidata=Caidata::where($where)->order('qishu','desc')->find();
        if ($caidata){
//            ->field('qishu,starttime')
            $data=[
                'qishu'=>$caidata->qishu,
                'starttime'=>$caidata->starttime,//开奖时间
                'count_down'=>strtotime($caidata->starttime)-time(),//开奖倒计时
                'feng'=>$this->period[$game_en],//封盘时间
                'config'=>$config
            ];
            $this->success('success',$data);
        }else{
            $this->error('no record');
        }

    }
    
    function cai_getdata(){
        $game_en = $this->request->request('game_en');
        if (!$game_en && $game_en==''){
            $this->error('no game_en');
        }
        $size = $this->request->request('size');
        if (!$size && $size==''){
            $size = 30;
        }
        $url = 'https://api.huobi.pro/market/history/kline?symbol='.$game_en.'usdt&period=1min&size='.$size;
        $ch = curl_init(); 
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_HEADER, false); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.1 Safari/537.11'); 
        $data = curl_exec($ch);
        curl_close($ch); 
        return $data;
        // $res = json_decode(curl_exec($ch), true); 
        // $rescode = curl_getinfo($ch, CURLINFO_HTTP_CODE);  
        // curl_close($ch) ; 
        // if($rescode == 200 && $res['status'] == 'ok'){
        //     return $res;
        // }else{
        //     return false;
        // }
    }


    /**
     * 开奖信息列表
     * @param string $token  密钥
     * @param string $limit  数量（默认20）
     * @param string $page  页数（默认1）
     * @ApiReturn   ({
    'code':'1',
    'msg':'返回成功'
    'data':'[
    {
    "qishu": 20200919530,//期数
    "result": 5, //开奖结果
    "starttime": "2020-09-19 22:05:00",//开奖时间
    "status": "1",//状态
    "status_text": "Status 1",
    "updatatime_text": ""
    }]'
    })
     */
    function cai_log(){
        $userid=$this->token();//token验证
        $limit = $this->request->request('limit');
        if (!$limit && $limit==''){
            $limit=20;
        }
        $page = $this->request->request('page');
        if (!$page && $page==''){
            $page=1;
        }
        $game_en = $this->request->request('game_en');
        if (!$game_en && $game_en==''){
            $this->error('no game_en');
        }
        $where=[
            'status'=>['<>',0],
            'starttime'=>['<=',date('Y-m-d H:i:s')],
            'game_en'=>$game_en
        ];
        $data['list']=$getlog=Caidata::where($where)
            ->field('qishu,result,starttime,status,game_en,close,source')
            ->order('createtime','desc')
            ->page($page,$limit)->select();
        $data['count']=Caidata::where($where) ->count();
        if ($getlog){
            $this->success('success',$data);//历史开奖记录
        }else{
            $this->error('unrecorded');//无记录
        }

    }

    /**
     * 投注（yindu.tianhong800.com/zxftNsHkXg.php/caiji.html测试时开启）
     *
     * @param string $token  密钥
     * @param string $bet_code  下注内容（'green','violet','red','0','1','2','3','4','5','6','7','8','9'）
     * @param string $money   下注金额
     * @ApiReturn   ({
        'code':'1',
    'msg':'返回成功'
    'data':'{['']}'
        })
     */
    function bet(){
        $site = Config::get('site');
        $userid=$this->token();//token验证
        $bet_code = $this->request->request('bet_code');
        $money = $this->request->request('money');
        $game_en = $this->request->request('game_en');
        if (!$game_en && $game_en==''){
            $this->error('no game_en');
        }
        //判断下注是否符合 最低和最高配置
        if ($money<$site['bet_min']){
            $this->error(__('Minimum value per bet '.$site['bet_min']));//每次下注最低值
        }
        if ($money>$site['bet_max']){
            $this->error(__('Maximum value per bet '.$site['bet_max']));//每次下注最高值
        }
        //下注内容是否符合
        $bet=new Bet;
        if (!isset($bet->getBetCodeList()[$bet_code])){
            $this->error(__('The betting content is wrong'));//投注内容有误
        }

        $users=UsersModel::get($userid);
        //判断余额
        if ($users->money<$money){
            $this->error(__('not sufficient funds'));
        }

        //现在的期数
        $caidata=Caidata::where(['status'=>0,'game_en'=>$game_en])->order('qishu','desc')->find();
        $qishu=$caidata->qishu;

        $starttime= strtotime($caidata->starttime);
        if ($starttime-time() < $this->period[$game_en]){
            $this->error(__($qishu.' closed'));
        }
        $fee = $money * ($site['fee'] / 100);
        Db::startTrans();
            try {
                //逻辑开始
                //1.添加下注记录
                $adddata=[
                    'users_id'=>$userid,
                    'qishu'=>$qishu,
                    'bet_code'=>$bet_code,
                    'bet_money'=>$money,
                    'money'=>$money - $fee,
                    'fee'=>$fee,
                    'result'=>$money*-1,
                    'game_en'=>$game_en,
                ];
               if (Bet::create($adddata))
                //2.更改用户余额//3.用户余额记录
               {
                   UsersModel::money($money*-1,$userid,"用户下注:{$qishu}");
               }

               //4.返佣
               // a.自己的
                $fan= ($site['user_fan']/100)*$money;//返佣比例%*下注额度
                UsersModel::money($fan,$userid,"用户下注:{$qishu},返佣");
              //b.直接邀请人的返佣

                if ($users->inviter1_id>0){
                    $fan1= ($site['user_fan_1']/100)*$money;//返佣比例%*下注额度
                    $Userinviter1=UsersModel::where(['id'=>$users->inviter1_id])->find();

                    if ($Userinviter1){
                        UsersModel::money($fan1,$Userinviter1->id,"一级返佣,用户id:{$userid}下注:{$qishu},返佣");
                    }
                }
              // c.2级邀请人的返佣
                if ($users->inviter2_id>0){
                    $fan1= ($site['user_fan_2']/100)*$money;//返佣比例%*下注额度
                    $Userinviter2=UsersModel::where(['id'=>$users->inviter2_id])->find();
                    if ($Userinviter2){
                        UsersModel::money($fan1,$Userinviter2->id,"二级返佣,用户id:{$userid}下注:{$qishu},返佣");
                    }
                }


                //5,代理返水（在下注做）(废弃)
                //a. 找到该用户所有占成的上级代理，并列出返水比率
              /*  $adminModel=new Admin();
                $fs_arr=$adminModel->fs_daili_arr($userid);
                foreach ($fs_arr as $vv){
                    $zc_money=($vv['rebate']/100)*($money);
                    $adminModel::money($zc_money,$vv['admin_id'],"用户id:{$userid}第{$qishu}期,下注返佣{$vv['rebate']}%");
                }*/
                Db::commit();
                $data=['qishu'=>$qishu,'bet_code'=>$bet_code,'money'=>$money];
                $this->success('Betting on success',$data);//下注成功
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
             $this->error(__('No rows were inserted'));
//        $qishu=
    }



    /**
     * 投注记录
     * @param string $token  密钥
     * @param string $limit  数量（默认20）
     * @param string $page  页数（默认1）
     * @ApiReturn   ({
    'code':'1',
    'msg':'返回成功'
    'data':'{
        id: 14,
        users_id: 12,
        qishu: 20200918522,
        bet_code: "green",
        money: "50",
        result: "-50",
        status: "0",
        createtime: 1600436552,
        clearingtime: null,
        bet_code_text: "Bet_code green",
        status_text: "Status 0",
        clearingtime_text: ""
        },'
    })
     */
    function bet_log(){
        $userid=$this->token();//token验证
        $limit = $this->request->request('limit');
        
        $game_en = $this->request->request('game_en');
        if (!$game_en && $game_en==''){
            $this->error('no game_en');
        }
        
        if (!$limit && $limit==''){
            $limit=20;
        }
        $page = $this->request->request('page');
        if (!$page && $page==''){
            $page=1;
        }
        $data['list'] = $getlog = Bet::where([
                'users_id'=>$userid,
                'game_en'=>$game_en,
            ])
            ->order('createtime','desc')
            ->page($page,$limit)->select();
        foreach ($data['list'] as $k =>$v){
            $data['list'][$k]['caidata']=Caidata::where('qishu',$v['qishu'])->value('result');
        }
        $data['count']=Bet::where([
                'users_id'=>$userid,
                'game_en'=>$game_en,
            ])->count();
        if ($getlog){
            $this->success('success',$data);
        }else{
            $this->error('error');
        }

    }

}
