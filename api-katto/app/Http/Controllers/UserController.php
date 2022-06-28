<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;

class UserController extends Controller
{
    public function index(User $user)
    {
        $user = $user->newQuery();

        if (request()->has('name')) {
            $user->where('username','like',"%".request()->name."%");
        }

        return UserResource::collection($user->orderBy('username')->paginate(9));
    }

    public function create(UserRequest $request)
    {
        User::create([
            'username' => $request->username,
            'phone' => $request->phone,
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function show()
    {
        //
    }

    public function update(UserRequest $request, User $user)
    {
        $user->update([
            'username' => $request->username,
            'phone' => $request->phone,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
