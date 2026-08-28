<?php

namespace Customer\App\Controllers\Pages;

use Customer\App\Controllers\BaseController;
use Customer\App\Models\Pages\Relations\BlogRelations;
use Illuminate\Http\Request;

class BlogsController extends BaseController {

    public function __construct(){

        parent::__construct();
    }

    public function all(){

        if(! $record =  $this->webService->blogs()->fetch([], BlogRelations::CATEGORY) ){

            return response()->json($this->statusService::error("Fetch Blog"));
        }

        return response()->json($this->statusService::success("Fetch Blog", $record->toArray()));
    }

    public function get($identifier){

        if(! $record =  $this->webService->blogs()->findOne(["uuid"=>$identifier]) ){

            return response()->json($this->statusService::error("Fetch Blog"));
        }

        return response()->json($this->statusService::success("Fetch Blog", $record->toArray()));
    }


    public function store(Request $request)
    {
        $payload = $this->webService->blogs()->prepare($request, true);
        $payload["category_id"] = 1;
        $payload["url"] = self::toAscii($request->get("title"));
        $payload["status"] = 1;

        \Log::info("Data-> " . json_encode($payload));

        if($id = $request->get("id")){

            $target = ["id" => $id];
            if(! $this->webService->blogs()->update($payload, $target)){
                return response()->json($this->statusService::error("Update Blog"));
            }
            return response()->json($this->statusService::success("Update Blog"));
        }

        if(! $this->webService->blogs()->set(map_request($payload))){
            return response()->json($this->statusService::error("Update Blog"));
        }
        return response()->json($this->statusService::success("Update Blog"));
    }

    private static function toAscii($str, $replace=array(), $delimiter='-') {

        if( !empty($replace) ) {
            $str = str_replace((array)$replace, ' ', $str);
        }

        $clean = iconv('UTF-8', 'ASCII//TRANSLIT', $str);
        $clean = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $clean);
        $clean = strtolower(trim($clean, '-'));
        $clean = preg_replace("/[\/_|+ -]+/", $delimiter, $clean);

        return $clean;
    }

    public function update(Request $request)
    {
        try {
            $target = $request->get("target") ?? [];
            $data = $request->get("data") ?? [];

            if (!$records = $this->webService->blogs()->update($data, $target)) {
                return response()->json($this->statusService::error("Update"));
            }

            return response()->json($this->statusService::success("Update"));
        }catch (\Exception $e){
            return response()->json($this->statusService::error("Update"));
        }
    }

    public function delete($identifier)
    {
        try {

            $where = ["id" => $identifier];
            $param = ["status" => 0];

            if (!$this->webService->blogs()->update($param, $where)) {

                return response()->json($this->statusService::error("Delete"));
            }

            return response()->json($this->statusService::success("Delete"));

        }catch(\Exception $e){
            return response()->json($this->statusService::error("Delete"));
        }
    }
}