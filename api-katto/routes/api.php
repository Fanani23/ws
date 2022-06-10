<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PresenceController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('products')->group(function () {
    Route::get('', [ProductController::class, 'index']);
    Route::get('{product:code}', [ProductController::class, 'show']);
    Route::post('/create', [ProductController::class, 'create']);
    Route::put('/update/{product:code}', [ProductController::class, 'update']);
    Route::delete('/delete/{product:code}', [ProductController::class, 'destroy']);
});

Route::prefix('categories')->group(function () {
    Route::get('', [CategoryController::class, 'index']);
    Route::get('{category:code}', [CategoryController::class, 'show']);
    Route::post('/create', [CategoryController::class, 'create']);
    Route::put('/update/{category:code}', [CategoryController::class, 'update']);
    Route::delete('/delete/{category:code}', [CategoryController::class, 'destroy']);
});

Route::prefix('customers')->group(function () {
    Route::get('', [CustomerController::class, 'index']);
    Route::get('{customer:code}', [CustomerController::class, 'show']);
    Route::post('/create', [CustomerController::class, 'create']);
    Route::put('/update/{customer:code}', [CustomerController::class, 'update']);
    Route::delete('/delete/{customer:code}', [CustomerController::class, 'destroy']);
});

Route::prefix('employees')->group(function () {
    Route::get('', [EmployeeController::class, 'index']);
    Route::get('{employee:id}', [EmployeeController::class, 'show']);
    Route::post('/create', [EmployeeController::class, 'create']);
    Route::put('/update/{employee:id}', [EmployeeController::class, 'update']);
    Route::delete('/delete/{employee:id}', [EmployeeController::class, 'destroy']);
});

Route::prefix('presences')->group(function () {
    Route::get('', [PresenceController::class, 'index']);
    Route::get('{employee:code}', [PresenceController::class, 'show']);
    Route::post('create', [PresenceController::class, 'presence']);
});