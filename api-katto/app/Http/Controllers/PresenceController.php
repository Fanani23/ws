<?php

namespace App\Http\Controllers;

use App\Http\Resources\PresenceResource;
use App\Models\Employee;
use App\Models\Presence;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;

class PresenceController extends Controller
{
    public function index()
    {
        $presences = Presence::with('employee')->whereDate('coming_time', date('Y-m-d'))->latest()->paginate(9);
        return PresenceResource::collection($presences);
    }

    public function show(Employee $employee)
    {
        if (request()->has('from') && request()->has('to')) {
            return PresenceResource::collection($employee->presences()->whereBetween('coming_time', [request()->from, request()->to . " 23:59:59"])->whereNotNull(['coming_time', 'return_time'])->paginate(9));
        }

        return PresenceResource::collection($employee->presences()->whereNotNull(['coming_time', 'return_time'])->paginate(2));

    }

    public function presence()
    {
        // $carbon = Carbon::parse("2022-06-25 17:07:58");
        // $now = $carbon->format('H:i:s');

        // Pagi, 09.00 - 17.00
        // Middle, 10.30 - 18.30
        // Siang, 12.00 - 20.00

        // Shift = pagi/middle/siang
        // Status = datang/pulang

        request()->validate([
            'code' => 'exists:employees,code'
        ]);

        $shift = request()->shift;
        $status = request()->status;

        $employee = Employee::where('code', request()->code)->first();

        if ($shift == 'pagi') {
            $timeFrom = '09:00:00';
            $timeTo = '17:00:00';
        } elseif ($shift == 'middle') {
            $timeFrom = '10:30:00';
            $timeTo = '18:30:00';
        } elseif ($shift == 'siang') {
            $timeFrom = '12:00:00';
            $timeTo = '20:00:00';
        }

        if ($status == 'datang' && (now() >= $timeFrom) && (now() < $timeTo)) {
            if ($employee->presenced->count() > 0) {
                return response()->json([
                    'message' => 'You have made a presence.'
                ], 400);
            }
            $employee->presences()->create([
                'coming_time' => now()
            ]);
            return response()->json([
                'message' => 'Berhasil datang'
            ], 200);

        } elseif ($status == 'pulang' && now() >= $timeTo) {
            $presence = Presence::where('employee_id', $employee->id)->whereDate('coming_time', date('Y-m-d'))->latest()->first();

            if ($presence->return_time == null) {
                $presence->update([
                    'return_time' => now()
                ]);
                
                return response()->json([
                    'message' => 'Berhasil pulang'
                ], 200);
            }
            
            return response()->json([
                'message' => 'You have made a presence.'
            ], 400);

        } else {
            return response()->json([
                'message' => 'Gagal'
            ], 400);
        }
    }
}
