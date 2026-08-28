<?php

namespace App\Services\Services;

use App\Services\Service;
use App\Repositories\TrainingRepository;

class TrainingService extends Service
{
    public function __construct(){
        $this->repository = new TrainingRepository();
    }
}
