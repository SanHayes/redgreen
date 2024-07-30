<?php


namespace app\api\controller;



use app\common\model\Users as UsersModel;
use app\common\controller\Api;
use app\common\model\users\Moneylog;

/**
 * 我的晋升【My_Promotion】
 *
 */
class Promotion extends Api
{
    protected $noNeedLogin = [];
    protected $noNeedRight = '*';
    public function _initialize()
    {
//        parent::_initialize(); // TODO: Change the autogenerated stub
    }

    /*
     * 今日活跃会员（废弃）
     * @param string $token 密钥
     * @param string $type 1=一级，2=二级（默认1）
     */
    function active()
    {
        $userid = $this->token();//token验证
        $type = $this->request->request('type');
        if ($type!='1' && $type!='2'){
            $type=1;
        }
        $where=[
            'updatetime'=>['>=',strtotime(date('Y-m-d'))],

            ];
//        $where=[];
        $inviter1_count=UsersModel::where($where)->where(['inviter1_id'=>$userid])->count();//总人数1

        $inviter2_count=UsersModel::where($where)->where(['inviter2_id'=>$userid])->count();//总人数2
        $data=[
            'inviter1_count'=>$inviter1_count,
            'inviter2_count'=>$inviter2_count,
            'count'=>$inviter1_count+$inviter2_count,
            'inviter1'=>null,
            'inviter2'=>null,
            ];

        if ($inviter1_count>0){
            $inviter1 =UsersModel::where($where)->where(['inviter1_id'=>$userid])->column('id,username,nickname');//1级
            $data['inviter1']=$inviter1;
        }
        if ($inviter2_count>0){
            $inviter2 =UsersModel::where($where)->where(['inviter2_id'=>$userid])->column('id,username,nickname');//2级
            $data['inviter2']=$inviter2;
        }

        $this->success('success',$data);
    }

    /**
     * 下线会员数据（邀请会员的信息）
     * @param string $token 密钥
     * @param string $tt  day=今日，其他=总数
     *
     */
    function promotion(){
        $userid = $this->token();//token验证
        $userwhere=[];
        $tt=$this->request->request('tt');
        $msg='all data';//下线总数据
        if($tt=='day'){
            $msg='hodiernal data';//今日数据
            $userwhere['updatetime']=['>=',strtotime(date('Y-m-d'))];
        }

        $Moneylogwhere=['users_id'=>$userid];
        if ($tt=='day'){
            $Moneylogwhere['createtime']=['>=',strtotime(date('Y-m-d'))];
        }
        //1级奖励金
        $Moneylogwhere['memo']=['like','%一级邀请玩家%'];
        $Contribution1=Moneylog::where($Moneylogwhere)->sum('money');

        //2级奖励金
        $Moneylogwhere['memo']=['like','%二级邀请玩家%'];
        $Contribution2=Moneylog::where($Moneylogwhere)->sum('money');
        //总奖金金
        $Moneylogwhere['memo']=['like','%邀请玩家%'];
        $Contribution=Moneylog::where($Moneylogwhere)->sum('money');

        $where=$userwhere;
        $inviter1_count=UsersModel::where($where)->where(['inviter1_id'=>$userid])->count();//总人数1
        $inviter2_count=UsersModel::where($where)->where(['inviter2_id'=>$userid])->count();//总人数2
        $data=[
            'count'=>$inviter1_count+$inviter2_count,
            'inviter1_count'=>$inviter1_count,
            'inviter2_count'=>$inviter2_count,
            'Contribution1'=>$Contribution1,
            'Contribution2'=>$Contribution2,
            'Contribution'=>$Contribution,
            'inviter1'=>null,
            'inviter2'=>null,

        ];
        if ($inviter1_count>0){
            $inviter1 =UsersModel::where($where)->where(['inviter1_id'=>$userid])->column('id,username,nickname');//1级
            $data['inviter1']=$inviter1;
        }
        if ($inviter2_count>0){
            $inviter2 =UsersModel::where($where)->where(['inviter2_id'=>$userid])->column('id,username,nickname');//2级
            $data['inviter2']=$inviter2;
        }

        $this->success($msg,$data);

    }

    /**
     * 奖励记录
     * @param string $token 密钥
     * @param string $type 1=一级，2=二级（默认1）
     * @param string $limit  数量（默认20）
     * @param string $page  页数（默认1）
     */
    function bonus(){
        $userid = $this->token();//token验证
        $type = $this->request->request('type');
        if ($type!='1' && $type!='2'){
            $type=1;
        }
        $limit = $this->request->request('limit');
        if (!$limit && $limit==''){
            $limit=20;
        }
        $page = $this->request->request('page');
        if (!$page && $page==''){
            $page=1;
        }
        $where=['users_id'=>$userid];
        if ('1'==$type){
            $where['memo']=['like','%一级邀请玩家%'];
        }else{
            $where['memo']=['like','%二级邀请玩家%'];
        }

        $data['list']=Moneylog::where($where)->page($page,$limit)->field('id,users_id,money,createtime,memo')->order('createtime','desc')->select();
        foreach ($data['list'] as $k=>$v){
            $data['list'][$k]['createtime']=date('Y-m-d H:i:s',$v['createtime']);
            $data['list'][$k]['memo']="Invite rewards";//邀请奖励
        }
        $data['count']=Moneylog::where($where)->count();
        $this->success('success',$data);
    }



}