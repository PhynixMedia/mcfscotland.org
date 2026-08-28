<?php

namespace App\Repositories;

use App\Traits\RunTraits;
use Customer\App\Models\Pages\WebEnquiry;
use App\Repositories\CoreRepository;

class ContactRepository extends CoreRepository
{
    use RunTraits;
    public function __construct(){
        $this->model = new WebEnquiry();
    }

}
