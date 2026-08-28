<?php

namespace App\Services\Services;

use GuzzleHttp\Client;

abstract class RequestService
{

    /**
     * @return string[]
     */
    private static function header(){

        return [
                'Authorization' => 'Bearer ' . store_token(),
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
                'Origin' => 'https://pgasfoods.com/',
                'x-feramy-client-origin' => 'https://pgasfoods.com/',
                'x-client' => 'resources'
            ];
    }

    /**
     * @param $path
     * @param $params
     * @return mixed|null
     */
    public static function post($path, $params){

        try {

            $response = (new Client())->post(env("API_URL") . $path, [
                'headers' => self::header(),
                'json' => $params
            ]);

            return json_decode($response->getBody() ?? "{}");

        }catch (\GuzzleHttp\Exception\GuzzleException $e){

            return $e->getMessage();
        }catch (\Exception $e){

            return $e->getMessage();
        }

    }

    /**
     * @param $path
     * @param $params
     * @return mixed|null
     */
    public static function get($path){

        try {

            $response = (new Client())->get(env("API_URL") . $path, [
                'headers' => self::header()
            ]);

            return json_decode($response->getBody() ?? "{}");

        }catch (\GuzzleHttp\Exception\GuzzleException $e){

            return $e->getMessage();
        }catch (\Exception $e){

            return $e->getMessage();
        }

    }

}
