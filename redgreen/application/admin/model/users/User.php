<?php

namespace app\admin\model\users;

use app\admin\model\AuthGroupAccess;
use app\common\model\users\Moneylog;
use app\common\model\users\Scorelog;
use think\Model;
use traits\model\SoftDelete;

class User extends Model
{

    use SoftDelete;

    

    // 表名
    protected $name = 'users';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

    // 追加属性
    protected $append = [
        'jointime_text',
        'status_text'
    ];

    public function getOriginData()
    {
//        \app\common\model\users\Moneylog::
        return $this->origin;
    }

    protected static function init()
    {
        self::beforeUpdate(function ($row) {
//            $changed = $row->getChangedData();

//            //如果有修改密码
//            if (isset($changed['password'])) {
//                if ($changed['password']) {
//                    $row->password = encrypt($changed['password']);
//                } else {
//                    unset($row->password);
//                }
//            }
//            //如果有修改支付密码密码
//            if (isset($changed['payment_code'])) {
//                if ($changed['payment_code']) {
//                    $row->payment_code = encrypt($changed['payment_code']);
//                } else {
//                    unset($row->payment_code);
//                }
//            }
        });


        self::beforeUpdate(function ($row) {
            $changedata = $row->getChangedData();
            if (isset($changedata['money'])) {
                $origin = $row->getOriginData();
                //管理员iddump(session('admin'));die;
                MoneyLog::create(['users_id' => $row['id'], 'money' => $changedata['money'] - $origin['money'], 'before' => $origin['money'], 'after' => $changedata['money'], 'memo' => '管理员变更金额,管理员id'.session('admin.id')]);
            }
            if (isset($changedata['score'])) {
                $origin = $row->getOriginData();

                ScoreLog::create(['users_id' => $row['id'], 'score' => $changedata['score'] - $origin['score'], 'before' => $origin['score'], 'after' => $changedata['score'], 'memo' => '管理员变更积分']);
            }
        });
    }
    
    // public function getUserNameAttr($value)
    // {
    //     return htmlspecialchars_decode($value);
    // }
    
    // public function getNickNameAttr($value)
    // {
    //     return htmlspecialchars_decode($value);
    // }
    
    // public function getEmailAttr($value)
    // {
    //     return htmlspecialchars_decode($value);
    // }

    public function getStatusList()
    {
        return ['0' => __('Status 0'), '1' => __('Status 1')];
    }


    public function getJointimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['jointime']) ? $data['jointime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setJointimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


    public function admin()
    {
        return $this->belongsTo('app\admin\model\Admin', 'admin_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
