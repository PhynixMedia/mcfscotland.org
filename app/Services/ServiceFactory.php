<?php

namespace App\Services;

use App\Services\Services\AppService;

class ServiceFactory {

    protected $callbacks;

    /**
     * @param array $callbacks
     */
    public function __construct(array $callbacks = [])
    {

        $this->callbacks = array_merge([
            
        ], $callbacks);
    }

    public function create(string $key){

        try{

            // perform all checks here before releasing the instance
            return $this->callbacks[$key][1];

        }catch(\Exception $e){
            abort(500);
        }

    }

}