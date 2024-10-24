<?php

namespace App\Http\Requests\Staff;

use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;

class StoreLeaseContractRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize()
    {
        // Tạm thời cho phép tất cả yêu cầu
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules()
    {
        return [
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'rent_price' => 'required|numeric',
            'status' => 'required|integer',
            'apartment_id' => 'required|integer',
            'resident_id' => 'required|integer',
            'employee_id' => 'required|integer',
        ];
    }

    /**
     * Custom messages for validation errors.
     * @return array
     */
    public function messages()
    {
        return [
            'start_date.required' => 'Start date is required.',
            'end_date.required' => 'End date is required.',
            'rent_price.required' => 'Rent price is required.',
            'status.required' => 'Status is required.',
            'apartment_id.required' => 'Apartment ID is required.',
            'resident_id.required' => 'Resident ID is required.',
            'employee_id.required' => 'Employee ID is required.',
        ];
    }
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $startDate = Carbon::parse($this->start_date);
            $endDate = Carbon::parse($this->end_date);

            if ($startDate->greaterThanOrEqualTo($endDate)) {
                $validator->errors()->add('start_date', 'Start date must be before end date.');
            }
        });
    }

}
