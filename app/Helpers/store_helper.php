<?php

use GuzzleHttp\Client;

function _session($key, $value = false){

    if(! $value){

        return session()->get($key) ?? '';
    }

    session()->put($key, $value);
    session()->save();
}


/**
 * This method should load category only once
 * into the session to prevent repeated request to server
 */
function _category()
{

    try{
        // if in session, return it
        if($category = _session('category')){
            return $category;
        }

        $client = new Client();
        $response2 = $client->get(env("API_URL").'store/list/category', [
            'headers' => [
                'Authorization' => 'Bearer ' . store_token(),
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
                'Origin' => 'https://pgasfoods.com/',
                'x-feramy-client-origin' => 'https://pgasfoods.com/',
            ],
        ]);

        $data = $response2->getBody();
        $data = json_decode($data);
        $categories = _value($data, "data");

        session()->put('category', $categories);
        session()->save();

        return _session('category');

    }catch(\Exception $e){

        return null;
    }
}

function products(){

    try{

        if($product = _session('product')){
            return $product;
        }

        $client = new Client();
        $response2 = $client->get(env("API_URL").'store/list/products', [
            'headers' => [
                'Authorization' => 'Bearer ' . store_token(),
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
                'Origin' => 'https://pgasfoods.com/',
                'x-feramy-client-origin' => 'https://pgasfoods.com/',
                'x-client' => 'resources'
            ],
        ]);

        $data = $response2->getBody();
        $data = json_decode($data);
        $products = _value($data, "data");

        session()->put('product', $products);
        session()->save();

        return _session('product');

    }catch(\Exception $e){

        return null;
    }
}

 function _getImagePath($path){
    $companyId = _companyId();
    $image_path = "https://rms.api.feramy.com/storage/files/products/$companyId/images/$path";
    return $image_path;

 } 

 function _companyId(){
    $companyId = env("APP_COMPANY_ID");
    return $companyId;
 }

 function _outletId(){
    $outletId = env("APP_OUTLET_ID");
    return $outletId;
 }


/**
 * This parse all response from server
 */
function _parser($response){

    try{

        $data = json_decode($response);

        return $data->data;

    }catch(\Exception $e){

        return null;
    }
}

/**
 *
 */
function _products(){

    try{

        $response = (new Store\Manager\Services\Products\ProductService())->all();

        $products =  _parser($response->products);

        return $products->data;

    }catch(\Exception $e){
        return null;
    }
}

/**
 *
 */
function _deals(){

    return false; // (new Store\Manager\Services\Sales\DealsService())->deals();
}

/**
 *
 */
function _sales($search)
{
    try{

        $products = (new Store\Manager\Services\Products\ProductService())->sales($search);
        return $products->products->data ?? null;

    }catch(\Exception $e){
        return null;
    }
}

/**
 *
 */
function _related(string $search = null)
{
    if(!$search){ return false; }
    try{

        $products = (new Store\Manager\Services\Products\ProductService())->related($search);
        return $products->products->data ?? null;

    }catch(\Exception $e){
        return null;
    }
}

/**
 *
 */
function _latest()
{
    return false; // (new Store\Manager\Services\Products\ProductService())->latest();
}

/**
 *
 */
function _views()
{
    return false; // (new Store\Manager\Services\Products\ProductService())->views();
}

function status_filter(array $params = []): array
{

    $filter = [
        "status" => 1
    ];
    return array_merge($filter, $params);
}

function store_token(){
    return (new Store\App\Services\Token\TokenService())->token() ?? '';
}

function report_error(\Exception $e){

    logger("Error Occurred:: " . json_encode([
        "line"      => $e->getLine(),
        "file"      => $e->getFile(),
        "message"   => $e->getMessage(),
        "trace"     => $e->getPrevious()
    ]));

    return null;
}

