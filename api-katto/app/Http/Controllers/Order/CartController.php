<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function create(Request $request)
    {
        $subtotal = 0;
        $net_price = [];

        // discount per service
        foreach ($request->service_items as $key => $service) {
            $product = Product::where('id', $service['product_id'])->first();
            $product_price = $product['price'];

            $subtotal += $product_price;

            if ($service['service_discount_type'] == 'nominal') {
                $net_price[$key] = $product_price - $service['service_discount_amount'];
            } elseif ($service['service_discount_type'] == 'percent') {
                $net_price[$key] = $product_price - ($product_price * ($service['service_discount_amount'] / 100));
            }
        }

        $grand_total = array_sum($net_price);
        // discount order
        if ($request->discount_type == 'nominal') {
            $grand_total = $grand_total - $request->discount_amount;
        } elseif ($request->discount_type == 'percent') {
            $grand_total = $grand_total - ($grand_total * ($request->discount_amount / 100));
        }

        if ($request->coupon_type == 'nominal') {
            $grand_total = $grand_total - $request->coupon_amount;
        } elseif ($request->coupon_type == 'percent') {
            $grand_total = $grand_total - ($grand_total * ($request->coupon_amount / 100));
        }

        $cart = Cart::create([
            'user_id' => $request->user_id,
            'customer_id' => $request->customer_id,
            'discount_type' => $request->discount_type,
            'discount_amount' => $request->discount_amount,
            'coupon_type' => $request->coupon_type,
            'coupon_amount' => $request->coupon_amount,
            'code' => time(),
            'datetime' => now(),
            'subtotal' => $subtotal,
            'grand_total' => $grand_total,
        ]);


        foreach ($request->service_items as $key => $service) {
            $product = Product::where('id', $service['product_id'])->first();
            $product_price = $product['price'];

            $cart->serviceItems()->create([
                'employee_id' => $service['stylist_id'],
                'product_id' => $service['product_id'],
                'discount_type' => $service['service_discount_type'],
                'discount_amount' => $service['service_discount_amount'],
                'price' => $product_price,
                'net_price' => $net_price[$key],
                'datetime' => now(),
            ]);
        }

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function showCartCashier(Request $request)
    {
        $user_id = $request->user_id;
        $cart = Cart::where('user_id', $user_id)->with('serviceItems')->latest()->first();
        return new CartResource($cart);
    }
}
