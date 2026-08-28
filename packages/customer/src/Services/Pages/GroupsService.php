<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Repositories\Pages\GroupsRepository;

class GroupsService extends Service
{

    public function __construct(){

        $this->repository = new GroupsRepository();
    }
}
