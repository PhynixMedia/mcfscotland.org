<?php

namespace Customer\App\Controllers\Pages;

use Customer\App\Controllers\BaseController;
use Illuminate\Http\Request;

class EmailController extends BaseController {

    public function __construct(){

        parent::__construct();
    }

    public function sendEmail(Request $request){
        try {
            $data = $request->validate([
                'email' => 'required|email',
                'cc' => 'nullable|email',
                'bcc' => 'nullable|email',
                'subject' => 'required',
                'message' => 'required'
            ]);

            $to = $data['email'];
            $subject = $data['subject'];
            $message = $data['message'];
            ( new \Notify\App\Services\Email\EmailService() )->runInstant($to, $subject, $message);

            return response()->json($this->statusService::success("Email sent", $data));
        } catch (\Exception $e) {
            report_error($e);
            return response()->json($this->statusService::error("Email Not Sent"));
        }
    }
}