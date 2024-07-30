<?php

namespace app\admin\controller\auth;

use app\admin\controller\users\User;
use app\common\controller\Backend;

/**
 * 会员余额变动管理
 *
 * @icon fa fa-circle-o
 */
class AdminMoneyLog extends Backend
{
    
    /**
     * AdminMoneyLog模型对象
     * @var \app\admin\model\auth\AdminMoneyLog
     */
    protected $model = null;
    protected $dataLimit = true;
    protected $dataLimitField = 'admin_id';
    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\auth\AdminMoneyLog;

    }
    /**
     * 获取数据限制的管理员（代理）的用户
     *
     * @return mixed
     */
    /**
     * 获取数据限制的管理员（代理
     *
     * @return mixed
     */
    protected function getDataLimitAdminIds()
    {
        if (!$this->dataLimit) {
            return null;
        }
        if ($this->auth->isSuperAdmin()) {
            return null;
        }
        $adminIds = [];
        if (in_array($this->dataLimit, ['auth', 'personal'])) {
            $ids = $this->dataLimit == 'auth' ? $this->auth->getChildrenAdminIds(true) : [$this->auth->id];
            $adminModel=new \app\admin\model\Admin();//代理角度
            $agenary=$adminModel->getxiajiIdss();

            $ids=array_intersect($ids,$agenary);//交集

//            $ids= $ids=implode(',',$ids);
//            $where['admin_id']=['in',$ids];
//            $ids=\app\admin\model\Admin::where($where)->column('id');
//            dump($ids);die;
        }

        return $ids;
    }


    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */
    

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
                    ->with(['admin'])
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->with(['admin'])
                    ->where($where)
                    ->order($sort, $order)
                    ->limit($offset, $limit)
                    ->select();

            foreach ($list as $row) {
                
                $row->getRelation('admin')->visible(['username','nickname']);
            }
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }
}
