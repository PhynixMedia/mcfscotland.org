<?php

namespace Customer\App\Repositories\Pages;

use App\Repositories\CoreRepository;
use App\Traits\RunTraits;
use Customer\App\Models\Pages\Templates;

class TemplatesRepository extends CoreRepository
{
    use RunTraits;

    public function __construct(){

        $this->model = new Templates();
    }
}
