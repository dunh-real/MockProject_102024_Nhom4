<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Employee extends Model
{
    //
    use HasFactory;
    
    protected $table = 'Employee'; // Bảng Employee
    protected $fillable = ['name', 'email', 'username', 'password', 'role_id', 'status'];

    public $timestamps = false;

    // protected $fillable = [
    //     'id', 'category_id', 'description', 'image', 'price', 'stock',
    // ];
    protected $guarded = [];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id' );
    }
}