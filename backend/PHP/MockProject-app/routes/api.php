<?php

use App\Http\Controllers\Admin\EmployeeContractController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Staff\LeaseContractController;
use App\Http\Controllers\CandidateCVController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\CandidateController;
use Illuminate\Support\Facades\Log;

// Route để lấy thông tin người dùng hiện tại, sử dụng Sanctum
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route đăng nhập
Route::post('/login', [AuthController::class, 'login']);

// Nhóm route yêu cầu xác thực với Sanctum
Route::middleware('auth:sanctum')->group(function () {
    // Đăng xuất và lấy thông tin người dùng
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']); 

    // Nhóm route dành cho staff
    Route::prefix('staff')->group(function () {
        Route::get('lease-contracts/search', [LeaseContractController::class, 'search']);
        Route::resource('lease-contracts', LeaseContractController::class);
    });

    // Route cho admin
    Route::prefix('admin')->group(function () {
        Route::resource('employee-contracts', EmployeeContractController::class);
    });
});

// Nhóm route cho CV Controller
Route::prefix('cvs')->group(function () {
    Route::get('/', [CandidateCVController::class, 'getListCVs']); // Get CV list
    Route::get('/status/{status}', [CandidateCVController::class, 'getListCvByStatus']); // Get CV by status
    Route::get('/{id}', [CandidateCVController::class, 'getCvDetail']); // Get CV details
    Route::delete('/{id}', [CandidateCVController::class, 'deleteCvById']); // Delete CV
    Route::patch('/{id}/restore', [CandidateCVController::class, 'restoreCvById']); // Restore CV
    Route::put('/update/{id}', [CandidateCVController::class, 'updateStatusCV']); // Update status CV
});

// Nhóm route cho Complaint Controller
Route::prefix('complaints')->group(function () {
    Route::get('/', [ComplaintController::class, 'getListComplaintRequest']); // Get list of complaints
    Route::get('/{id}', [ComplaintController::class, 'getDetailComplaintRequest']); // Get complaint details
    Route::put('/update/{id}', [ComplaintController::class, 'updateComplaintRequest']); // Update complaint
    Route::post('/create', [ComplaintController::class, 'createComplaintRequest']); // Create new complaint
    Route::delete('/{id}', [ComplaintController::class, 'deleteComplaintRequest']); // Delete complaint
    Route::patch('/{id}/restore', [ComplaintController::class, 'restoreComplaintRequest']); // Restore complaint
});

// Nhóm route cho Candidate Controller
Route::prefix('candidates')->group(function () {
    Route::post('/create', [CandidateController::class, 'addCandidatesToEmployee']); // Add candidate to employee list
});
