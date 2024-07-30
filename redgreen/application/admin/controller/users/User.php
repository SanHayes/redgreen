<?php

namespace app\admin\controller\users;

use app\admin\model\Admin;
use app\admin\model\AuthGroupAccess;
use app\common\controller\Backend;
use app\common\model\Users;
use fast\Random;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 会员管理
 *
 * @icon fa fa-users
 */
class User extends Backend
{
    
    /**
     * User模型对象
     * @var \app\admin\model\users\User
     */
    protected $model = null;

    protected $dataLimit = true;
    protected $dataLimitField = 'admin_id';
    protected $dataLimitFieldAutoFill=false;//关闭自动填充
    /**
     * 无需鉴权的方法(需登录)
     * @var array
     */
    protected $noNeedRight = ['adminid', 'usersid','usersids'];

    public function _initialize()
    {
        parent::_initialize();

        $this->model = new \app\admin\model\users\User;
        $this->view->assign("statusList", $this->model->getStatusList());
    }
    
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */
    /**
     * 获取数据限制的管理员（代理
     *
     * @return mixed
     */
    protected function getDataLimitAdminIds()
    {
        $get_admin_id=$this->request->get("admin_id");
        if ($get_admin_id&&$get_admin_id!=''){

            $ids = $this->dataLimit == 'auth' ? $this->auth->getChildrenAdminIds(true) : [$this->auth->id];

            $adminModel=new \app\admin\model\Admin();//代理角度
            $agenary=$adminModel->getxiajiIdss();
            $ids=array_intersect($ids,$agenary);//交集
            return $ids;
        }
        if (!$this->dataLimit) {
            return null;
        }
//        if ($this->auth->isSuperAdmin()) {
//            return null;
//        }

        $adminIds = [];
        if (in_array($this->dataLimit, ['auth', 'personal'])) {
            $ids = $this->dataLimit == 'auth' ? $this->auth->getChildrenAdminIds(true) : [$this->auth->id];
            $adminModel=new \app\admin\model\Admin();//代理角度
            $agenary=$adminModel->getxiajiIdss();
            $ids=array_intersect($ids,$agenary);//交集

//            $ids= $ids=implode(',',$ids);

//            $where['id']=['in',$ids];
//            $users=\app\common\model\Users::where($where)->column('id');
        }

        return $ids;
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
            list($where, $sort, $order, $offset, $limit) = $this->buildparams('username,nickname');
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
                $row->visible(['id','username','nickname','money','admin_id','rebate','inviter1_id','inviter2_id','password','payment_code','email','avatar','score','joinip','jointime','status']);
                $row->visible(['admin']);
				$row->getRelation('admin')->visible(['nickname']);
            }
            $list = collection($list)->toArray();

            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }



    /**
     * 添加
     */
    public function add()
    {
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);

                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->id;
                }
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    $params['joinip']=$this->request->ip();
                    $params['jointime']=time();
                    $params['verification']=$params['username'];
                    $params['token']=Random::uuid();

                    $params['password']=encrypt($params['password']);
                    $params['payment_code']=encrypt($params['payment_code']);

                    $result = $this->model->allowField(true)->save($params);
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
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were inserted'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        return $this->view->fetch();
    }

    /**
     * 编辑
     */
    public function edit($ids = null)
    {
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            if (!in_array($row[$this->dataLimitField], $adminIds)) {
                $this->error(__('You have no permission'));
            }
        }
        if ($this->request->isPost()) {

            $params = $this->request->post("row/a");

            if ($params) {
                $params = $this->preExcludeFields($params);
                $result = false;
                Db::startTrans();
                try {
//                    //是否输入密码
                    if ($params['password']==''){
                        unset($params['password']);
                    }else{
                        $params['password']=encrypt($params['password']);
                    }
                    //是否输入支付密码（提现密码）
                    if ($params['payment_code']==''){
                        unset($params['payment_code']);
                    }else{
                        $params['payment_code']=encrypt($params['payment_code']);
                    }

                    $result = $row->allowField(true)->save($params);
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
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were updated'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }

    /**
     * 分数操作
     */
    function money_set($ids=null){
        $row = $this->model->find(['id' => $ids]);

        if (!$row) {
            $this->error(__('No Results were found'));
        }
//        2.判断权限
//        $usersIds=$this->getDataLimitAdminIds();//所有本管理员或代理的用户
//        if(is_array($usersIds)){
//            if (!in_array($row->admin_id,$usersIds)){
//                $this->error(__("You have no permission"));//没有权限
//            }
//        }
        if ($this->request->isPost()) {
            $type = $this->request->post("type");
            $money = $this->request->post("money");

            Db::startTrans();
            try {
//            3.1 加减余额  留记录
                $memo="管理员手动上分{$money},管理员id:".session('admin.id');
//                $money=$money;
                if ($type=='下分'){
                    if ($money>$row->money){
                        $this->error('余额不足');
                    }
                    $money=$money*-1;//提现为减
                    $memo="管理员手动下分{$money},管理员id:".session('admin.id');
                }
                Users::money($money,$row->id,$memo);


                Db::commit();
                $this->success("操作成功，{$memo}");
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
            $this->success();
        }
//        dump($row->toArray());die;
        $this->view->assign("row", $row->toArray());
        return $this->view->fetch();
    }

    /**
     * 搜索包括自己的代理id
     */
    public function adminid()
    {
        //adminid
        $ids =$this->auth->getChildrenAdminIds(true);;//所有登录者下级

        $adminModel=new \app\admin\model\Admin();//代理角度
        $agenary=$adminModel->getxiajiIdss();

        $ids=array_intersect($ids,$agenary);//交集
        $ids=implode(',',$ids);

        $where=[
            'id'=>['in',$ids],
        ];
        //是否有传入值
        $primaryvalue = $this->request->request("searchValue");
        if ($primaryvalue && $primaryvalue!=''){
            $where['id']=$primaryvalue;
        }


        //当前页
        $page = $this->request->request("pageNumber");
        //分页大小
        $pagesize = $this->request->request("pageSize");
        $list=\app\admin\model\Admin::where($where)->field('id,nickname as name')
            ->page($page, $pagesize)
            ->select();
        $total=\app\admin\model\Admin::where($where)->count();

        //这里一定要返回有list这个字段,total是可选的,如果total<=list的数量,则会隐藏分页按钮
        return json(['list' => $list, 'total' => $total]);
    }

    /**
     * 搜索包括自己的下级代理id的用户(前端下拉框使用)
     * @internal
     */
    public function usersid()
    {
//        $this->selectpage();

        $where=[];
//        1.所有自己的下级代理
        $ids =$this->auth->getChildrenAdminIds(true);//所有登录者下级角色


        $adminModel=new \app\admin\model\Admin();
        $agenary=$adminModel->getxiajiIdss();
        $ids=array_intersect($ids,$agenary);//交集
                $ids=implode(',',$ids);
        $where['admin_id']=['in',$ids];

        //是否有传入值
        $primaryvalue = $this->request->request("searchValue");
        if ($primaryvalue && $primaryvalue!=''){
            $where['id']=$primaryvalue;
        }

        //当前页
        $page = $this->request->request("pageNumber");
        //分页大小
        $pagesize = $this->request->request("pageSize");

//        2.所有自己的下级代理的用户
        $total=$this->model->where($where)->count();
        $users=$this->model->where($where)->field('id,username as name')->page($page, $pagesize)->select();


        //这里一定要返回有list这个字段,total是可选的,如果total<=list的数量,则会隐藏分页按钮
        return json(['list' => $users,'total'=>$total]);
    }

    /**
     * 搜索包括自己的代理id的用户（控制器使用，返回in）
     * @internal
     * $id  代理id
     */
    public function usersids($id=null)
    {
//        $this->selectpage();

        $where=[];
//        1.所有自己的下级(角色角度)
        $ids =$this->auth->getChildrenAdminIds(true);//所有登录者下级

        $adminModel=new \app\admin\model\Admin();//代理角度

        $agenary=$adminModel->getxiajiIdss($id);

        $ids=array_intersect($ids,$agenary);//交集

        $ids=implode(',',$ids);
        $where['admin_id']=['in',$ids];


//        2.所有自己的下级代理的用户
        $users=$this->model->where($where)->column('id');

        $users= collection($users)->toArray();

        $users=implode(',',$users);

        //这里一定要返回有list这个字段,total是可选的,如果total<=list的数量,则会隐藏分页按钮
        return $users;
    }


}
