<?php

namespace App\Http\Controllers;

use App\Models\Training;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ContactRequest;
use Customer\App\Services\WebService;
use App\Http\Requests\TrainingRequest;
use Customer\App\Services\StatusService;
use App\Services\Services\ContactService;
use App\Services\Services\TrainingService;
use Customer\App\Controllers\BaseController;
use Customer\App\Services\Blogs\BlogsService;

Class IndexController extends BaseController
{
    protected $blogService;
    protected $webService;
    protected $contactService;
    protected $trainingService;
    protected $statusService;
    protected $selector = [];

    public function __construct(){
        // parent::__construct();
        date_default_timezone_set('Europe/London');

        $this->webService           = new WebService();
        $this->statusService        = new StatusService();
        $this->blogService = new BlogsService();
        $this->contactService = new ContactService();
        $this->trainingService = new TrainingService();
    }

    public function all(Request $request, $categoryId, $name){
        $request['category_id'] = $categoryId;
        $request['category_name'] = $name;

        // // get all blogs in category with the category id
        $blogdata = DB::table('web_blogs')->where('category_id', $categoryId)->get();
       
        return view("web.pages.components.blogs.list", compact("blogdata"));
    }

    public function get($identifier, $date, $title){
        $blogdata =  $this->webService->blogs()->findOne(["id"=>$identifier]);
        return view("web.pages.components.blogs.view", compact("blogdata"));
    }

    public function careers(){
        return view("web.pages.career");
    }

    public function contactStore(ContactRequest $request){

        $code = $request->get("captcha");
        $captcha = session()->get("captcha");
        if($code != $captcha){

            return back()->withErrors(["error" => "Please, enter valid code to be sure you are not a robot"]);
        }

        if($this->contactService->set($request)){

            $response = 'Thank you for your request! A member of our team will reach out to you soon.';
            session()->put("success", $response);
            return back();
        }
        else{
            return back()->withErrors(["error" => "Request could not be sent"]);
        }
    }

    public function trainingStore(TrainingRequest $request){
        // dd($request->all());
        $code = $request->get("captcha");
        $captcha = $request->get("cap_code");
        if($code != $captcha){

            return back()->withErrors(["error" => "Please, enter valid code to be sure you are not a robot"]);
        }

        $data = $request->validated();

        if(Training::create($data)){
            $to = 'salienttraining@salientcleaningandhealthcareservices.org';
            $subject = 'Training Request From Salient Cleaning and Healthcare Services Website';
            $message = view("web.mail.admin.web.training",compact("data"))->render();
            ( new \Notify\App\Services\Email\EmailService() )->runInstant($to, $subject, $message);
            $response = 'Thank you for your request! A member of our team will reach out to you soon.';
            session()->put("success", $response);
            return back();
        }
        else{
            return back()->withErrors(["error" => "Request could not be sent"]);
        }
    }
}