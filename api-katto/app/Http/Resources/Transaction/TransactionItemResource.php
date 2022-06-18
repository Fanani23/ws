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
            "net_price" => $this->net_price,
            "discount_type" => $this->discount_type,
            "discount_amount" => $this->discount_amount,
        ];
    }
}
