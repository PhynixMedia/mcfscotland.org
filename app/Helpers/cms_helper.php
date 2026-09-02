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

/**
 * Supported image extensions, lower case.
 */
function image_extensions()
{
    return ['jpg', 'jpeg', 'png', 'webp'];
}

/**
 * Resolve an image by path stem, whatever extension it was saved with.
 *
 * Photos arrive from phones, cameras and WhatsApp as .jpg, .jpeg, .png or
 * .webp in any casing, and renaming them by hand is exactly the busywork this
 * avoids. Pass the path without an extension and the first match wins.
 *
 * Deliberately reads the directory rather than glob()-ing for each extension:
 * macOS is case-insensitive, so a glob pattern of '.JPEG' happily matches a
 * file stored as '.jpeg' and hands back the pattern's casing. That URL works
 * locally and 404s on a case-sensitive Linux server. Returning the real
 * on-disk name is the only thing that is correct on both.
 *
 * @param  string      $stem     path under public/, no extension
 *                               e.g. 'assets/img/lineup/mike-abdul'
 * @param  string|null $fallback full relative path used when nothing matches
 * @return string                empty when there is nothing to show
 */
function image_by_stem($stem, $fallback = null)
{
    $stem = trim($stem, '/');
    $dir  = dirname($stem);
    $base = basename($stem);
    $full = public_path($dir);

    if (is_dir($full)) {
        foreach (scandir($full) as $file) {
            $info = pathinfo($file);

            if (isset($info['extension'])
                && strcasecmp($info['filename'], $base) === 0
                && in_array(strtolower($info['extension']), image_extensions(), true)) {

                return asset($dir . '/' . $file);
            }
        }
    }

    return $fallback ? asset($fallback) : '';
}

/**
 * List every image sitting in a folder under public/, sorted naturally.
 *
 * Used by the gallery so photos can simply be dropped into a directory with no
 * markup, categories or filters to maintain. Reads the directory for the same
 * case-sensitivity reason as image_by_stem().
 *
 * @param  string $dir path under public/, e.g. 'assets/img/gallery'
 * @return array       relative paths, ready for asset()
 */
function images_in($dir)
{
    $dir  = trim($dir, '/');
    $full = public_path($dir);

    if (! is_dir($full)) {
        return [];
    }

    $files = [];
    foreach (scandir($full) as $file) {
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        if ($ext !== '' && in_array(strtolower($ext), image_extensions(), true)) {
            $files[] = $file;
        }
    }

    natcasesort($files);

    return array_map(function ($file) use ($dir) {
        return $dir . '/' . $file;
    }, array_values($files));
}

/**
 * Turn an image filename into a human caption, or nothing if it is a camera dump.
 *
 * 'edinburgh-2019.jpg' becomes 'Edinburgh 2019'; 'IMG_20240612.jpg' gets no
 * caption rather than an ugly one.
 */
function caption_from_filename($file)
{
    $name = pathinfo($file, PATHINFO_FILENAME);

    if (preg_match('/^(img|dsc|dscf|photo|image|screenshot|pxl|whatsapp)[\W_]*\d/i', $name) || preg_match('/^[\d\W_]+$/', $name)) {
        return '';
    }

    return ucwords(trim(preg_replace('/[\s\-_]+/', ' ', $name)));
}

