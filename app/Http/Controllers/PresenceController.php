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
        $presences = Presence::with('employee')->whereDate('coming_time', date('Y-m-d'))->orderBy('updated_at', 'desc')->paginate(9);
        return PresenceResource::collection($presences);
    }

    public function show(Employee $employee)
    {
        $presences = $employee->presences()->whereNotNull(['coming_time', 'return_time']);
        $count = $presences->count();

        if (request()->has('from') && request()->has('to')) {
            return PresenceResource::collection($employee->presences()->whereBetween('coming_time', [request()->from, request()->to . " 23:59:59"])->whereNotNull(['coming_time', 'return_time'])->paginate(9))->additional(compact('employee', 'count'));
        }

        return PresenceResource::collection($presences->paginate(1))->additional(compact('employee', 'count'));
    }

    public function presence()
    {
        // $carbon = Carbon::parse("2022-06-25 17:07:58");
        // $now = $carbon->format('H:i:s');
        $now = date('H:i:s');

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

        if ($status == 'datang' && ($now >= $timeFrom) && ($now < $timeTo)) {
            if ($employee->presenced->count() > 0) {
                return response()->json([
                    'message' => 'Kamu sudah melakukan presensi datang'
                ], 400);
            }
            $employee->presences()->create([
                'coming_time' => date('Y-m-d H:i:s'),
                'shift' => $shift,
                'status' => $status
            ]);
            return response()->json([
                'message' => 'Presensi datang berhasil'
            ], 200);

        } elseif ($status == 'pulang' && $now >= $timeTo) {
            $presence = Presence::where('employee_id', $employee->id)->whereDate('coming_time', date('Y-m-d'))->latest()->first();

            if ($presence->return_time == null) {
                $presence->update([
                    'return_time' => date('Y-m-d H:i:s'),
                    'status' => $status
                ]);
                
                return response()->json([
                    'message' => 'Presensi pulang berhasil'
                ], 200);
            }
            
            return response()->json([
                'message' => 'Kamu sudah melakukan presensi pulang'
            ], 400);

        } else {
            return response()->json([
                'message' => 'Presensi gagal karena di luar waktu'
            ], 400);
        }
    }

    public function destroy(Presence $presence)
    {
        $presence->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
