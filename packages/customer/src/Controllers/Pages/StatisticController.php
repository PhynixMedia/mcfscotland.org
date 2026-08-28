<?php

namespace Customer\App\Controllers\Pages;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Customer\App\Models\Pages\PageVisit;
use Customer\App\Controllers\BaseController;

class StatisticController extends BaseController
{

    public function __construct()
    {

        parent::__construct();
    }

    public function PageVisitsStats(Request $request)
    {
        // Calculate today's visits
        $today = Carbon::now()->toDateString();
        $todayVisits = PageVisit::whereDate('created_at', $today)->sum('visits');

        // Calculate the previous month's visits
        $previousMonthStart = Carbon::now()->subMonth()->startOfMonth()->toDateString();
        $previousMonthEnd = Carbon::now()->subMonth()->endOfMonth()->toDateString();
        $previousMonthVisits = PageVisit::whereBetween('created_at', [$previousMonthStart, $previousMonthEnd])->sum('visits');

        // Calculate the current month's visits (up to today)
        $currentMonthStart = Carbon::now()->startOfMonth()->toDateString();
        $currentMonthVisits = PageVisit::whereBetween('created_at', [$currentMonthStart, $today])->sum('visits');

        // Calculate the percentage increase or decrease
        $percentageChange = 0;
        if ($previousMonthVisits > 0) {
            $percentageChange = (($currentMonthVisits - $previousMonthVisits) / $previousMonthVisits) * 100;
        }
        $records = [
            'today_visits' => $todayVisits,
            'previous_month_visits' => $previousMonthVisits,
            'current_month_visits' => $currentMonthVisits,
            'percentage_change' => $percentageChange,
        ];

        return response()->json($this->statusService::success("Fetch", $records));
    }

    public function storeTags(Request $request){
        $seoTags = [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'keywords' => $request->input('keywords'),
        ];

        $seoTagsJson = json_encode($seoTags);

        // Define the path to your SEO tags file
        $seoTagsFile = storage_path('app/seo-tags.json');

        // Write the JSON data to the file
        file_put_contents($seoTagsFile, $seoTagsJson);

        return response()->json($this->statusService::success("SEO meta tags", $seoTags));
    }

}


