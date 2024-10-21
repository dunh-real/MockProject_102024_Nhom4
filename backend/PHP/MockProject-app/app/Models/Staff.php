<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $table = "Employee";

    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'birth_date',
        'email',
        'phone_number',
        'avatar',
        'username',
        'password',
        'role_id',
        'status',
    ];

    public function softDelete()
    {
        $this['status'] = 0;
        return $this->save();
    }

    public function isSoftDelete()
    {
        return $this['status'] == 0 ? true : false;
    }
}