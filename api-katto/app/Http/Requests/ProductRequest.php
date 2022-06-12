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
            'code' => 'required|min:6|regex:/^\S*$/u|unique:products,code',
            'name' => 'required|min:4',
            'price' => 'required|integer',
            'fee_commission_rupiah' => 'required|integer',
            'fee_commission_percent' => 'required',
            'image' => 'mimes:jpg,jpeg,bmp,png',
        ];

        if (isset($this->product->id)) {
            $id = $this->product->id;
            $rules['code'] .= ",$id";
        }

        return $rules;
    }
}
