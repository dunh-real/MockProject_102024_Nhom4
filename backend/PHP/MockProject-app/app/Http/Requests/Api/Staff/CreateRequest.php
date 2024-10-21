<?php

namespace App\Http\Requests\Api\Staff;

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
            'name' => ['required', 'max:255'],
            'birth_date' => ['required'],
            'email' => ['required'],
            'phone_number' => ['required'],
            'avatar' => [],
            'username' => ['required'],
            'password' => ['required'],
            'role_id' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Please enter name!',
            'name.max' => 'Enter up to 255 characters!',
            'birth_date.required' => 'Please enter birth_date!',
            'email.required' => 'Please enter email!',
            'phone_number.required' => 'Please enter phone_number!',
            'username.required' => 'Please enter username!',
            'password.required' => 'Please enter password!',
            'role_id.required' => 'Please enter role_id!',
        ];
    }
}