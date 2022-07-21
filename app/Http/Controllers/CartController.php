<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Product;
use App\Models\Transaction;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function create(Request $request)
    {
        $subtotal = 0;
        $price_after_discount = [];

        $discount_amount = request()->discount_amount;
        $coupon_amount = request()->coupon_amount;
        $discount_type = $request->discount_type;

        $customer_membership = Customer::where('id', $request->customer_id)->first()->membership;

        // discount per service
        foreach ($request->service_items as $key => $service) {
            $product = Product::where('id', $service['product_id'])->first();
            $product_price = $product['price'];

            $subtotal += $product_price;

            if ($customer_membership == 'vip') {
                $price_after_discount[$key] = $product_price;
            } elseif ($request->discount_amount == '') {
                if ($service['service_discount_type'] == 'nominal' && $service['service_discount_amount'] > 0) {
                    $price_after_discount[$key] = $product_price - $service['service_discount_amount'];
                } elseif ($service['service_discount_type'] == 'percent' && $service['service_discount_amount'] > 0) {
                    $price_after_discount[$key] = $product_price - ($product_price * ($service['service_discount_amount'] / 100));
                } else {
                    $price_after_discount[$key] = $product_price;
                }
            } else {
                $price_after_discount[$key] = $product_price;
            }
        }

        $grand_total = array_sum($price_after_discount);

        if ($customer_membership == 'vip') {
            $grand_total = $grand_total - ($grand_total * (20 / 100));
            $discount_amount = 20;
            $discount_type = 'percent';
            $coupon_amount = 0;
        } elseif ($request->discount_amount > 0 || $request->coupon_amount > 0) {
            // discount all order
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
        }

        $cart = Cart::create([
            'user_id' => $request->user_id,
            'customer_id' => $request->customer_id,
            'code' => time(),
            'discount_type' => $discount_type,
            'discount_amount' => $discount_amount,
            'coupon_type' => $request->coupon_type,
            'coupon_amount' => $coupon_amount,
            'subtotal' => $subtotal,
            'discount_total' => $subtotal - $grand_total,
            'grand_total' => $grand_total,
            'datetime' => now(),
        ]);

        $count_services = count($request->service_items);

        foreach ($request->service_items as $key => $service) {
            $product = Product::where('id', $service['product_id'])->first();
            $product_price = $product['price'];

            if ($customer_membership == 'vip') {
                $service_discount_type = 'percent';
                $service_discount_amount = 20;
                $price_after_discount_product = $product_price - ($product_price * (20 / 100));
            } else {
                $service_discount_type = $service['service_discount_type'];
                $service_discount_amount = $service['service_discount_amount'];
                $price_after_discount_product = $price_after_discount[$key];

                // discount
                if ($request->discount_type == 'nominal' && $request->discount_amount > 0) {
                    $service_discount_type = 'nominal';
                    $service_discount_amount = $request->discount_amount / $count_services;
                    $price_after_discount_product = $product_price - ($request->discount_amount / $count_services);
                } elseif ($request->discount_type == 'percent' && $request->discount_amount > 0) {
                    $service_discount_type = 'percent';
                    $service_discount_amount = $request->discount_amount;
                    $price_after_discount_product = $product_price - ($product_price * ($request->discount_amount / 100));
                }

                // coupon
                if ($request->coupon_type == 'nominal' && $request->coupon_amount > 0) {
                    $service_discount_type = 'nominal';
                    $service_discount_amount = $request->coupon_amount / $count_services;
                    $price_after_discount_product = $product_price - ($request->coupon_amount / $count_services);
                } elseif ($request->coupon_type == 'percent' && $request->coupon_amount > 0) {
                    $service_discount_type = 'percent';
                    $service_discount_amount = $request->coupon_amount;
                    $price_after_discount_product = $product_price - ($product_price * ($request->coupon_amount / 100));
                }
            }

            $fee = 0;

            if ($product['commission_value'] > 0) {
                if ($product->commission_type == 'percent') {
                    $fee = $price_after_discount_product * ($product['commission_value'] / 100);
                } elseif ($product->commission_type == 'nominal') {
                    $fee = $product['commission_value'];
                }
            }

            $cart->cartItems()->create([
                'employee_id' => $service['stylist_id'],
                'product_id' => $service['product_id'],
                'category_id' => $product->category_id,
                'discount_type' => $service_discount_type,
                'discount_amount' => $service_discount_amount,
                'price' => $product_price,
                'price_after_discount' => $price_after_discount_product,
                'commission_type' => $product->commission_type,
                'commission_value' => $product->commission_value,
                'fee' => $fee,
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
        $request->validate([
            'payment_method_id' => 'required|exists:payment_methods,id',
        ]);

        $transaction = Transaction::create([
            'user_id' => $cart->user_id,
            'customer_id' => $cart->customer_id,
            'payment_method_id' => $request->payment_method_id,
            'code' => $cart->code,
            'discount_type' => $cart->discount_type,
            'discount_amount' => $cart->discount_amount,
            'coupon_type' => $cart->coupon_type,
            'coupon_amount' => $cart->coupon_amount,
            'subtotal' => $cart->subtotal,
            'discount_total' => $cart->discount_total,
            'grand_total' => $cart->grand_total,
            'datetime' => $cart->datetime,
            'status' => 'paid'
        ]);

        foreach ($cart->cartItems as $item) {
            $transaction->transactionItems()->create([
                'employee_id' => $item->employee_id,
                'product_id' => $item->product_id,
                'category_id' => $item->category_id,
                'discount_type' => $item->discount_type,
                'discount_amount' => $item->discount_amount,
                'price' => $item->price,
                'price_after_discount' => $item->price_after_discount,
                'commission_type' => $item->commission_type,
                'commission_value' => $item->commission_value,
                'fee' => $item->fee,
                'datetime' => $item->datetime,
            ]);
        }

        $transaction->notification()->create([
            'message' => 'New transaction has been confirmed.',
            'datetime' => now(),
        ]);

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
