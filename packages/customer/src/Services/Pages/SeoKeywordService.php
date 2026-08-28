<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Models\Pages\Relations\PageRelations;
use Customer\App\Repositories\Pages\SeoKeywordRepository;

class SeoKeywordService extends Service
{

    public function __construct(){

        $this->repository = new SeoKeywordRepository();
    }

}
