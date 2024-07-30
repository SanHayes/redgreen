<?php

namespace app\admin\model;

use think\Model;


class Bet extends Model
{
    // 表名
    protected $name = 'bet';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'bet_code_text',
        'status_text',
        'clearingtime_text'
    ];
    

    
    public function getBetCodeList()
    {
        return ['bigodd' => __('Bet_code bigodd'),'bigeven' => __('Bet_code bigeven'),'smallodd' => __('Bet_code smallodd'),'smalleven' => __('Bet_code smalleven'),'big' => __('Bet_code big'),'small' => __('Bet_code small'),'odd' => __('Bet_code odd'),'even' => __('Bet_code even'),'green' => __('Bet_code green'), 'violet' => __('Bet_code violet'), 'red' => __('Bet_code red'),'0' => __('Bet_code 0'), '1' => __('Bet_code 1'), '2' => __('Bet_code 2'), '3' => __('Bet_code 3'), '4' => __('Bet_code 4'), '5' => __('Bet_code 5'), '6' => __('Bet_code 6'), '7' => __('Bet_code 7'), '8' => __('Bet_code 8'), '9' => __('Bet_code 9')];
    }

    public function getStatusList()
    {
        return ['0' => __('Status 0'), '1' => __('Status 1'), '2' => __('Status 2')];
    }


    public function getBetCodeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['bet_code']) ? $data['bet_code'] : '');
        $list = $this->getBetCodeList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getClearingtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['clearingtime']) ? $data['clearingtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setClearingtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


    public function users()
    {
        return $this->belongsTo('app\admin\model\users\User', 'users_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }

    public function caidata()
    {
        return $this->belongsTo('app\admin\model\Caidata', 'qishu', 'qishu', [], 'LEFT')->setEagerlyType(0);
    }
}
