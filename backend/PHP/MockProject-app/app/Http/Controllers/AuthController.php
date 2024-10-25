<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    /**
     * Đăng nhập người dùng và trả về access token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try {
            // Ghi log request
            Log::info('Request received: ', $request->all());
            // Validate dữ liệu
            $validated = $request->validate([
                'email' => 'required|email',
                'password' => 'required|min:6',
            ]);
            Log::info('Validated data: ', $validated);
            // Tìm người dùng theo email
            // Tất cả các model được kiểm tra
            $models = [
                ['model' => \App\Models\Admin::class, 'role' => 'Admin'],
                ['model' => \App\Models\Employee::class, 'role' => 'Employee'],
                ['model' => \App\Models\Resident::class, 'role' => 'Resident'],
                ['model' => \App\Models\Landlord::class, 'role' => 'Landlord'],
            ];

            $user = null;
            $role = null;

            // Duyệt qua từng model để tìm người dùng
            foreach ($models as $modelInfo) {
                $model = $modelInfo['model'];
                $user = $model::where('email', $validated['email'])->first();
                
                if ($user) {
                    $role = $modelInfo['role'];
                    break; // Dừng vòng lặp nếu tìm thấy người dùng
                }
            }

        // Kiểm tra nếu người dùng không tồn tại trong bất kỳ bảng nào
        if (!$user) {
            return response()->json(['message' => 'Invalid credentials - user not found'], 401);
        }
            // Kiểm tra mật khẩu nếu đã mã hóa bằng bcrypt
            if (!Hash::check($validated['password'], $user->password)) {
                return response()->json(['message' => 'Invalid credentials - incorrect password'], 401);
            }
            Log::info('Password validated');

            // Tạo token truy cập cho người dùng (Sử dụng Laravel Sanctum hoặc Passport)
            $token = $user->createToken('access_token')->plainTextToken;
            Log::info('Token created');
            // Lấy lại role của người dùng sau khi đăng nhập để đảm bảo thông tin mới nhất
            $role = optional($user->role)->name;
            Log::info('User Role after login: ' . $role);
            
            // Trả về thông tin người dùng cùng token
            return response()->json([
                'message' => 'Login successful',
                'access_token' => $token,
                'token_type' => 'Bearer',
                'role' => $role,
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email,
                ]
            ], 200);

        } catch (\Exception $e) {
            // Bắt mọi ngoại lệ và trả về thông báo lỗi
            return response()->json([
                'message' => 'An error occurred during login',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Đăng xuất người dùng và xóa access token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        try {
            // Xóa tất cả token của người dùng
            $request->user()->tokens()->delete();
    
            return response()->json(['message' => 'Logged out successfully'], 200);
        } catch (\Exception $e) {
            // Bắt mọi ngoại lệ và trả về thông báo lỗi
            return response()->json([
                'message' => 'An error occurred during logout',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Lấy thông tin người dùng hiện tại
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function me(Request $request)
    {
        return response()->json($request->user());
    }
}
