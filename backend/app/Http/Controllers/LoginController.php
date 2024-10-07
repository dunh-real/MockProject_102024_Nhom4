<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function checkLogin(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $email = $request->input('username');
        $password = $request->input('password');

        if ($email=='admin' & $password=='123456')
            return response()->json([
                'status' => 'success',
                'message' => 'login successfully!'
                ], Response::HTTP_OK);
        else
            return response()->json([
                'status' => 'error',
                'message' => 'wrong username or password!',
            ], Response::HTTP_UNAUTHORIZED);
    }
}
