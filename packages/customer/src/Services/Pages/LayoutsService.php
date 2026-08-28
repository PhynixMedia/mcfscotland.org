<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Repositories\Pages\LayoutsRepository;

class LayoutsService extends Service
{

    public function __construct(){

        $this->repository = new LayoutsRepository();
    }
}
