<?php

use App\Http\Controllers\Api\FineController;
use App\Http\Controllers\Api\ResidentComplaintController;
use Illuminate\Support\Facades\Route;

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