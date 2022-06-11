<?php

namespace App\Http\Controllers;

use App\Http\Resources\User\UserResource;
use App\Models\User;

class UserController extends Controller
{
    public function index(User $user)
    {
        $user = $user->newQuery();

        if (request()->has('name')) {
            $user->where('name','like',"%".request()->name."%");
        }

        return UserResource::collection($user->orderBy('name')->paginate(6));
    }

    public function create()
    {
        User::create([
            'name' => request()->name,
            'email' => request()->email,
            'password' => bcrypt(request()->password)
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function show()
    {
        //
    }

    public function update(User $user)
    {
        $user->update([
            'name' => request()->name,
            'email' => request()->email,
            'password' => bcrypt(request()->password)
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
