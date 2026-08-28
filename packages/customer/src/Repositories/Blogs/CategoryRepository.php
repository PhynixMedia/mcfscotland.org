<?php

namespace Customer\App\Repositories\Blogs;

use App\Repositories\CoreRepository;
use App\Traits\RunTraits;
use Customer\App\Models\Blogs\Category;

class CategoryRepository extends CoreRepository
{
    use RunTraits;

    public function __construct(){

        $this->model = new Category();
    }
}