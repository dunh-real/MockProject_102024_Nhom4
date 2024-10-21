<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class StaffResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'birth_date' => $this->birth_date,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'avatar' => $this->avatar,
            'role_id' => $this->role_id,
            'status' => $this->status,
        ];
    }
}