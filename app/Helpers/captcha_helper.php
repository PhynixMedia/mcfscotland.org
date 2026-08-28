<?php

/**
    * Captcha for Form Control -------------------------------------------------------- */

    function captcha($value = false)
    {

        $key = "xx_captcha_key";

        // if there is value added to key, then add to session
        if($value){

            session()->put($key, $value);
            session()->save();
            return false;
        }

        // if session found return true
        if($captcha = session()->get($key))
        {
            session()->forget($key);
            session()->save();
            return $captcha;
        }

        return false;
    }

   function captcha_is_valid($captcha = false){

       if(!$captcha){
           return false;
       }

       if($captcha == captcha()){
           return true;
       }
       return false;
   }

   function get_captcha(){
       $key = "xx_captcha_key";
       session()->put($key, captcha_code());
       return session()->get("xx_captcha_key");
   }

   function captcha_code($digits = 7){

       $random_hash = bin2hex(random_bytes($digits));
       return substr($random_hash, 0, $digits);
   }