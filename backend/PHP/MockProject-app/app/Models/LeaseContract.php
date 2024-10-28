<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaseContract extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Tên bảng trong cơ sở dữ liệu
    protected $table = 'LeaseContract'; 

    // Các cột có thể được gán giá trị hàng loạt
    protected $fillable = [
        'start_date',
        'end_date',
        'rent_price',
        'status',
        'apartment_id',
        'resident_id',
        'employee_id',
    ];

}
