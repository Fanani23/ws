<?php

namespace App\Http\Controllers;

use App\Http\Resources\PresenceResource;
use App\Models\Employee;
use App\Models\Presence;
use Illuminate\Http\Request;

class PresenceController extends Controller
{
    public function index()
    {
        $presences = Presence::with('employee')->whereDate('datetime', date('Y-m-d'))->latest()->paginate(6);
        return PresenceResource::collection($presences);
    }

    public function show(Employee $employee)
    {
        if (request()->has('from') && request()->has('to')) {
            return PresenceResource::collection($employee->presences()->whereBetween('datetime', [request()->from, request()->to." 23:59:59"])->paginate(2));
        }

        return PresenceResource::collection($employee->presences()->paginate(2));
    }

    public function presence()
    {
        request()->validate([
            'code' => 'exists:employees,code'
        ]);

        $employee = Employee::where('code', request()->code)->first();

        if ($employee->presenced->count() > 0) {
            return response()->json([
                'message' => 'You have made a presence.'
            ]);
        } else {
            $employee->presences()->create([
                'datetime' => now()
            ]);
        }

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }
}
