<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CheckUserRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        Log::info('Middleware CheckUserRole called with role: ' . $role);

        // Kiểm tra token và vai trò
        $token = $request->user()->currentAccessToken();
        if (!$token || $token->role !== $role) {
            Log::warning('Unauthorized access attempt.');
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}
