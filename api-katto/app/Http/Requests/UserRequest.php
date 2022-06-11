<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'username' => 'required|min:4|unique:users,username',
            'phone' => 'required|min:9|unique:users,phone',
            'password' => 'required',
        ];

        if (isset($this->user->id)) {
            $id = $this->user->id;
            $rules['username'] .= ",$id";
            $rules['phone'] .= ",$id";
        }

        return $rules;
    }
}
