<?php

namespace Customer\App\Services\Blogs;

use App\Services\Service;
use Customer\App\Repositories\Blogs\BlogsRepository;

class BlogsService extends Service
{
    public function __construct(){

        $this->repository = new BlogsRepository();
    }

    public function category(){

        return new CategoryService();
    }

}