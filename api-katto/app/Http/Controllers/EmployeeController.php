<?php

namespace App\Http\Controllers;

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
    
        if (request()->has('job')) {
            $employees->where('job', request()->job);
        }
    
        return EmployeeResource::collection($employees->orderBy('name')->paginate(6));
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function create()
    {
        Employee::create([
            'code' => request()->code,
            'name' => request()->name,
            'phone' => request()->phone,
            'job' => request()->job,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(Employee $employee)
    {
        $employee->update([
            'code' => request()->code,
            'name' => request()->name,
            'phone' => request()->phone,
            'job' => request()->job,
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