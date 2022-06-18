<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderTransactionItemCollection extends ResourceCollection
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
            'data' => collect($this->collection)->map(function ($transactionItems) {
                return [
                    'id' => $transactionItems->id,
                    'code' => $transactionItems->transaction->code,
                    'employee' => $transactionItems->employee->name,
                    'product' => $transactionItems->product->name,
                    'category' => $transactionItems->product->category->name,
                    'qty' => 1,
                    'price' => $transactionItems->price,
                    'net_price' => $transactionItems->net_price,
                ];
            })
        ];
    }
}