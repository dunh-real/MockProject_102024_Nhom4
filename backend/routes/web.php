<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
});


Route::get('/login', function () {
  return view('auth.login');
});

Route::post('/login', [AuthController::class, 'login'])->name('login');