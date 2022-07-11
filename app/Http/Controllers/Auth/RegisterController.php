<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $attributes = $request->validate([
            'username' => 'required|string|min:4|unique:users',
            'phone' => 'required|string|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        $attributes['password'] = bcrypt($request->password);
        User::create($attributes);

        return response()->json([
            'message' => 'You are registered, please login'
        ]);
    }
}
