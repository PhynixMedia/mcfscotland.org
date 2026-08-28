<?php

namespace Customer\App\Repositories\Pages;

use App\Repositories\CoreRepository;
use App\Traits\RunTraits;
use Customer\App\Models\Pages\Blocks;

class BlocksRepository extends CoreRepository
{
    use RunTraits;

    public function __construct(){

        $this->model = new Blocks();
    }
}
