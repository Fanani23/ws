<?php

use App\Http\Controllers\{CategoryController, CustomerController, EmployeeController, JobController, PresenceController, ProductController, TransactionController, UserController};
use App\Http\Controllers\Auth\{LoginController, LogoutController, MeController, RegisterController, LoginActivityController};
use App\Http\Controllers\Order\CartController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('register', RegisterController::class);
    Route::post('login', LoginController::class);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('me', MeController::class);
    Route::post('auth/logout', LogoutController::class);

    Route::prefix('admin')->group(function () {
        Route::get('', [UserController::class, 'index']);
        Route::post('/create', [UserController::class, 'create']);
        Route::put('/update/{user:id}', [UserController::class, 'update']);
        Route::delete('/delete/{user:id}', [UserController::class, 'destroy']);

        Route::get('login-activities', LoginActivityController::class);
    });

    Route::prefix('products')->group(function () {
        Route::prefix('categories')->group(function () {
            Route::get('', [CategoryController::class, 'index']);
            Route::post('/create', [CategoryController::class, 'create']);
            Route::put('/update/{category:id}', [CategoryController::class, 'update']);
            Route::delete('/delete/{category:id}', [CategoryController::class, 'destroy']);
            Route::get('{category:id}', [CategoryController::class, 'show']);
        });

        Route::get('', [ProductController::class, 'index']);
        Route::post('/create', [ProductController::class, 'create']);
        Route::put('/update/{product:id}', [ProductController::class, 'update']);
        Route::delete('/delete/{product:id}', [ProductController::class, 'destroy']);
        Route::get('{product:id}', [ProductController::class, 'show']);
    });

    Route::prefix('customers')->group(function () {
        Route::get('', [CustomerController::class, 'index']);
        Route::post('/create', [CustomerController::class, 'create']);
        Route::put('/update/{customer:id}', [CustomerController::class, 'update']);
        Route::delete('/delete/{customer:id}', [CustomerController::class, 'destroy']);
        Route::get('{customer:id}', [CustomerController::class, 'show']);
    });

    Route::prefix('employees')->group(function () {
        Route::prefix('jobs')->group(function () {
            Route::get('', [JobController::class, 'index']);
            Route::post('/create', [JobController::class, 'create']);
            Route::put('/update/{job:id}', [JobController::class, 'update']);
            Route::delete('/delete/{job:id}', [JobController::class, 'destroy']);
            Route::get('{job:id}', [JobController::class, 'show']);
        });

        Route::get('', [EmployeeController::class, 'index']);
        Route::post('/create', [EmployeeController::class, 'create']);
        Route::put('/update/{employee:id}', [EmployeeController::class, 'update']);
        Route::delete('/delete/{employee:id}', [EmployeeController::class, 'destroy']);
        Route::get('{employee:id}', [EmployeeController::class, 'show']);
    });

    Route::prefix('presences')->group(function () {
        Route::get('', [PresenceController::class, 'index']);
        Route::post('create', [PresenceController::class, 'presence']);
        Route::get('{employee:id}', [PresenceController::class, 'show']);
    });

    Route::prefix('cashier')->group(function () {
        Route::post('create', [CartController::class, 'create']);
        Route::get('show', [CartController::class, 'showCartCashier']);
        Route::delete('delete/{cart:id}', [CartController::class, 'destroy']);
        Route::post('confirm/{cart:id}', [CartController::class, 'confirm']);
    });

    Route::prefix('order')->group(function () {
        Route::get('customer/{id}', [TransactionController::class, 'orderHistoryCustomer']);
        Route::get('show/{transaction:id}', [TransactionController::class, 'show']);
    });
});
