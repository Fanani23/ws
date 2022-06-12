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
        $presences = Presence::with('employee')->latest()->paginate(6);
        return PresenceResource::collection($presences);
    }

    public function show(Employee $employee)
    {
        if (request()->has('from') && request()->has('to')) {
            return PresenceResource::collection($employee->presences()->whereBetween('when', [request()->from, request()->to." 23:59:59"])->paginate(2))->additional(["employee" => $employee]);
        }

        return PresenceResource::collection($employee->presences()->paginate(2))->additional(["employee" => $employee]);
    }

    public function presence()
    {
        $employee = Employee::where('code', request()->code)->first();

        if ($employee->presenced->count() > 0) {
            return response()->json([
                'message' => 'You have made a presence.'
            ]);
        } else {
            $employee->presences()->create([
                'when' => now()
            ]);
        }

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }
}
