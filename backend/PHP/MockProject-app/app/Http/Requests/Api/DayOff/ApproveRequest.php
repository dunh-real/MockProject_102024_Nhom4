<?php

namespace App\Http\Requests\Api\DayOff;

use Illuminate\Foundation\Http\FormRequest;

class ApproveRequest extends FormRequest
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
            'is_approved' => ['required', 'integer'],
        ];
    }

    public function messages()
    {
        return [
            'is_approved.required' => 'Enter 11 is_approved!',
            'is_approved.integer' => 'Must be integer!',
        ];
    }
}
