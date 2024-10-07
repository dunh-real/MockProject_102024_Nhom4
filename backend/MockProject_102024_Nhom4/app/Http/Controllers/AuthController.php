<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    // Hàm xử lý đăng nhập
    public function login(Request $request)
    {
        // Xác thực dữ liệu đầu vào
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Lấy thông tin đăng nhập từ request
        $credentials = $request->only('email', 'password');

        // Kiểm tra thông tin đăng nhập
        if ($credentials['email'] === 'hanhdo.van2001@gmail.com' && $credentials['password'] === 'Password') {
            // Lưu thông tin đăng nhập vào session nếu thành công
            Session::put('user', $credentials['email']);
            return response()->json(['message' => 'Login successful!'], 200); // Thông báo đăng nhập thành công
        }

        // Nếu đăng nhập không thành công, trả về thông báo lỗi
        return response()->json(['message' => 'Invalid credentials'], 401); // Thông báo đăng nhập thất bại
    }

    // Hàm đăng xuất
    public function logout()
    {
        Session::forget('user'); // Xóa thông tin người dùng khỏi session
        return response()->json(['message' => 'You have been logged out successfully.'], 200); // Phản hồi cho đăng xuất thành công
    }
}
