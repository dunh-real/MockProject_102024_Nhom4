<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Thêm dòng này

class Employee extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $table = 'Employee'; // Bảng Employee
    protected $fillable = ['name', 'email', 'username', 'password', 'role_id', 'status'];

    public $timestamps = false;

    // protected $fillable = [
    //     'id', 'category_id', 'description', 'image', 'price', 'stock',
    // ];
    protected $guarded = [];

    public function role()
    {   
        return $this->belongsTo(Role::class, 'role_id');
        // return $this->morphOne(Role::class, 'roleable');
    }
}