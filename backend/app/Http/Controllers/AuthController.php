<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
  public function login(Request $request)
  {

    $request->validate([
      'email' => 'required|email',
      'password' => 'required|min:6',
    ]);

    if (Auth::attempt(['email' => "nhatpro204@gmail.com", 'password' => "111111"])) {
      dd("hello");
    }

    return back()->withErrors([
      'email' => 'The provided credentials do not match our records.',
    ]);
  }


  public function logout()
  {
    Session::forget('user');
    return response()->json(['message' => 'You have been logged out successfully.'], 200);
  }
}
