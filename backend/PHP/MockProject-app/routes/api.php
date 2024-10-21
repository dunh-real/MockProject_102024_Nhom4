<?php

use App\Http\Controllers\StaffController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'v1/staffs', 'as' => 'v1/staffs.'], function () {
    Route::get('', [StaffController::class, 'index']);
    Route::get('/{staff}', [StaffController::class, 'show']);
    Route::post('', [StaffController::class, 'store']);
    Route::put('/{staff}', [StaffController::class, 'update']);
    Route::delete('/{staff}', [StaffController::class, 'destroy']);
    Route::patch('/{staff}', [StaffController::class, 'restore']);
});