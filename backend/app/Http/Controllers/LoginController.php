<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        if($username == "admin" && $password == "123456")
        {
            return response()->json($request);
        }
        else
        {
            return response()->json([
                'msg' => 'Username or password is not true'
            ]);
        }
    }
}
