<?php

Route::group(['prefix' => 'api'], function ($router) {
    /**
     * Authentication Routes
     */
    Route::group(['prefix' => 'auth'], function () {
        Route::post('register', 'Auth\App\Controllers\AuthenticationController@register');
        Route::post('login', 'Auth\App\Controllers\AuthenticationController@login');
        Route::post('logout', 'Auth\App\Controllers\AuthenticationController@logout')->middleware('auth:api');
    });

});
