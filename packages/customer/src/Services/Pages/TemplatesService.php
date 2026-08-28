<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Services\Pages\SeoKeywordService;
use Customer\App\Models\Pages\Relations\PageRelations;
use Customer\App\Repositories\Pages\TemplatesRepository;

class TemplatesService extends Service
{

    public function __construct(){

        $this->repository = new TemplatesRepository();
    }

    public function blocks(){

        return new BlocksService();
    }

    public function groups(){

        return new GroupsService();
    }

    public function seoKeyword(){

        return new SeoKeywordService();
    }


    public function layouts(){

        return new LayoutsService();
    }

    public function loadPage($url = null){

        if(! $record = $this->repository->fetchOne(["url"=>$url], PageRelations::GROUPS, PageRelations::LAYOUTS)){
            return null;
        }
        // dd($record->toArray());
        return $record;
    }

}
