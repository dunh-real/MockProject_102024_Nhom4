<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        Log::info('Middleware CheckUserRole called with role: ' . $role);
        // Lấy token hiện tại của người dùng
        $token = $request->user()->currentAccessToken();

        // Kiểm tra nếu vai trò không khớp
        if (!$token || $token->role !== $role) {
            Log::warning('Unauthorized access attempt.');
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}