<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';

    // Nếu có các cột created_at và updated_at
    public $timestamps = true;

    protected $fillable = [
        'name',
        'birth_date',
        'email',
        'phone_number',
        'avatar',
        'username',
        'password',
        'role_id'
    ];

    // Định nghĩa mối quan hệ với bảng Role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
