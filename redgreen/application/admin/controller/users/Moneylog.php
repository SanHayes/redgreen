<?php

namespace app\admin\controller\users;

use app\common\controller\Backend;

/**
 * 会员余额变动管理
 *
 * @icon fa fa-circle-o
 */
class Moneylog extends Backend
{
    
    /**
     * Moneylog模型对象
     * @var \app\common\model\users\Moneylog
     */
    protected $model = null;
    protected $dataLimit = true;
    protected $dataLimitField = 'users_id';

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\common\model\users\Moneylog;

    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */
    /**
     * 获取数据限制的管理员（代理）的用户
     *
     * @return mixed
     */
    protected function getDataLimitAdminIds()
    {
        $get_admin_id=$this->request->get("admin_id");
        $user=new User;
        if ($get_admin_id&&$get_admin_id!=''){
//            $where['admin_id']=['=',$get_admin_id];

            $where=['id'=>['in',$user->usersids($get_admin_id)]];
            $users=\app\common\model\Users::where($where)->column('id');
            return $users;
        }
        if (!$this->dataLimit) {
            return null;
        }
        if ($this->auth->isSuperAdmin()) {
            return null;
        }
        $adminIds = [];
        if (in_array($this->dataLimit, ['auth', 'personal'])) {
            $ids = $user->usersids($get_admin_id);

//            $ids=implode(',',$adminIds);
            $where['id']=['in',$ids];
            $users=\app\common\model\Users::where($where)->column('id');
        }
        return $users;
    }

    /**
     * 查看
     */
    public function index()
    {
        //当前是否为关联查询
        $this->relationSearch = true;
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->isAjax())
        {
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField'))
            {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                    ->with(['users'])
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->with(['users'])
                    ->where($where)
                    ->order($sort, $order)
                    ->limit($offset, $limit)
                    ->select();

            foreach ($list as $row) {
                
                $row->getRelation('users')->visible(['username','nickname']);
            }
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }
}
