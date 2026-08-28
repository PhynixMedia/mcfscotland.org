<?php

namespace Auth\App\Services;

use Auth\App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{
    public function register(array $data){
        $data['password'] = bcrypt($data['password']);
        return User::create($data);
    }

    public function login(array $credentials){
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);

            return ['user' => $user, 'access_token' => $token];
        }

        return 'error logging in';
    }
}
