<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrainingScheduleController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TrainingProgramController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('admin')->group(function () {
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('trainingschedule', TrainingScheduleController::class);
    Route::get('trainingschedule/search', [TrainingScheduleController::class, 'search']);
});

Route::prefix('employee')->group(function () {
    Route::get('trainingprogram/classes', [TrainingProgramController::class, 'showAllClasses']); // Lấy tất cả các khóa học
    Route::post('trainingprogram/register', [TrainingProgramController::class, 'register']); // Đăng ký khóa học
    Route::post('trainingprogram/unregister', [TrainingProgramController::class, 'unregister']); // Hủy đăng ký khóa học
});
