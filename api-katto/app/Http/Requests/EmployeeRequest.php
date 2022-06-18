<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
            'job_id' => 'required|exists:jobs,id',
            'phone' => 'required|unique:employees,phone',
            'name' => 'required|min:4',
        ];

        if (isset($this->employee->id)) {
            $id = $this->employee->id;
            $rules['phone'] .= ",$id";
        }

        return $rules;
    }
}
