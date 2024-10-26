<?php

use App\Http\Controllers\DayOffController;
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

Route::group(['prefix'=>'v1/dayoffs','as'=>'v1/dayoffs.'], function() {
    Route::get('/', [DayOffController::class, 'index']);
    Route::get('/{dayOff}', [DayOffController::class, 'show']);
    Route::get('/employee/{employeeID}', [DayOffController::class, 'showMyRequests']);
    Route::post('', [DayOffController::class, 'store']);
    Route::put('/{dayOff}', [DayOffController::class, 'update']);
    Route::delete('/{dayOff}', [DayOffController::class, 'destroy']);
    Route::patch('/{dayOff}', [DayOffController::class, 'restore']);
    Route::patch('/{dayOff}/approve', [DayOffController::class, 'approve']);
});