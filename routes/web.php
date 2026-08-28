<?php

    /** ------------------------------------------------------------------------------------
     *  WEB : Routes
     * ------------------------------------------------------------------------------------- */
    Route::group(['middleware' => 'web'], function ()
    {
    //    Route::get('/', function () {
    //        return view('master');
    //    });
    
        Route::get('/404', function () {
            return 'Page Not found';
        });
    });


    /**
     * Defined route for CMS
     */
    Route::get('/{any}', function () {
        return view('welcome');
    })->where('any', '.*');

  
