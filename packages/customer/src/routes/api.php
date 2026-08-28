<?php

Route::group(['prefix' => 'api'], function ($router) {

    /**
     * CMS Web Content and BLog Route
     */
    Route::group(['prefix' => 'cms', 'middleware' => 'jwt.auth'], function () {

        Route::group(['prefix' => 'pages'], function () {

            Route::group(['prefix' => 'images'], function () {
                Route::get('/list', 'Customer\App\Controllers\Pages\ImagesController@all');
            });

            Route::post('/create/{target}', 'Customer\App\Controllers\Pages\TemplateController@create');
            Route::post('/update/{target}', 'Customer\App\Controllers\Pages\TemplateController@update');
            Route::get('/fetch/{target}', 'Customer\App\Controllers\Pages\TemplateController@fetch');
            Route::post('/search/{target}', 'Customer\App\Controllers\Pages\TemplateController@find');
            Route::get('/delete/{target}/{identifier}', 'Customer\App\Controllers\Pages\TemplateController@delete');
            Route::post('/delete/{target}', 'Customer\App\Controllers\Pages\TemplateController@postDelete');
            Route::get('/get/{target}/{identifier}', 'Customer\App\Controllers\Pages\TemplateController@get');

            //Dynamic Seo Tags
            Route::post('/tags/create', 'Customer\App\Controllers\Pages\StatisticController@storeTags');
        });

        Route::group(['prefix' => 'blogs'], function () {

            Route::post('/create', 'Customer\App\Controllers\Pages\BlogsController@store');
            Route::post('/update', 'Customer\App\Controllers\Pages\BlogsController@update');
            Route::get('/fetch', 'Customer\App\Controllers\Pages\BlogsController@all');
            Route::get('/get/{identifier}', 'Customer\App\Controllers\Pages\BlogsController@get');
            Route::get('/delete/{identifier}', 'Customer\App\Controllers\Pages\BlogsController@delete');
        });

        Route::group(['prefix' => 'statistics'], function () {
            Route::get('/page-visits', 'Customer\App\Controllers\Pages\StatisticController@PageVisitsStats');
        });

        Route::group(['prefix' => 'emails'], function () {
            Route::post('/send-mail', 'Customer\App\Controllers\Pages\EmailController@sendEmail');
        });

    });
});
