<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Repositories\Pages\BlocksRepository;

class BlocksService extends Service
{

    public function __construct(){

        $this->repository = new BlocksRepository();
    }
}
