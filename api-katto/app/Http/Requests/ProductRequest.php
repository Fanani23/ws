<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|min:4',
            'price' => 'required|integer',
            'fee_commission_nominal' => 'integer',
            'fee_commission_percent' => 'nullable|numeric',
            'image' => 'mimes:jpg,jpeg,bmp,png',
        ];

        return $rules;
    }
}
