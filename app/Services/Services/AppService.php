<?php

namespace App\Services\Services;

use App\Repositories\AppRepository;
use App\Services\Service;

class AppService extends Service
{
    public function __construct($key){

        $this->repository = new AppRepository($key);
    }
}