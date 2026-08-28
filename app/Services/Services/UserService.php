<?php

namespace App\Services\Services;

use App\Repositories\User\UserRepository;
use App\Services\Services\AccessControl\AccessControlService;
use App\Services\Services\AccessControl\RoleService;

class UserService extends \App\Services\Service
{

    public function __construct(){

        $this->repository = new UserRepository();
    }

    public function roles(){

        return new RoleService();
    }

    public function validator(){

        return new AccessControlService();
    }
}
