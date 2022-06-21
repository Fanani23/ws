<?php

namespace App\Http\Resources\Transaction;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TransactionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => collect($this->collection)->map(function ($transactions) {
                return [
                    "id" => $transactions->id,
                    "customer_name" => $transactions->customer->name,
                    "code" => $transactions->code,
                    "discount_type" => $transactions->discount_type,
                    "discount_amount" => $transactions->discount_amount,
                    "coupon_type" => $transactions->coupon_type,
                    "coupon_amount" => $transactions->coupon_amount,
                    "subtotal" => $transactions->subtotal,
                    "discount_total" => $transactions->discount_total,
                    "grand_total" => $transactions->grand_total,
                    "method" => $transactions->method,
                    "status" => $transactions->status,
                    "datetime" => $transactions->datetime,
                ];
            })
        ];
    }
}
