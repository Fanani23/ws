<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Transaction;
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
            'code' => time(),
            'discount_type' => $request->discount_type,
            'discount_amount' => $request->discount_amount,
            'coupon_type' => $request->coupon_type,
            'coupon_amount' => $request->coupon_amount,
            'subtotal' => $subtotal,
            'discount_total' => $subtotal - $grand_total,
            'grand_total' => $grand_total,
            'datetime' => now(),
        ]);


        foreach ($request->service_items as $key => $service) {
            $product = Product::where('id', $service['product_id'])->first();
            $product_price = $product['price'];

            $cart->cartItems()->create([
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
        $cart = Cart::where('user_id', $user_id)->with('cartItems')->latest()->first();
        return new CartResource($cart);
    }

    public function confirm(Request $request, Cart $cart)
    {
        $transaction = Transaction::create([
            'user_id' => $cart->user_id,
            'customer_id' => $cart->customer_id,
            'code' => $cart->code,
            'discount_type' => $cart->discount_type,
            'discount_amount' => $cart->discount_amount,
            'coupon_type' => $cart->coupon_type,
            'coupon_amount' => $cart->coupon_amount,
            'subtotal' => $cart->subtotal,
            'discount_total' => $cart->discount_total,
            'grand_total' => $cart->grand_total,
            'datetime' => $cart->datetime,
            'method' => $request->method,
            'status' => 'paid'
        ]);

        foreach ($cart->cartItems as $item) {
            $transaction->transactionItems()->create([
                'employee_id' => $item->employee_id,
                'product_id' => $item->product_id,
                'discount_type' => $item->discount_type,
                'discount_amount' => $item->discount_amount,
                'price' => $item->price,
                'net_price' => $item->net_price,
                'datetime' => $item->datetime,
            ]);
        }

        $cart->cartItems()->delete();
        $cart->delete();

        return response()->json([
            'message' => 'Successfully confirmed.'
        ]);
    }

    public function destroy(Cart $cart)
    {
        $cart->cartItems()->delete();
        $cart->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
