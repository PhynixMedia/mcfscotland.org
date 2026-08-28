<?php

namespace App\Repositories;

class AppRepository extends CoreRepository
{
    public function __construct($key){

        $this->model = new $key();

    }
}