<?php

namespace App\Http\Resources;

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
            "employee_id" => $this->employee->name,
            "product_id" => $this->product->name,
            "price" => $this->price,
            "net_price" => $this->net_price,
        ];
    }
}
