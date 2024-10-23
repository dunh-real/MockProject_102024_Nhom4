<?php

use App\Http\Controllers\Api\FineController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\ResidentComplaintController;
use App\Models\Resident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

// Login API
Route::middleware(['auth:sanctum'])->group(function () {
  Route::post('/login', [AuthController::class, 'login'])->name('login');
});


Route::group(['namespace' => 'api'], function () {
  // Complaint API
  Route::get('/resident-complaints', [ResidentComplaintController::class, 'getComplaints']);
  Route::get('/resident-complaint/{id}', [ResidentComplaintController::class, 'getResidentComplaint']);
  Route::post('/create-resident-complaint', [ResidentComplaintController::class, 'createComplaint']);
  Route::delete('/delete-resident-complaint/{id}', [ResidentComplaintController::class, 'destroy']);

  // Fine API
  Route::get('/fines', [FineController::class, 'getFines']);
  Route::get('/resident-fines/{id}', [FineController::class, 'getResidentFines']);
  Route::post('/pay-fine/{fineId}', [FineController::class, 'payFine']);
});