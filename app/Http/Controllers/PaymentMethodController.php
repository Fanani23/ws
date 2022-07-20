<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentMethodRequest;
use App\Http\Resources\PaymentMethodResource;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;

class PaymentMethodController extends Controller
{
    public function index()
    {
        $paymentMethods = PaymentMethod::orderBy('name')->paginate(9);
        return PaymentMethodResource::collection($paymentMethods);
    }

    public function show(PaymentMethod $paymentMethod)
    {
        return new PaymentMethodResource($paymentMethod);
    }

    public function create(PaymentMethodRequest $request)
    {
        PaymentMethod::create([
            'code' => getCode('P-'),
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(PaymentMethodRequest $request, PaymentMethod $paymentMethod)
    {
        $paymentMethod->update([
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(PaymentMethod $paymentMethod)
    {
        $paymentMethod->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
