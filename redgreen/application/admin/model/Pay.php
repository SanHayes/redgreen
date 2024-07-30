<?php

namespace app\admin\model;

use think\Model;


class Pay extends Model
{

    

    

    // 表名
    protected $name = 'pay';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'datetime_text',
        'trade_state_text'
    ];
    

    
    public function getTradeStateList()
    {
        return ['NOTIFYED' => __('Trade_state notifyed'), 'SUCCESS' => __('Trade_state success'), 'NOTPAY' => __('Trade_state notpay')];
    }


    public function getDatetimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['datetime']) ? $data['datetime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }


    public function getTradeStateTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['trade_state']) ? $data['trade_state'] : '');
        $list = $this->getTradeStateList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    protected function setDatetimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


    public function users()
    {
        return $this->belongsTo('app\admin\model\users\User', 'users_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
