<?php

namespace Auth\App\Controllers;

use Illuminate\Http\Request;
use Auth\App\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Auth\App\Controllers\BaseController;
use Auth\App\Requests\RegistrationRequest;

class AuthenticationController extends BaseController {

    public function __construct(){

        parent::__construct();
    }

    public function register(RegistrationRequest $request)
    {
        $data = $request->validated();
        $user = $this->authService->register($data);

       return response()->json(['data' => $user, 'message' => 'Registration successful'], 201);
    }

    // public function login(LoginRequest $request)
    // {
    //     $credentials = $request->validated();
    //     if ($loginResult = $this->authService->login($credentials)) {
    //         return response()->json($this->statusService::success("Login", $loginResult));
    //     } else{
    //         return response()->json($this->statusService::error("Invalid credentials"));
    //     }

    // }

    public function login(LoginRequest $request)
    {
        // Validate the login credentials
        $credentials = $request->validated();

        // Attempt to authenticate user
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ], 401);
        }

        // Get authenticated user
        $user = Auth::user();

        // Generate JWT token
        $token = JWTAuth::fromUser($user);

        // Return success response with user and token
        return response()->json([
            'status' => 'success',
            'message' => 'Login request successfully completed',
            'data' => [
                'user' => $user,
                'access_token' => $token
            ]
        ], 200);
    }

     // Method to return the token structure
     protected function respondWithToken($token, $data)
     {
         return response()->json([
             'access_token' => $token,
             'token_type' => 'bearer',
             'data' => $data,
             'expires_in' => auth('api')->factory()->getTTL() * 60
         ]);
     }

    public function logout()
    {
        JWTAuth::invalidate();
        Auth::guard('api')->logout();
        return response()->json($this->statusService::success("Logged out"));
    }
}
