<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Set cứng giá trị username và password
        $validUsername = 'admin';
        $validPassword = '123456';

        // Lấy dữ liệu từ body của request
        $username = $request->input('username');
        $password = $request->input('password');

        if (!$username || !$password) {
            return response()->json(['status' => 'error', 'message' => 'Vui lòng nhập username và password'], 400);
        }

        // Kiểm tra username và password
        if ($username === $validUsername && $password === $validPassword) {
            return response()->json(['status' => 'success', 'message' => 'Đăng nhập thành công']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Username hoặc password không chính xác'], 401);
        }
    }
}
