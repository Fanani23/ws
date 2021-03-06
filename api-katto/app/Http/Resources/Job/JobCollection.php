<?php

namespace App\Http\Resources\Job;

use Illuminate\Http\Resources\Json\ResourceCollection;

class JobCollection extends ResourceCollection
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
            'data' => collect($this->collection)->map(function ($jobs) {
                return [
                    'id' => $jobs->id,
                    'code' => $jobs->code,
                    'name' => $jobs->name,
                ];
            })
        ];
    }
}
