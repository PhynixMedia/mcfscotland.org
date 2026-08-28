<?php

    /** ------------------------------------------------------------------------------------
     *  WEB : Routes
     * ------------------------------------------------------------------------------------- */


     Route::group(['middleware' => 'web'], function ()
     {

        Route::get('/blogs/{identifier}/{date}/{title}', 'App\Http\Controllers\IndexController@get');
        Route::post('/submit/contact', 'App\Http\Controllers\IndexController@contactStore')->name('submit.contact');
        Route::post('/submit/training', 'App\Http\Controllers\IndexController@trainingStore')->name('submit.training');

        Route::get('/blogs/careers', 'App\Http\Controllers\IndexController@careers');

        // blog category
        Route::get('/blogs/category/{identifier}/{name}', 'App\Http\Controllers\IndexController@all')->name('blog.category');

        /***      GENERAL WEB ROUTES                                      */
        /***      GENERAL WEB ROUTES                                      */
        Route::get('/', 'Customer\App\Controllers\Web\IndexController@index');
        Route::get('/{page}', 'Customer\App\Controllers\Web\IndexController@index')->where('page', '^(?!store|category|cart|checkout|account|blogs|cms|api).*$');
        Route::get('/{page}/{sub?}', 'Customer\App\Controllers\Web\IndexController@index')->where('page', '^(?!store|category|cart|checkout|account|blogs|cms|api).*$');
        Route::get('/{page}/{sub?}/{extra?}', 'Customer\App\Controllers\Web\IndexController@index')->where('page', '^(?!store|category|cart|checkout|account|blogs|cms|api).*$');
     
     });