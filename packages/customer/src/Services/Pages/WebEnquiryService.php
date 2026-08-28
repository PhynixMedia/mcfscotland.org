<?php

namespace Customer\App\Services\Pages;

use App\Services\Service;
use Customer\App\Repositories\Pages\WebEnquiryRepository;

class WebEnquiryService extends Service
{

    public function __construct(){

        $this->repository = new WebEnquiryRepository();
    }
}
