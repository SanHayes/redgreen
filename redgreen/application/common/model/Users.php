<?php

namespace app\common\model;

use app\common\model\users\Moneylog;

use app\common\model\users\Scorelog;
use think\Model;

class Users extends Model
{
    // 表名
    protected $name = 'users';
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = 'deletetime';

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
    /**
     * 变更会员余额
     * @param int    $money   余额
     * @param int    $user_id 会员ID
     * @param string $memo    备注
     */
    public static function money($money, $user_id, $memo)
    {
        $user = self::get($user_id);

        if ($user && $money != 0) {

            $before = $user->money;
            $after = $user->money + $money;
            //更新会员信息
            $a=$user->save(['money' => $after]);

            //写入日志
            $addlog=['users_id' => $user_id, 'money' => $money, 'before' => $before, 'after' => $after, 'memo' => $memo];
            MoneyLog::create($addlog);


        }
    }

    /**
     * 变更会员积分
     * @param int    $score   积分
     * @param int    $user_id 会员ID
     * @param string $memo    备注
     */
    public static function score($score, $user_id, $memo)
    {
        $user = self::get($user_id);
        if ($user && $score != 0) {
            $before = $user->score;
            $after = $user->score + $score;
            $level = self::nextlevel($after);
            //更新会员信息
            $user->save(['score' => $after, 'level' => $level]);
            //写入日志
            ScoreLog::create(['users_id' => $user_id, 'score' => $score, 'before' => $before, 'after' => $after, 'memo' => $memo]);
        }
    }
}
