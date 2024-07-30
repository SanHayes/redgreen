<?php

namespace app\admin\controller;

use app\admin\controller\users\User;
use app\admin\model\users\Bank;
use app\common\controller\Backend;
use app\common\model\Users;
use think\Config;
use think\Db;
use app\admin\controller\users\Bank as BankContoller;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 
 *
 * @icon fa fa-money
 */
class Money extends Backend
{
    
    /**
     * Money模型对象
     * @var \app\admin\model\Money
     */
    protected $model = null;
    protected $dataLimit = true;
    protected $dataLimitField = 'users_id';
    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Money;
        $this->view->assign("typeList", $this->model->getTypeList());
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

        $get_admin_id=$this->request->get("admin_id");
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
                
                $row->getRelation('users')->visible(['nickname']);
            }
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }
    
    /**
     * 同意用户充值或提现
     */
    public function apply_yes($ids=null)
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
            $memo="用户充值{$row->money}";
            $money=$row->money;
            if ($row->type==2){
                $site = Config::get('site');
                $money=$row->money*-1;//提现为减
                $memo=$row->memo;
            }
            Users::money($money,$row->users_id,$memo);
            $row->save(['status'=>1]);

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
     *  拒绝用户充值或提现
     */
    public function apply_no($ids=null)
    {
        $row = $this->model->find(['id' => $ids]);

        if (!$row) {
            $this->error(__('No Results were found'));
        }

        if ($this->request->isPost()) {
            $memo = $this->request->post("memo");
            $a=$this->model->where('id',$ids)->update(['status'=>2,'memo'=>$memo]);
            $this->success();
        }
//        dump($row->toArray());
        $this->view->assign("row", $row->toArray());
        return $this->view->fetch();
    }



}
