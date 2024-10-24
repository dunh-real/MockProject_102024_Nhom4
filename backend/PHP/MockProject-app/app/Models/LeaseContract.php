<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaseContract extends Model
{
    use HasFactory;
    public $timestamps = false;
    // Tên bảng tương ứng trong cơ sở dữ liệu (nếu cần tùy chỉnh)
    protected $table = 'LeaseContract'; 

    // Các trường có thể được gán giá trị hàng loạt
    protected $fillable = [
        'start_date',
        'end_date',
        'rent_price',
        'status',
        'apartment_id',
        'resident_id',
        'employee_id',
    ];

    // // Quan hệ với model Apartment (giả sử có bảng apartments)
    // public function apartment()
    // {
    //     return $this->belongsTo(Apartment::class, 'apartment_id');
    // }

    // // Quan hệ với model Resident (giả sử có bảng residents)
    // public function resident()
    // {
    //     return $this->belongsTo(Resident::class, 'resident_id');
    // }

    // // Quan hệ với model Employee (giả sử có bảng employees)
    // public function employee()
    // {
    //     return $this->belongsTo(Employee::class, 'employee_id');
    // }
}
