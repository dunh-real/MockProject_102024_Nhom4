<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        if($username == "admin" && $password == "123456")
        {
            return response()->json([
                "status"=> "success",
                "message"=> "Login successfully!"
            ], Response::HTTP_OK);
        }
        else
        {
            return response()->json([
                "status"=> "error",
                'message' => 'Username or password is not true'
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
