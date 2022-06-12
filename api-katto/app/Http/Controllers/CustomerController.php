<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Customer $customers)
    {
        $customers = $customers->newQuery();

        if (request()->has('name')) {
            $customers->where('name','like',"%".request()->name."%");
        }
    
        if (request()->has('membership')) {
            $customers->where('membership', request()->membership);
        }
    
        return CustomerResource::collection($customers->orderBy('name')->paginate(6));
    }

    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    public function create(CustomerRequest $request)
    {
        Customer::create([
            'code' => $request->code,
            'name' => $request->name,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'membership' => $request->membership,
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
