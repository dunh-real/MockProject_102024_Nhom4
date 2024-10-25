<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateCVController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\WorkScheduleController;
use App\Http\Controllers\TimeKeepingController;
use App\Models\Candidate;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




// CV controller routes
Route::get('/cvs', [CandidateCVController::class, 'getListCVs']); // Get CV list
Route::get('/cvs/status/{status}', [CandidateCVController::class, 'getListCvByStatus']); // Get CV by status
Route::get('/cvs/{id}', [CandidateCVController::class, 'getCvDetail']); // Get CV details
Route::delete('/cvs/{id}', [CandidateCVController::class, 'deleteCvById']); // Delete CV
Route::patch('/cvs/{id}/restore', [CandidateCVController::class, 'restoreCvById']); // Restore CV
Route::put('/cvs/update/{id}', [CandidateCVController::class, 'updateStatusCV']); // Update status CV

// Complaint controller routes
Route::get('/complaints', [ComplaintController::class, 'getListComplaintRequest']); // 
Route::get('/complaints/{id}', [ComplaintController::class, 'getDetailComplaintRequest']); // Get the list of complaint requirements
Route::put('/complaints/update/{id}', [ComplaintController::class, 'updateComplaintRequest']); // update complaint requirements
Route::post('/complaints/create', [ComplaintController::class, 'createComplaintRequest']); // Create new complaint requirements
Route::delete('/complaints/{id}', [ComplaintController::class, 'deleteComplaintRequest']); // Delete complaint requirements
Route::patch('/complaints/{id}/restore', [ComplaintController::class, 'restoreComplaintRequest']); // Restore complaint requirements

// Candidate controller routes
Route::post('/candidates/create', [CandidateController::class, 'addCandidatesToEmployee']); // Add candidate to employee list

// Work schedule controller routes
Route::get('/monthly/{employeeId}/{month}', [WorkScheduleController::class, 'getMonthlySchedule']);
Route::get('/details/{employeeId}/{date}', [WorkScheduleController::class, 'getScheduleDetails']);
Route::post('/notify', [WorkScheduleController::class, 'notifyScheduleChange']);

// Timekeeping controller routes
Route::get('/timekeeping', [TimeKeepingController::class, 'index']);
Route::post('/timekepping', [TimeKeepingController::class, 'store']);
Route::put('/checkout/{id}', [TimeKeepingController::class, 'updateCheckOut']);
Route::get('/hours/{id}', [TimeKeepingController::class, 'calculateTotalHours']);