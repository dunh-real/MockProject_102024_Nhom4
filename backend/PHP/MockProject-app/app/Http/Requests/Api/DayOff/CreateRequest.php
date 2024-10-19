<?php

namespace App\Http\Requests\Api\DayOff;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
            'reason' => ['max:255'],
            'type' => ['required', 'max:50'],
            'employee_id' => ['required','integer'],
        ];
    }

    public function messages()
    {
        return [
            'start_date.required' => 'Enter start_date!',
            'start_date.date' => 'Must be date type!',
            'end_date.required' => 'Enter end_date!',
            'end_date.date' =>  'Must be date type!',
            'reason.string' => 'Must be string type!',
            'reason.max' => 'Enter lower than 255 charaters!',
            'type.required' => 'Enter type!',
            'type.max' => 'Enter lower than 50 charaters!',
            'employee_id.required' => 'Enter employee_id!',
            'employee_id.integer' => 'Must be integer type!',
        ];
    }
}
