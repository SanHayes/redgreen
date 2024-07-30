<?php

namespace app\admin\model;

use think\Model;


class Task extends Model
{

    

    

    // 表名
    protected $name = 'task';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'status_text'
    ];
    

    
    public function getStatusList()
    {
        return [ '0' => __('Status 0'),'1' => __('Status 1'),'2' => __('Status 2'),'3' => __('Status 3')];
    }


    public function getStatusTextAttr($value, $data)
    {

        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }




    public function users()
    {
        return $this->belongsTo('app\admin\model\users\User', 'users_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }

    public function admin()
    {
        return $this->belongsTo('app\admin\model\Admin', 'admin', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
