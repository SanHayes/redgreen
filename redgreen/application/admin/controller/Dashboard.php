<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\Config;

/**
 * 控制台
 *
 * @icon fa fa-dashboard
 * @remark 用于展示当前系统中的统计数据、统计报表及重要实时数据
 */
class Dashboard extends Backend
{

    /**
     * 查看
     */
    public function index()
    {
        //1.查看所有登录者伞下用户
        $adminModel=new \app\admin\model\Admin();//代理角度
        $ids=$adminModel->getxiajiIdss();
        $ids= $ids=implode(',',$ids);

        $where['id']=['in',$ids];
        $users=\app\common\model\Users::where($where)->column('id');//伞下用户
        $users_s=implode(',',$users);
        // 'welcome'=>'欢迎'.session('admin.nickname'),
        //总会员
        $data['users_count']=$totaluser=\app\common\model\Users::where($where)->count();

        //会员总下注
        $data['user_bet_money']=\app\admin\model\Bet::where(['users_id'=>['in',$users_s]])
            ->sum('money');
        //会员总输赢
        $data['user_bet_result']=\app\admin\model\Bet::where(['users_id'=>['in',$users_s]])
            ->sum('result');

        //会员总充值
        $data['user_money']=\app\admin\model\Money::where(['users_id'=>['in',$users_s],'type'=>1,'status'=>1])
            ->sum('money');

        //今日活跃用户
        $data['day_up_users']=\app\common\model\Users::where(['id'=>['in',$users_s],'updatetime'=>['>=',strtotime(date('Y-m-d'))]])
            ->count();

        //今日注册用户
        $data['day_add_users']=\app\common\model\Users::where(['id'=>['in',$users_s],'createtime'=>['>=',strtotime(date('Y-m-d'))]])
            ->count();

        //今日充值
        $data['user_money']=\app\admin\model\Money::where(['users_id'=>['in',$users_s],'type'=>1,'status'=>1,'createtime'=>['>=',strtotime(date('Y-m-d'))]])
            ->sum('money');
        //今日充值未处理
        $data['user_money']=\app\admin\model\Money::where(['users_id'=>['in',$users_s],'type'=>1,'status'=>0,'createtime'=>['>=',strtotime(date('Y-m-d'))]])
            ->count();

        //会员今日
        //$data
        $this->view->assign($data);

        return $this->view->fetch();
    }

}
