<?php

namespace App\Http\Resources;

use App\Http\Resources\Transaction\TransactionItemResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            "customer_name" => $this->customer->name,
            "customer_phone" => $this->customer->phone,
            "code" => $this->code,
            "subtotal" => formatPrice($this->subtotal),
            "discount_total" => formatPrice($this->discount_total),
            "grand_total" => formatPrice($this->grand_total),
            "grand_total_unformat" => intval($this->grand_total),
            "datetime" => $this->datetime,
            "service_items" => TransactionItemResource::collection($this->cartItems)
        ];
    }
}
