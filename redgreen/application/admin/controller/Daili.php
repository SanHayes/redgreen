<?php

namespace app\admin\controller;

use app\admin\controller\users\Moneylog;
use app\admin\controller\users\User;
use app\admin\model\Admin;
use app\admin\model\AuthGroupAccess;
use app\common\controller\Backend;
use app\common\model\Users;

/**
 * 管理员管理
 *
 * @icon fa fa-circle-o
 */
class Daili extends Backend
{
    
    /**
     * Daili模型对象
     * @var \app\admin\model\Daili
     */
    protected $model = null;
//    protected $dataLimit = true;
//    protected $dataLimitField = 'id';
    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Daili;

    }

    /**
     * 获取数据限制的管理员（代理）的用户
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

//
//            $ids= $ids=implode(',',$ids);
//
//            $where['id']=['in',$ids];
//            $users=\app\common\model\Users::where($where)->column('id');
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

            $ids =$this->auth->getChildrenAdminIds(true);//所有登录者下级
            $adminModel=new \app\admin\model\Admin();//代理角度
            $agenary=$adminModel->getxiajiIdss();

            $ids=array_intersect($ids,$agenary);//交集
//            $agenary = AuthGroupAccess::where('group_id','7')->column('uid');//所有代理z
//            $ids=array_intersect($ids,$agenary);//交集


            $ids=implode(',',$ids);
            $total = $this->model->alias('a')
                ->field("a.*")
                ->join('Users u','u.admin_id=a.id','LEFT')
                ->where($where)
                ->where('a.id','in',$ids)//只有角色为代理
                ->group('a.id')//分组,
                ->count();


            $list = $this->model->alias('a')
                ->field("a.*")
                ->join('Users u','u.admin_id=a.id','LEFT')
                ->where($where)
                ->where('a.id','in',$ids)//只有角色为代理
                ->group('a.id')//分组,
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $list = collection($list)->toArray();
            $user=new User;
//            $betwhere=['users_id'=>['in',$user->usersids()]];

            foreach ($list as $k=>$v) {
                //所有 该代理的下级（包括代理自己）

                $where=['users_id'=>['in',$user->usersids($v['id'])]];

                $list[$k]['sum_bet_money']=\app\admin\model\Bet::where($wheretime)
                    ->where($where)
                    ->sum('money');//计算所有下注
                $list[$k]['sum_bet_result']=\app\admin\model\Bet::where($wheretime)
                    ->where($where)
                    ->sum('result');//计算所有下注输赢

                $where['status']=['=',1];
                $where['type']=['=',1];


                $where['type']=['=',2];


                //所有奖励金额（管理员/代理手动调节 和 邀请奖励）
                unset($where['status']);
                unset($where['type']);

                //伞下代理数量
                $agenary=$adminModel->getxiajiIdss($v['id']);

                $list[$k]['sum_daili_count']=count($agenary)-1;

                $list[$k]['sum_money_add']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%用户充值%')
                    ->sum('money');//计算所有充值
                $list[$k]['sum_money_withdraw']=\app\common\model\users\Moneylog::where($wheretime)
                    ->where($where)->where('memo','like','%用户提现%')
                    ->sum('money');//计算所有充值
                $list[$k]['sum_money_withdraw']=$list[$k]['sum_money_withdraw']*-1;
                $list[$k]['sum_money_money']=$list[$k]['sum_money_add']- $list[$k]['sum_money_withdraw'];//充值-提现

                //伞下用户数量
                $list[$k]['sum_user_count']=Users::where(['id'=>['in',$user->usersids($v['id'])]])->count();

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
        $adminIds = $this->getDataLimitAdminIds();

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
                $k = 'a.' . $k;
                $where[$k] = ['=', (string)$v];
            }elseif($k=="admin_id"){
                //直属一级
                $k = 'a.admin_id';
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
