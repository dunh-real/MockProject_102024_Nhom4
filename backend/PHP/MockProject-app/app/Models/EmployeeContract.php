<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeContract extends Model
{
    use HasFactory;

    // Tùy chọn: Nếu tên bảng không tuân theo quy ước của Laravel
    protected $table = 'EmployeeContract'; // Tên bảng trong cơ sở dữ liệu

}