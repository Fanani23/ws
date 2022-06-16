<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(Employee $employees)
    {
        $employees = $employees->newQuery();

        if (request()->has('name')) {
            $employees->where('name','like',"%".request()->name."%");
        }
    
        return EmployeeResource::collection($employees->with('job')->orderBy('name')->paginate(6));
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function create(EmployeeRequest $request)
    {
        Employee::create([
            'job_id' => $request->job_id,
            'code' => $request->code,
            'name' => $request->name,
            'phone' => $request->phone,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(EmployeeRequest $request, Employee $employee)
    {
        $employee->update([
            'code' => $request->code,
            'name' => $request->name,
            'phone' => $request->phone,
            'job' => $request->job,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}