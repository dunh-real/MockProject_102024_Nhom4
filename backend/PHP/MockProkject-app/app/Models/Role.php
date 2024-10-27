<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';  // Tên bảng trong cơ sở dữ liệu

    // Nếu có các cột created_at và updated_at
    public $timestamps = false; // true

    // Các trường có thể gán giá trị hàng loạt
    protected $fillable = ['name'];

    // Định nghĩa mối quan hệ với bảng Admin
    public function admins()
    {
        return $this->hasMany(Admin::class);
    }
}
