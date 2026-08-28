<?php

use Customer\App\Models\Blogs\Category;
use Customer\App\Services\Blogs\BlogsService;

function _cookie($key, $value = null)
{

    if ($value) {
        setcookie($key, $value, time() + (12 * 60 * 24 * 3600));
        return null;
    }

    if (array_key_exists($key, $_COOKIE)) {
        return $_COOKIE[$key];
    }
    return null;
}

/**
 * @param $key
 *
 * If there are no cart in session, check cookies and update session
 */
function check_cart($key){

    try {
        /**
         * Update session data from cookies if there is value in it
         */
        if (!session()->get($key)) {
            if ($cart = _cookie($key)) {
                session()->put($key, json_decode($cart));
            }
        }

        /**
         * Store data in session if found
         */
        _cookie($key, json_encode(session()->get($key)));

    }catch(\Exception $e){
        // return info
    }
}

function headline($string = 'JR Farms Africa'){

    $prefix = preg_replace('/\W\w+\s*(\W*)$/', '$1', $string);

    $last_word_start = strrpos($string, ' ') + 1; // +1 so we don't include the space in our result
    $last_word = substr($string, $last_word_start);
    return "{$prefix} <span class='main-color'> {$last_word}</span>";
}

function elements($data = null){

    try
    {
        if(! $data ){ return null; }

    } catch (\Exception $e){

    }
}

function groups( $data ){

    try
    {
        if(! $data ){ return null; }

        $groups = _value($data, "groups");

        $group_holder = [];

        foreach ($groups as $group){

            if( $g_key = _value($group, "group_name")){

                $group_holder[$g_key] = _value($group, "elements");
            }
        }

        return $group_holder;

    } catch (\Exception $e){

        \Log::info("Error Occurred in blocks" . $e->getMessage());
        return null;
    }
}

function pagedata($data = null, $returnObject = false, $index = -1)
{
    try {
        if (is_array($data)) {
            $data = (object) $data;
        }
        if ($index > -1) {
            return $data->groups[$index];
        }

        $groups = (object) $data->groups;

        $blocks_data = [];

        foreach ($groups as $group) {
            $blockName = isset($group['name']) ? $group['name'] : null;
            $elements = $group['element'];

            if ($blockName) {
                if (!isset($blocks_data[$blockName])) {
                    $blocks_data[$blockName] = [];
                }

                $elementArray = [];

                foreach ($elements as $element) {
                    $elementName = $element['name'];
                    $value = $element['value'];

                    $elementArray[$elementName] = (object)$element; // Create an object from the element
                }

                $blocks_data[$blockName][] = (object) $elementArray;
                
            }
        }

        if ($returnObject) {
            return (object) $blocks_data;
        }
        return $blocks_data;
    } catch (\Exception $e) {
        \Log::info("Error Occurred in pagedata " . $e->getMessage());
        return null;
    }
}




function sort_keys(array $data){

    $holder = [];
    foreach ($data as $v){

        foreach ($v as $k){
            $holder[$k["name"]] = $k;
        }
    }
    return $holder;
}

function menu(){

    $filter = ["header_position"=>1,'status'=>1];
    return _sort($filter);
}

function footer_menu(){

    return _sort(["footer_position"=>1,'status'=>1]);
}

function category(){

    // return (new \Cms\App\Services\Blogs\BlogsService())->category()->fetch([], "blogs");
    // return (new BlogsService())->category()->all();
    return Category::all();
}

function _blogs(){

    return (new BlogsService())->fetch([]);
}
/**
 * Resolve a CMS image reference to a usable URL.
 *
 * The CMS stores images as absolute URLs, which breaks as soon as the site is
 * served from a different host (local / staging / live), so the host is always
 * stripped. If the file is missing — an unpublished slot, or a record left over
 * from a previous site — the supplied theme asset is used instead, so a section
 * never renders a broken image.
 *
 * @param  string|null $source   value straight out of the CMS
 * @param  string|null $fallback theme asset path, relative to public/
 * @return string                empty when there is nothing to show
 */
function cms_image($source = null, $fallback = null)
{
    $path = preg_replace('#^https?://[^/]+#', '', (string) $source);

    if ($path !== '' && file_exists(public_path($path))) {
        return asset(ltrim($path, '/'));
    }

    return $fallback ? asset($fallback) : '';
}
