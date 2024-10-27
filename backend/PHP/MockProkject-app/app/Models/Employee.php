<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    // Khai báo tên bảng rõ ràng
    protected $table = 'employee';

    // Các cột có thể gán giá trị hàng loạt
    protected $fillable = [
        'name',
        'birth_date',
        'email',
        'phone_number',
        'avatar',
        'username',
        'password',
        'role_id',
        'status'
    ];

    // Nếu bảng không có các cột timestamps
    public $timestamps = false;
}
