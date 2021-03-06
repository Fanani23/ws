<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(Customer $customers)
    {
        return searchByName($customers, '', 'App\Http\Resources\CustomerResource', false, 'membership');
    }

    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    public function create(CustomerRequest $request)
    {
        Customer::create([
            'code' => 'C'.$request->phone,
            'name' => $request->name,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'membership' => $request->membership,
            'datetime' => now()
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(CustomerRequest $request, Customer $customer)
    {
        $customer->update([
            'code' => $request->code,
            'name' => $request->name,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'membership' => $request->membership,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
