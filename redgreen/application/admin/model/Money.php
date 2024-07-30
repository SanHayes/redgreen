<?php

namespace app\admin\model;

use think\Model;


class Money extends Model
{

    

    

    // 表名
    protected $name = 'money';
    
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
        return ['1' => __('充值'), '2' => __('提现')];
    }

    public function getStatusList()
    {

        return ['0' => __('未处理'), '1' => __('通过'), '2' => __('拒绝')];
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
    }
}
