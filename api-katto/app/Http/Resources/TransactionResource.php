<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            "code" => $this->code,
            "subtotal" => $this->subtotal,
            "discount_total" => $this->discount_total,
            "grand_total" => $this->grand_total,
            "datetime" => $this->datetime,
            "transactionItems" => TransactionItemResource::collection($this->transactionItems)
        ];
    }
}
