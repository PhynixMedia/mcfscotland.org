<?php

namespace Customer\App\Services\Blogs;

use App\Services\Service;
use Customer\App\Repositories\Blogs\CategoryRepository;

class CategoryService extends Service
{

    public function __construct(){

        $this->repository = new CategoryRepository();
    }
}