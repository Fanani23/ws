<?php

use Illuminate\Support\Facades\Route;

Route::get('/storage', function () {
    Artisan::call('storage:link');
    return "ok";
});

Route::get('/cache', function () {
    Artisan::call('cache:clear');
    return "ok";
});

Route::get('/key', function () {
    Artisan::call('key:generate');
    return "ok";
});
