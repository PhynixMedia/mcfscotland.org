<?php

namespace Customer\App\Controllers;

use App\Http\Controllers\Controller;
use Customer\App\Services\StatusService;
use Customer\App\Services\WebService;

class BaseController extends Controller
{

    protected $token;
    protected $id;
    protected $email;

    protected $webService;
    protected $statusService;

    protected $selector = [];

    public function __construct(){

        date_default_timezone_set('Europe/London');

        $this->webService           = new WebService();
        $this->statusService        = new StatusService();
    }
}
