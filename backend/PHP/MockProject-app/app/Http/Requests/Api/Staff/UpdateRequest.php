<?php

namespace App\Http\Requests\Api\Staff;

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
            'name' => ['max:255'],
            'birth_date' => [],
            'email' => [],
            'phone_number' => [],
            'avatar' => [],
            'username' => [],
            'password' => [],
            'role_id' => [],
        ];
    }

    public function messages()
    {
        return [
            'name.max' => 'Enter name up to 255 characters!',
        ];
    }
}