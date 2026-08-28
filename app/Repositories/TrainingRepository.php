<?php

namespace App\Repositories;

use App\Models\Training;
use App\Traits\RunTraits;
use App\Repositories\CoreRepository;

class TrainingRepository extends CoreRepository
{
    use RunTraits;
    public function __construct(){
        $this->model = new Training();
    }

}
