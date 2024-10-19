<?php

namespace App\Http\Requests\Api\DayOff;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'start_date' => ['required','date'],
            'end_date' => ['required','date'],
            'reason' => ['max:255'],
            'type' => ['max:50'],
        ];
    }

    public function messages()
    {
        return [
            'start_date.date' => 'Must be date type!',
            'end_date.date' =>  'Must be date type!',
            'reason.max' => 'Enter lower than 255 charaters!',
            'type.max' => 'Enter lower than 50 charaters!',
        ];
    }
}
