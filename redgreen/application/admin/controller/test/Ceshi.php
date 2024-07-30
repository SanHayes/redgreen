<?php

namespace app\admin\controller\test;

use app\common\controller\Backend;
use think\Controller;

/**
 * 会员管理
 *
 * @icon fa fa-circle-o
 */
class Ceshi extends Controller
{
    
    /**
     * User模型对象
     * @var \app\admin\model\test\User
     */
    protected $model = null;

    /**
     * 是否开启数据限制
     * 支持auth/personal
     * 表示按权限判断/仅限个人
     * 默认为禁用,若启用请务必保证表中存在admin_id字段
     */
    protected $dataLimit = true;

    /**
     * 数据限制字段
     */
    protected $dataLimitField = 'admin_id';
    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\test\User;

    }
    function index(){
        return view();
    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */
    

}
