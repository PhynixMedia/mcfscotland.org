<?php

namespace Customer\App\Controllers\Web;

use Illuminate\Http\Request;
use Customer\App\Models\Pages\Groups;
use Customer\App\Services\WebService;
use Illuminate\Support\Facades\Cookie;
use Customer\App\Models\Pages\PageVisit;
use Customer\App\Controllers\BaseController;

class WebController extends BaseController
{

    private static function get_page($page){

        $target_page = (object) json_decode(json_encode($page));

        return (object)[
            "title"     => _value($target_page, "title"),
            "label"     => _value($target_page, "label"),
            "url"       => _value($target_page, "url")
        ];
    }

    protected static function get_view($pager)
    {

        if(! $pager){
            abort(404);
        }

        try {

            $target_page = $pager->toArray() ?? [];
            // dd($target_page);
            $layout = _value2($pager, "layouts", "layout");

            $pagedata = pagedata($target_page, true);
            // dd(menu());
            // dd($pagedata);
            // if (!$blade = explode(".", $layout)[0]) {
            //     dd("No Blade File Found");
            //     abort(500);
            // }

            $blade = _value($target_page, "url");
            // Log it into the Page Visit table
            $pageUrl = _value($target_page, "url");
            // Get the current year and month
            $year = date('Y');
            $month = date('m');

            // Check if a record for this page and month exists
            $visitRecord = PageVisit::where('page_url', $pageUrl)
                ->where('year', $year)
                ->where('month', $month)
                ->first();

            if ($visitRecord) {
                // Increment the visit count
                $visitRecord->increment('visits');
            } else {
                // Create a new record
                PageVisit::create([
                    'page_url' => $pageUrl,
                    'year' => $year,
                    'month' => $month,
                    'visits' => 1,
                ]);
            }
            $page = self::get_page($target_page);

            // dd($page, $pagedata);
            
            return view("web.pages.{$blade}", compact("pagedata", "page"));

        }catch (\Exception $e){

            \Log::error("WebController Exception: -- " . $e->getMessage());
            abort(404);
        }

        return null;
    }

    public function server($url = "home"){

        if(! env("APP_LIVE") && $url == "home"){
            abort(222);
        }elseif(! env("APP_LIVE") && $url == "staging"){
            $url = "home";
        }

        try {
            // dd($url);
            // dd(self::get_view($this->webService->template()->loadPage($url)));
            return self::get_view($this->webService->template()->loadPage($url));

        }catch (\Exception $e){

            \Log::error("WebController Exception:: -->>" . $e->getMessage());
            abort(404);
        }

        return "";
    }

    public function sub_server($page, $sub){

        try {

            return self::get_view($this->webService->template()->loadPage("{$page}/{$sub}"));

        }catch (\Exception $e){
            abort(404);
        }

        return "";
    }

    protected function url($page = "home", $sub = null, $extra = null){

        $url  = $page;
        if($extra){
            $url = $extra;
        }elseif ($sub){
            $url = $sub;
        }
        return $url;
    }
}
