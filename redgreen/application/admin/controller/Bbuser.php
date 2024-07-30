<?php

namespace app\admin\controller;

use app\admin\controller\users\Moneylog;
use app\admin\controller\users\User as UserCon;
use app\admin\model\Admin;
use app\admin\model\AuthGroupAccess;
use app\common\controller\Backend;
use app\common\model\Users;

/**
 * 用户报表
 *
 * @icon fa fa-circle-o
 */
class Bbuser extends Backend
{
    
    /**
     * Daili模型对象
     * @var \app\admin\model\users\User;
     */
    protected $model = null;
//    protected $dataLimit = true;
//    protected $dataLimitField = 'id';
    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\users\User;

    }

    /**
     * 获取数据限制的管理员（代理）的用户
     *
     * @return mixed
     */
    protected function getDataLimitAdminIds()
    {
//        admin_sx_id
        $get_admin_id=$this->request->get("admin_sx_id");
        $adminid=null;
        if ($get_admin_id&&$get_admin_id!=''){
            $adminid=$get_admin_id;
        }
        $adminModel=new \app\admin\model\Admin();//代理角度
        $agenary=$adminModel->getxiajiIdss($adminid);
        $ids= $ids=implode(',',$agenary);

        $where['admin_id']=['in',$ids];
        $users=\app\common\model\Users::where($where)->column('id');
//        $users=implode(',',$users);
        return $users;
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
        $this->relationSearch = false;
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->isAjax())
        {

            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField'))
            {
                return $this->selectpage();
            }

            list($where,$wheretime, $sort, $order, $offset, $limit) = $this->buildparams();


            $ids =$this->getDataLimitAdminIds();//所有登录者下级用户

            $ids=implode(',',$ids);

            $total = $this->model->alias('u')
                ->field("u.*")
                ->where($where)
                ->where('u.id','in',$ids)
                ->count();



            $list = $this->model->alias('u')
                ->field("u.*")
                ->where($where)
                ->where('u.id','in',$ids)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();
//            dump($list);
            $list = collection($list)->toArray();


            $user=new UserCon();
//            $betwhere=['users_id'=>['in',$user->usersids()]];
//            dump($list);
            foreach ($list as $k=>$v) {
                //所有 该代理的下级（包括代理自己）

                $where=['users_id'=>['=',$v['id']]];

                $list[$k]['sum_bet_money']=\app\admin\model\Bet::where($wheretime)
                    ->where($where)
                    ->sum('money');//计算所有下注
                $list[$k]['sum_bet_result']=\app\admin\model\Bet::where($wheretime)
                    ->where($where)
                    ->sum('result');//计算所有下注输赢

                $where['status']=['=',1];
                $where['type']=['=',1];


                //所有奖励金额（管理员/代理手动调节 和 邀请奖励）
                unset($where['status']);
                unset($where['type']);

                $list[$k]['sum_money_add']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%用户充值%')
                    ->sum('money');//计算所有充值
                $list[$k]['sum_money_withdraw']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%用户提现%')
                    ->sum('money');//计算所有充值
                $list[$k]['sum_money_withdraw']=$list[$k]['sum_money_withdraw']*-1;
                $list[$k]['sum_money_money']=$list[$k]['sum_money_add']- $list[$k]['sum_money_withdraw'];//充值-提现

                $list[$k]['sum_bonus_money']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%注册奖励红包%')
                    ->sum('money');//邀请玩家奖励

                $list[$k]['sum_admin_money']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%管理员%')
                    ->sum('money');//管理员手动调节

                //任务奖励
                $list[$k]['sum_task']=\app\admin\model\Task::where($wheretime)
                    ->where($where)
                    ->where('status','=',3)
                    ->sum('score');//管理员手动调节

                //总用户返佣
                $list[$k]['sum_users_fan']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%返佣%')
                    ->sum('money');//邀请玩家奖励

            }


            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }


    /**
     * 生成查询所需要的条件,排序方式
     * @param mixed   $searchfields   快速查询的字段
     * @param boolean $relationSearch 是否关联查询
     * @return array
     */
    protected function buildparams($searchfields = null, $relationSearch = null)
    {

        $searchfields = is_null($searchfields) ? $this->searchFields : $searchfields;
        $relationSearch = is_null($relationSearch) ? $this->relationSearch : $relationSearch;
        $search = $this->request->get("search", '');

        $filter = $this->request->get("filter", '');
        $op = $this->request->get("op", '', 'trim');

        $sort = $this->request->get("sort", !empty($this->model) && $this->model->getPk() ? $this->model->getPk() : 'id');
        $order = $this->request->get("order", "DESC");
        $offset = $this->request->get("offset", 0);
        $limit = $this->request->get("limit", 0);
        $filter = (array)json_decode($filter, true);

        $op = (array)json_decode($op, true);
        $filter = $filter ? $filter : [];
        $where = [];
        $tableName = '';
        if ($relationSearch) {
            if (!empty($this->model)) {
                $name = \think\Loader::parseName(basename(str_replace('\\', '/', get_class($this->model))));
                $name = $this->model->getTable();
                $tableName = $name . '.';
            }
            $sortArr = explode(',', $sort);
            foreach ($sortArr as $index => & $item) {
                $item = stripos($item, ".") === false ? $tableName . trim($item) : $item;
            }
            unset($item);
            $sort = implode(',', $sortArr);
        }
        $adminIds = '[]';

        if (is_array($adminIds)) {

            $where[] = [$tableName . $this->dataLimitField, 'in', $adminIds];

        }

        if ($search) {
            $searcharr = is_array($searchfields) ? $searchfields : explode(',', $searchfields);
            foreach ($searcharr as $k => &$v) {
                $v = stripos($v, ".") === false ? $tableName . $v : $v;
            }
            unset($v);
            $where[] = [implode("|", $searcharr), "LIKE", "%{$search}%"];
        }

        $wheretime=[];

        foreach ($filter as $k => $v) {
            $sym = isset($op[$k]) ? $op[$k] : '=';
//            if (stripos($k, ".") === false) {
//                $k = $tableName . $k;
//            }
            if ($k=="id"||$k=="username"||$k=="nickname"||$k=="updatetime"||$k=="createtime"){
                $k = 'u.' . $k;
                $where[$k] = ['=', (string)$v];
            }elseif($k=="admin_id"){
                //直属一级
                $k = 'u.admin_id';
                $where[$k] = ['=', $v];
                /*//伞下
                $k = 'a.id';
                $adminModel=new \app\admin\model\Admin();
                $agenary=$adminModel->getxiajiIdss($v);

                $ids=implode(',',$agenary);
                $where[$k] = ['in', $ids];
                */
            }

            elseif ($k=="b_createtime"){
//                $k = ;
                $v = str_replace(' - ', ',', $v);
                $arr = array_slice(explode(',', $v), 0, 2);
                $arr[0]=strtotime($arr[0]);
                $arr[1]=strtotime($arr[1]);
                $wheretime['createtime'] = ['BETWEEN', $arr];
                $wheretime['createtime'] = ['BETWEEN', $arr];
            }
        }

//        dump($where);die;
        /*$where = function ($query) use ($where) {
              foreach ($where as $k => $v) {
                  if (is_array($v)) {
                      call_user_func_array([$query, 'where'], $v);
                  } else {
                      $query->where($v);
                  }
              }
          };*/

        return [$where, $wheretime,$sort, $order, $offset, $limit];
    }


}
