<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class CheckRole
{
    public function handle($request, Closure $next, $role)
    {
        try {
            if (!$request->user()) {
                Log::error('Unauthorized access - no user found.');
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $userRole = $request->user()->role->name ?? null;

            if (!$userRole) {
                Log::error('User does not have a role assigned.');
                return response()->json(['message' => 'Forbidden - No role assigned'], 403);
            }

            if (strtolower($userRole) !== strtolower($role)) {
                Log::error('Role mismatch: required role is ' . $role . ', but user role is ' . $userRole);
                return response()->json(['message' => 'Forbidden - Insufficient permissions'], 403);
            }

            return $next($request);
        } catch (\Exception $e) {
            Log::error('Error in CheckRole middleware: ' . $e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
