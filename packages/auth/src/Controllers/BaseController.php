<?php

namespace Auth\App\Controllers;

use Auth\App\Services\AuthService;
use App\Http\Controllers\Controller;
use Auth\App\Services\StatusService;

class BaseController extends Controller
{

    protected $authService;
    protected $statusService;

    public function __construct(){

        date_default_timezone_set('Europe/London');

        $this->authService           = new AuthService();
        $this->statusService        = new StatusService();
    }
}
