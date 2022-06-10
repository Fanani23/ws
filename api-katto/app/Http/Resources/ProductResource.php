<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'code' => $this->code,
            'name' => $this->name,
            'category' => $this->category->name,
            'price' => $this->price,
            'fee_commission_rupiah' => $this->fee_commission_rupiah,
            'fee_commission_percent' => $this->fee_commission_percent,
            'image' => $this->image,
        ];
    }
}
