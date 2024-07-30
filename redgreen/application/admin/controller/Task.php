<?php

namespace app\admin\controller;

use app\admin\controller\users\User;
use app\common\controller\Backend;
use app\common\model\Users;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 
 *
 * @icon fa fa-circle-o
 */
class Task extends Backend
{
    
    /**
     * Task模型对象
     * @var \app\admin\model\Task
     */
    protected $model = null;
    protected $dataLimit = true;
    protected $dataLimitField = 'users_id';
    protected $dataLimitFieldAutoFill=false;//关闭自动填充

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Task;
        $this->view->assign("statusList", $this->model->getStatusList());
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
        $get_admin_id=$this->request->get("admin_sx_id");
        if ($get_admin_id&&$get_admin_id!=''){
//            $where['admin_id']=['=',$get_admin_id];
            $user=new User;
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
            $user=new User();
            $ids = $user->usersids();
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
                    ->with(['users','admin'])
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->with(['users','admin'])
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



    /**
     * 完成任务
     */
    public function accomplish($ids=null)
    {
        //        1.数据表获取数据
        $row=$this->model->get($ids);
        if (!$row){
            $this->error(__('No results were found'));//数据未找到
        }
//        2.判断权限
        $usersIds=$this->getDataLimitAdminIds();//所有本管理员或代理的用户
        if(is_array($usersIds)){
            if (!in_array($row->users_id,$usersIds)){
                $this->error(__("You have no permission"));//没有权限
            }
        }
//        3.更新数据库
        Db::startTrans();
        try {
//            3.1 加减余额  留记录
            $memo="用户完成任务 Id:{$ids}";
            $money=$row->score;
            Users::money($money,$row->users_id,$memo);
            //3.2 更改任务状态
            $row->save(['status'=>3]);



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
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                        $this->model->validateFailException(true)->validate($validate);
                    }
                    $params['admin']=session('admin.id');
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
     * 所有代理伞下会员全部添加任务
     */
    function arr_add_task(){
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            $params = $this->preExcludeFields($params);
           //所有伞下会员
            $users=new User();
            $users=$users->usersids();

            if (!$users||$users==''){
               $this->error('没有会员');
            }
            $users=explode(',',$users);
            foreach ($users as $k=>$v){
                $params['admin']=session('admin.id');
                $params['users_id']=$v;
                $this->model->create($params);
            }
            $this->success();
        }

        return $this->view->fetch();
    }

}
