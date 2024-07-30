<?php

namespace app\admin\model;

use think\Model;


class Suggest extends Model
{

    

    

    // 表名
    protected $name = 'suggest';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'type_text',
        'status_text'
    ];
    

    
    public function getTypeList()
    {
        return ['1' => __('Type 1'), '2' => __('Type 2'), '3' => __('Type 3'), '4' => __('Type 4'), '5' => __('Type 5'), '6' => __('Type 6'), '7' => __('Type 7')];
    }

    public function getStatusList()
    {
        return ['1' => __('Status 1'), '0' => __('Status 0')];
    }


    public function getTypeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['type']) ? $data['type'] : '');
        $list = $this->getTypeList();
        return isset($list[$value]) ? $list[$value] : '';
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
//        return $this->hasMany('app\admin\model\users\User', 'users_id')->setEagerlyType(0);
    }
    public function admin()
    {
        return $this->belongsTo('app\admin\model\Admin', 'users.admin_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
