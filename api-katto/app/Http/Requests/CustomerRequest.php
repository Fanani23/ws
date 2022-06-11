<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
            'code' => 'required|min:6|regex:/^\S*$/u|unique:customers,code',
            'name' => 'required|min:4',
            'phone' => 'required|unique:customers,phone',
            'birthday' => 'date',
            'membership' => 'required',
        ];

        if (isset($this->customer->id)) {
            $id = $this->customer->id;
            $rules['code'] .= ",$id";
            $rules['phone'] .= ",$id";
        }

        return $rules;
    }
}
