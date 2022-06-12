<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobRequest extends FormRequest
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
            'code' => 'required|min:6|regex:/^\S*$/u|unique:jobs,code',
            'name' => 'required|min:2'
        ];

        if (isset($this->job->id)) {
            $id = $this->job->id;
            $rules['code'] .= ",$id";
        }

        return $rules;
    }
}
