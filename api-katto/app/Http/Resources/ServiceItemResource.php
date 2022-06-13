<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceItemResource extends JsonResource
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
            "employee_name" => $this->employee->name,
            "product_name" => $this->product->name,
            "discount_type" => $this->discount_type,
            "discount_amount" => $this->discount_amount,
            "price" => $this->price,
        ];
    }
}
