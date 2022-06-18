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
        return searchByName($employees, 'job', 'App\Http\Resources\EmployeeResource', false, '');
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function create(EmployeeRequest $request)
    {
        Employee::create([
            'job_id' => $request->job_id,
            'code' => getCode('E-'),
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
            'job_id' => $request->job_id,
            'name' => $request->name,
            'phone' => $request->phone,
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