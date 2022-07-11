<?php

namespace App\Http\Resources;

use App\Http\Resources\Transaction\TransactionResource;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
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
            'id' => $this->id,
            'message' => $this->message,
            'datetime' => $this->datetime,
            "transaction_code" => $this->transaction->code,
            "transaction_customer_name" => $this->transaction->customer->name,
            "transaction_grand_total" => formatPrice($this->transaction->grand_total),
        ];
    }
}
