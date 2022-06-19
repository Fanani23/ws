<?php

namespace App\Http\Resources\Transaction;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "transaction_id" => $this->transaction_id,
            "employee" => $this->employee->name,
            "product" => $this->product->name,
            "price" => $this->price,
            'price_after_discount' => $this->price_after_discount,
            'commission_type' => $this->commission_type,
            'commission_value' => $this->commission_value,
            'fee' => $this->fee,
            "discount_type" => $this->discount_type,
            "discount_amount" => $this->discount_amount,
            "commission_type" => $this->commission_type,
            "commission_value" => $this->commission_value,
            "total_fee" => $this->fee
        ];
    }
}
