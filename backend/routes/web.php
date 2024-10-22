<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComplaintController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
});


Route::get('/login', function () {
  return view('auth.login');
});


// Complaint Controller
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/complaints', [ComplaintController::class, 'index']);
Route::post('/complaints', [ComplaintController::class, 'store']);
Route::delete('/complaints/{id}', [ComplaintController::class, 'destroy'])->name('complaints.destroy');