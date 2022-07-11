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
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'category' => $this->category->name,
            'price' => formatPrice($this->price),
            'commission_type' => $this->commission_type,
            'commission_value' => $this->commission_type == 'nominal' ? formatPrice($this->commission_value) : $this->commission_value,
            'image' =>  $this->image ? env('APP_URL').'storage/'.$this->image : null,
        ];
    }
}
