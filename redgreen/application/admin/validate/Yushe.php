<?php

namespace app\admin\validate;

use think\Validate;

class Yushe extends Validate
{
    /**
     * 验证规则
     */
    protected $rule = [

        'qishu'=>'require',
        'result'=>'require|max:9|min:0',
//        'email'    => 'require|email|unique:admin,email',
    ];
    /**
     * 提示消息
     */
    protected $message = [
    ];
    /**
     * 验证场景
     */
    protected $scene = [
        'add'  => ['qishu','result'],
        'edit' => ['qishu','result'],
    ];

}
