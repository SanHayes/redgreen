<?php
ini_set('max_execution_time', 0);
define('API_URL', 'https://admin.honglv.icu/manage.php/caiji');
while(true){
	$t = time();
    if($t % 5 == 0){
        file_get_contents(API_URL);
    }
    sleep(1);
}