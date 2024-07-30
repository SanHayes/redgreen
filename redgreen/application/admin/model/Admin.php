<?php

namespace app\admin\model;

use app\admin\model\auth\AdminMoneyLog;
use app\common\model\Users;
use think\Model;
use think\Session;

class Admin extends Model
{

    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

    /**
     * 重置用户密码
     * @author baiyouwen
     */
    public function resetPassword($uid, $NewPassword)
    {
        $passwd = $this->encryptPassword($NewPassword);
        $ret = $this->where(['id' => $uid])->update(['password' => $passwd]);
        return $ret;
    }

    // 密码加密
    protected function encryptPassword($password, $salt = '', $encrypt = 'md5')
    {
        return $encrypt($password . $salt);
    }

    /*
     * 获取某管理员/代理的下级
     * $adminId 为空就用登录者id
     */
    public function getxiajiIds($adminId=null){
        if (!$adminId){
            $adminId=session('admin.id');
        }

//        $agenary = $this::where('admin_id','=',3)->select();//所有

        $agenary = $this::where('admin_id','=',$adminId)->column('id');//所有

        foreach ($agenary as $k=>$v){
            $agenary_v=$this->getxiajiIds($v);
            $agenary=array_merge($agenary,$agenary_v);
        }
//        $xiajiIds=implode(',',$agenary);
        return $agenary;
    }
    /*
     * 获取某管理员/代理的下级 包含自身
     * $adminId 为空就用登录者id
     */
    public function getxiajiIdss($adminId=null)
    {
        if (!$adminId){
            $adminId=session('admin.id');
        }

        $agenary=$this->getxiajiIds($adminId);

        $agenary[]=$adminId;
        return $agenary;
    }

    /*
     * 获取上级代理的占成比例%
     * $admin 上级代理id
     */
    public function getAdmin_zhancheng($admin_id=null)
    {
       if (!$admin_id) {
           $admin_id=session('admin.admin_id');

       }
        if ($admin_id<2||$admin_id==null){
            return "100";//没有上级
        }
        $zhancheng=$this->where('id',$admin_id)->value('zhancheng');
        if (!$zhancheng){
            return "100";//没有上级
        }else{
            return $zhancheng;
        }

    }


    /*
         * 获取上级代理的返佣比例%
         * $admin 上级代理id
         */
    public function getAdmin_rebate($admin_id=null)
    {
        if (!$admin_id) {
            $admin_id=session('admin.admin_id');

        }

        if ($admin_id<2||$admin_id==null){
            return "99.999";//没有上级
        }

        $rebate=$this->where('id',$admin_id)->value('rebate');
        if (!$rebate){
            return "99.999";//没有上级
        }else{
            return $rebate;
        }

    }


    /**
     * 变更代理占成收益（余额）
     * @param int    $money   余额
     * @param int    $admin_id 代理ID
     * @param string $memo    备注
     */
    public static function money($money, $admin_id, $memo)
    {
        $user = self::get($admin_id);

        if ($user && $money != 0) {

            $before = $user->money;
            $after = $user->money + $money;
            //更新会员信息
            $a=$user->save(['money' => $after]);

            //写入日志
            $addlog=['admin_id' => $admin_id, 'money' => $money, 'before' => $before, 'after' => $after, 'memo' => $memo];
            AdminMoneyLog::create($addlog);
        }
    }

    /**
     * 找到该用户所有占成的上级代理，并列出占成比率
     * @param int    $users_id   用户id
     */
    public function zc_daili_arr($users_id)
    {
        //直属代理
        $admin_id=Users::where('id',$users_id)->value('admin_id');
        $dluser = self::get($admin_id);
        if($dluser){
            $zc_arr=$this->recursion_daili($admin_id,[],0);
        }else{
            $zc_arr=[];
        }

        return $zc_arr;
    }

    /**
     * 递归返回所有上级代理占成和id
     * $admin_id 代理id
     * $arr=已整理出的
     * $yzc 已占成（最多100）
     */
    function recursion_daili($admin_id,$arr=[],$yzc=0){
        $admin=$this->get($admin_id);

        if ($admin->zhancheng-$yzc>0){
            $array=['zhancheng'=>$admin->zhancheng-$yzc,'admin_id'=>$admin->id,'nickname'=>$admin->nickname];
            $yzc=$admin->zhancheng;
            array_push($arr,$array);
        }
        if ($yzc<100){
            $arr= $this->recursion_daili($admin->admin_id,$arr,$yzc);
        }
        return $arr;
    }

    /**
     * 找到该用户所有返水的上级代理，并列出占成比率
     * @param int    $users_id   用户id
     */
    public function fs_daili_arr($users_id)
    {
        //直属代理
        $admin_id=Users::where('id',$users_id)->value('admin_id');
        $rebate=Users::where('id',$users_id)->value('rebate');//用户的返佣比例
        $zc_arr=$this->recursion_daili_fan($admin_id,[],$rebate);

        return $zc_arr;
    }
    /**
     * 递归返回所有上级代理返水和id
     * $admin_id 代理id
     * $arr=已整理出的
     * $yzc 已占成（最多100）
     */
    function recursion_daili_fan($admin_id,$arr=[],$yzc=0){
        $admin=$this->get($admin_id);
//        dump($admin_id);
        if ($admin->rebate-$yzc>0){
            $array=['rebate'=>$admin->rebate-$yzc,'admin_id'=>$admin->id,'nickname'=>$admin->nickname];
            $yzc=$admin->rebate;
            array_push($arr,$array);
            //到后台管理员时停止
            if ($admin_id==2){
                return $arr;
            }
            $arr= $this->recursion_daili_fan($admin->admin_id,$arr,$yzc);
        }

//        if ($yzc<100){
//            $arr= $this->recursion_daili($admin->admin_id,$arr,$yzc);
//        }

        return $arr;
    }
}
