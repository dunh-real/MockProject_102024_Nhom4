<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test-db', function () {
    try {
        DB::connection()->getPdo();
        return 'Kết nối thành công tới cơ sở dữ liệu: ' . DB::connection()->getDatabaseName();
    } catch (\Exception $e) {
        return 'Kết nối cơ sở dữ liệu không thành công: ' . $e->getMessage();
    }
});