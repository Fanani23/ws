<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CommissionTransactionItemCollection extends ResourceCollection
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
                    'employee_name' => $transactionItems->employee->name,
                    'product_name' => $transactionItems->product->name,
                    'category_name' => $transactionItems->product->category->name,
                    'qty' => 1,
                    'price' => $transactionItems->price,
                    'price_after_discount' => $transactionItems->price_after_discount,
                    'commission_type' => $transactionItems->commission_type,
                    'commission_value' => $transactionItems->commission_value,
                    'fee' => $transactionItems->fee,
                    'datetime' => $transactionItems->datetime,
                ];
            })
        ];
    }
}
