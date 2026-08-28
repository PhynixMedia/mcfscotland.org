<?php

namespace Customer\App\Repositories\Pages;

use App\Traits\RunTraits;
use App\Repositories\CoreRepository;
use Customer\App\Models\Pages\SeoKeyword;

class SeoKeywordRepository extends CoreRepository
{
    use RunTraits;

    public function __construct(){
        $this->model = new SeoKeyword();
    }
}
