<?php

namespace Customer\App\Services\Pages;

use Exception;

class MediaService
{

    protected $images_dir = '/assets/images/';

    /**
     *
     */
    public function __construct()
    {

    }

    /**
     *
     */
    public function read()
    {

        $files = (object)\File::allFiles(public_path() . $this->images_dir);

        $list_images = [];

        $index = 0;
        foreach ($files as $path) {
            $file = (object)pathinfo($path);

            $list_images[] =
                [
                    'id' => $index++,
                    'path' => asset($this->trimPath($file->dirname) . '/' . $file->basename ?? ''),
                    'url' => $file->basename ?? '',
                    'ext' => $file->extension ?? '',
                    'name' => $file->filename ?? '',
                    'dirname' => $this->trimPath($file->dirname)
                ];
        }

        return $list_images;
    }


    /**
     *
     */
    private function trimPath($file_path = false)
    {

        try {
            if (request()->getHost() != 'localhost') {
                return explode('/public_html/public', $file_path)[1];
            }
            return explode('/public', $file_path)[1];
        } catch (Exception $e) {
            return '';
        }
    }

    /**
     *
     */
    public function create($request)
    {

    }

    public function delete($id)
    {

    }

    public function convertBase64ToImage($data, $output_file, $base64_string)
    {
        $file = fopen($output_file, "wb");

        $data = explode(',', $base64_string);

        fwrite($file, base64_decode($data[1]));
        fclose($file);

        return $output_file;
    }
}
