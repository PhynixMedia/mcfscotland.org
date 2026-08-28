<?php

namespace Customer\App\Controllers\Pages;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Customer\App\Traits\PageTrait;
use Customer\App\Models\Pages\Blocks;
use Customer\App\Models\Pages\Groups;
use Illuminate\Support\Facades\Storage;
use Customer\App\Models\Pages\Templates;
use Illuminate\Support\Facades\Validator;
use Customer\App\Controllers\BaseController;
use Customer\App\Requests\SearchWebsiteRequest;
use Customer\App\Models\Pages\Relations\PageRelations;

class TemplateController extends BaseController
{

    use PageTrait;

    const WEB_TEMPLATE_PAGES = "pages";
    const WEB_TEMPLATE = "template";
    const WEB_BLOCKS = "block";
    const WEB_GROUPS = "group";
    const WEB_ELEMENTS = "element";
    const IMAGES = "images";
    const WEB_LAYOUT = "layout";
    const WEB_SEO_KEYWORD = "seo-keyword";
    const WEB_ENQUIRY = "enquiry";

    public function __construct()
    {

        parent::__construct();
    }

    public function fetch($target)
    {

        switch ($target) {

            case self::WEB_TEMPLATE_PAGES:
                if ($records = $this->webService->template()->fetch([], PageRelations::META_KEYWORD,PageRelations::LAYOUTS, PageRelations::BLOCKS_GROUPS)) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;
            case self::WEB_TEMPLATE:
                if ($records = $this->webService->template()->fetch([], PageRelations::META_KEYWORD,PageRelations::LAYOUTS, PageRelations::BLOCKS_GROUPS)) {
                    $response = $records;
                    $response = self::setElements($response);
                    return response()->json($this->statusService::success("Fetch", $response));
                }
                break;
            case self::WEB_BLOCKS:
                if ($records = $this->webService->template()->blocks()->fetch([], PageRelations::GROUPS)) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;
            case self::WEB_GROUPS:
                if ($records = $this->webService->template()->groups()->fetch([])) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                // if ($records = $this->webService->template()->groups()->all()) {
                //     return response()->json($this->statusService::success("Fetch", $records->toArray()));
                // }
                break;
            case self::WEB_LAYOUT:
                if ($records = $this->webService->template()->layouts()->fetch([])) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;

            case self::WEB_SEO_KEYWORD:
                if ($records = $this->webService->template()->seoKeyword()->fetch([])) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;

            case self::WEB_ENQUIRY:
                if ($records = $this->webService->webEnquiry()->fetch([])) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;
            case self::IMAGES:
                //read images from a directories and sort them into array based on the directory
                $directory = storage_path('app/public/images');
                $imageList = $this->getImagesInDirectory($directory);
                logger("ImageLizr", $imageList);
                if(count($imageList ?? []) > 0){
                    return response()->json($this->statusService::success("Fetch", $imageList));
                }

                break;
        }

        return response()->json($this->statusService::error("Fetch"));
    }

    public function find(SearchWebsiteRequest $request, $target)
    {

        $where = $request->get('target') ?? [];
        $fetch = $request->get("total");

        switch ($target) {

            case self::WEB_TEMPLATE_PAGES:
                if ($records = $this->webService->template()->fetch($where, PageRelations::META_KEYWORD,PageRelations::LAYOUTS, PageRelations::BLOCKS_GROUPS)) {
                    return response()->json($this->statusService::success("Fetch", $records));
                }
                break;
            case self::WEB_TEMPLATE:
                if ($records = $this->webService->template()->fetch($where)) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;
            case self::WEB_BLOCKS:

                \Log::info("Unable to fetch ------ " . json_encode($where));
                if ($records = $this->webService->template()->blocks()->fetch($where, PageRelations::GROUPS)) {
                    return response()->json($this->statusService::success("Fetch", $records->toArray()));
                }
                break;
            case self::WEB_GROUPS:

                \Log::info("Unable to fetch " . json_encode($where));
                if ($fetch == 1) {
                    if ($records = $this->webService->template()->groups()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                } else {
                    if ($records = $this->webService->template()->groups()->fetch($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                }
                break;
            case self::WEB_LAYOUT:
                if ($fetch == 1) {
                    if ($records = $this->webService->template()->layouts()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                } else {
                    if ($records = $this->webService->template()->layouts()->fetch($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                }
                break;

            case self::WEB_SEO_KEYWORD:
                if ($fetch == 1) {
                    if ($records = $this->webService->template()->seoKeyword()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                } else {
                    if ($records = $this->webService->template()->seoKeyword()->fetch($where)) {
                        return response()->json($this->statusService::success("Fetch", $records->toArray()));
                    }
                }
                break;
        }

        return response()->json($this->statusService::error("Fetch"));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request, $target)
    {

        switch ($target) {
            case self::WEB_TEMPLATE:
                $payload = $this->webService->template()->prepare($request, true);
                // convert $payload['title'] to url friendly
                $payload['url'] = Str::slug($payload['title']);
                $payload["status"] = 1;
                $payload["parent"] = $request->get("parent") ?? 0;
                if (!$this->webService->template()->set(map_request($payload))) {
                    return response()->json($this->statusService::error("Create"));
                }
                if ($records = $this->webService->template()->fetch([], PageRelations::BLOCKS_GROUPS)) {
                    return response()->json($this->statusService::success("Create", $records->toArray()));
                }
                break;
            case self::WEB_BLOCKS:
                $payload = $this->webService->template()->blocks()->prepare($request, true);
                $payload["status"] = 1;
                if (!$this->webService->template()->blocks()->set(map_request($payload))) {
                    return response()->json($this->statusService::error("Create"));
                }
                if ($records = $this->webService->template()->blocks()->fetch(["template_id" => $request->get("template_id")])) {
                    return response()->json($this->statusService::success("Create", $records->toArray()));
                }
                break;
            case self::WEB_GROUPS:

                $sibling = $this->webService->template()->groups()->fetchOne(["block_id"=>$request->get("block_id")]);

                $payload = $this->webService->template()->groups()->prepare($request, true);
                $payload["element"] = [];
                if (!$group_id = $this->webService->template()->groups()->set(map_request($payload))) {
                    return response()->json($this->statusService::error("Create"));
                }

                //update the group elements
                if($sibling){
                    $where = ["id" => $group_id];
                    $data = ["element" => _value($sibling, "element")];
                    if(!$this->webService->template()->groups()->update($data, $where)){
                        return response()->json($this->statusService::error("Create"));
                    }
                }
                break;
            case self::WEB_ELEMENTS:
                // check if this element is for a group,
                // then create a copy for all the groups in the block
                // else just create one
                $where = ["id"=> $request->get("group_id")];
                if(!$group = $this->webService->template()->groups()->fetchOne($where)){
                    return response()->json($this->statusService::error("Create"));
                }
                $search = ["block_id" => _value($group, "block_id")];
                if(!$groups = $this->webService->template()->groups()->fetch($search)){
                    return response()->json($this->statusService::error("Create"));
                }

                $data = [
                    "name" => $request->get("name"),
                    "type" => $request->get("type"),
                    "value" => $request->get("value"),
                ];

                $isError = false;
                foreach ($groups as $group){

                    $elements = _value($group, "element");

                    $where = ["id" => _value($group, "id")];
                    $elements[] = $data;
                    $payload = ["element"=>$elements];
                    if(!$this->webService->template()->groups()->update($payload, $where)){
                        $isError = true;
                        break;
                    }
                }
                if($isError){
                    return response()->json($this->statusService::error("Create"));
                }
                break;
            case self::WEB_LAYOUT:
                $payload = $this->webService->template()->layouts()->prepare($request, true);
                $payload["status"] = 1;
                if (!$this->webService->template()->layouts()->set(map_request($payload))) {
                    return response()->json($this->statusService::error("Create"));
                }
                break;

            case self::WEB_SEO_KEYWORD:
                $payload = $this->webService->template()->seoKeyword()->prepare($request, true);
                $payload["status"] = 1;
                if (!$this->webService->template()->seoKeyword()->set(map_request($payload))) {
                    return response()->json($this->statusService::error("Create"));
                }
                break;
        }

        return response()->json($this->statusService::success("Create"));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $target)
    {
        try {

            $where = $request->get("target") ?? [];
            $data = $request->get("data") ?? [];

            \Log::info("Update Payload::: " . json_encode($request->all()));

            switch ($target) {
                case self::WEB_TEMPLATE:
                    if($data['title'] ?? false){
                        $data['url'] = Str::slug($data['title']);
                    }
                    if (!$records = $this->webService->template()->update($data, $where)) {
                        return response()->json($this->statusService::error("Update Template"));
                    }
                    break;
                case self::WEB_BLOCKS:
                    if (!$records = $this->webService->template()->blocks()->update($data, $where)) {
                        return response()->json($this->statusService::error("Update Block"));
                    }
                    break;
                case self::WEB_GROUPS:

                    if(!$record = $this->webService->template()->groups()->fetchOne($where)){
                        return response()->json($this->statusService::error_with_message("Unable to find parent group"));
                    }

                    $elements = _value($record, "element");

                    if(!is_array($elements)){
                        $elements = (array)json_decode($elements);
                    }

                    foreach ($elements as &$element) {
                        if ($element['name'] === $data["name"]) {
                            if(array_key_exists("group_id", $data)){
                                unset($data["group_id"]);
                                unset($data["group_uuid"]);
                            }
                            $element = $data;
                        }
                    }
                    // unset the reference to avoid unintended side effects
                    unset($element);

                    $payload = ["element" => json_encode($elements)];
                    if(! $this->webService->template()->groups()->update($payload, $where)){
                        return response()->json($this->statusService::error("Update Group"));
                    }
                    break;
                case self::WEB_LAYOUT:
                    if (!$records = $this->webService->template()->layouts()->update($data, $where)) {
                        return response()->json($this->statusService::error("Update Layout"));
                    }
                    break;

                case self::WEB_SEO_KEYWORD:
                    if (!$records = $this->webService->template()->seoKeyword()->update($data, $where)) {
                        return response()->json($this->statusService::error("Update Seo Keyword"));
                    }
                    break;
            }

            return response()->json($this->statusService::success("Update"));

        } catch (\Exception $e) {

            \Log::info("Update Payload Error::: " . json_encode($e->getMessage()));

            return response()->json($this->statusService::error("Update"));
        }
    }

    /**
     * @param $identifier
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($target, $identifier)
    {
        try {

            $where = ["id" => $identifier];
            $param = ["status" => 0];

            switch ($target) {
                case self::WEB_TEMPLATE:
                    if (!$this->webService->template()->update($param, $where)) {
                        return response()->json($this->statusService::error("Delete " . self::WEB_TEMPLATE));
                    }
                    break;  
                case self::WEB_BLOCKS:
                    if (!$this->webService->template()->blocks()->update($param, $where)) {
                        return response()->json($this->statusService::error("Delete " . self::WEB_BLOCKS));
                    }
                    break;
                case self::WEB_GROUPS:
                    if (!$this->webService->template()->groups()->update($param, $where)) {
                        return response()->json($this->statusService::error("Delete " . self::WEB_GROUPS));
                    }
                    break;
                case self::WEB_LAYOUT:
                    if (!$this->webService->template()->layouts()->update($param, $where)) {
                        return response()->json($this->statusService::error("Delete " . self::WEB_LAYOUT));
                    }
                    break;

                case self::WEB_SEO_KEYWORD:
                    if (!$this->webService->template()->seoKeyword()->update($param, $where)) {
                        return response()->json($this->statusService::error("Delete " . self::WEB_SEO_KEYWORD));
                    }
                    break;
            }

            return response()->json($this->statusService::success("Delete"));

        } catch (\Exception $e) {
            return response()->json($this->statusService::error("Delete"));
        }
    }

    public function postDelete(Request $request, $target){

//        try {

            switch ($target) {
                case self::WEB_ELEMENTS:

                    $where = $request->get("target");

                    logger("id::" . json_encode($where));
                    if(!$group = $this->webService->template()->groups()->fetchOne($where)){
                        return response()->json($this->statusService::error("Delete 1"));
                    }
                    $search = ["block_id" => _value($group, "block_id")];
                    if(!$groups = $this->webService->template()->groups()->fetch($search)){
                        return response()->json($this->statusService::error("Delete 2"));
                    }

                    $isError  = false;

                    $request = map_request($request->get("data"));
                    $name = $request->get("name");

                    $groups = $groups->toArray();
                    foreach ($groups as $group){

                        $where = ["id"=>_value($group, "id")];

                        if(!$elements = _value($group, "element")){
                            continue;
                        }

                        if(count($elements ?? []) == 0){
                            continue;
                        }

                        $filteredGroups = array_filter($elements, function($element) use ($name) {
                            return $element['name'] !== $name;
                        });

                        $payload = ["element"=>$filteredGroups];

                        if(!$this->webService->template()->groups()->update($payload, $where)){
                            $isError = true;
                            break;
                        }
                    }
                    if($isError){
                        return response()->json($this->statusService::error("Delete 3"));
                    }
                    break;
            }

            return response()->json($this->statusService::success("Delete"));

//        } catch (\Exception $e) {
//            return response()->json($this->statusService::error("Delete"));
//        }
    }

    public function get($target, $identifier)
    {
        try {

            $where = ["uuid" => $identifier];

            switch ($target) {

                case self::WEB_TEMPLATE_PAGES:
                    if ($records = $this->webService->template()->fetchOne($where, PageRelations::META_KEYWORD,PageRelations::LAYOUTS, PageRelations::BLOCKS_GROUPS)) {
                        return response()->json($this->statusService::success("Fetch", $records));
                    }
                    break;
                case self::WEB_TEMPLATE:
                    if ($records = $this->webService->template()->fetchOne($where, PageRelations::META_KEYWORD,PageRelations::LAYOUTS, PageRelations::BLOCKS_GROUPS)) {
                        
                        return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                    }
                    break;
                case self::WEB_BLOCKS:
                    if ($records = $this->webService->template()->blocks()->fetchOne($where, PageRelations::GROUPS)) {
                        return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                    }
                    break;
                case self::WEB_GROUPS:
                    if ($records = $this->webService->template()->groups()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                    }
                    break;
                case self::WEB_LAYOUT:
                    if ($records = $this->webService->template()->layouts()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                    }
                    break;

                case self::WEB_SEO_KEYWORD:
                    if ($records = $this->webService->template()->seoKeyword()->fetchOne($where)) {
                        return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                    }
                    break;

                case self::WEB_ENQUIRY:
                if ($records = $this->webService->webEnquiry()->fetchOne($where)) {
                    return response()->json($this->statusService::success("Retrieved", $records->toArray()));
                }
                break;
            }

            return response()->json($this->statusService::error("Unable to retrieve record"));

        } catch (\Exception $e) {
            return response()->json($this->statusService::error("Retrieved"));
        }
    }

    private function saveImage($imageData)
    {
        // Decode the base64 image data
        $decodedImage = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));

        // Generate a unique filename for the image
        $imageName = uniqid('image_') . '.png';

        // Save the image to storage/images directory
        Storage::disk('public')->put('images/' . $imageName, $decodedImage);

        // Return the image link
        return asset('storage/images/' . $imageName);
    }

    private function saveVideo($videoData){
        // Decode the base64 video data
        $decodedVideo = base64_decode(preg_replace('#^data:video/\w+;base64,#i', '', $videoData));

        // Generate a unique filename for the video
        $videoName = uniqid('video_') . '.mp4';

        // Save the video to storage/videos directory
        Storage::disk('public')->put('videos/' . $videoName, $decodedVideo);

        // Return the video link
        return asset('storage/videos/' . $videoName);
    }

    private function getImagesInDirectory($directory) {
        // Get a list of all files and directories in the specified directory
        $files = scandir($directory);

        logger("file" . json_encode($files));

        // Initialize an empty array to store image names and paths
        $imageArray = array();

        foreach ($files as $file) {
            // Check if the file is an image (you can adjust the check based on your requirements)
            $imageExtensions = array('jpg', 'jpeg', 'png', 'gif');
            $fileExtension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

            if (in_array($fileExtension, $imageExtensions)) {
                // Build the image path
                $imagePath = $directory . DIRECTORY_SEPARATOR . $file;

                $image_path = explode("public", $imagePath);
                // Add the image name and path to the array
                //http://localhost:8002/storage/images/Screenshot 2023-07-13 at 19.38.40.png
                $imageArray[] = array(
                    'name' => $file,
                    'path' => url("storage/" ). end($image_path)
                );
            }
        }

        return $imageArray;
    }


}


