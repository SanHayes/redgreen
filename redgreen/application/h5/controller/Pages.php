<?php

use think\Controller;
class Pages extends Controller
{
    public function _initialize()
    {
        //跳转到/h5

        $url="http://{$_SERVER['HTTP_HOST']}/h5";
        Header("Location:$url");

    }
}