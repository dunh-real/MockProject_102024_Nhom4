<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'Roles'; 
    protected $fillable = ['name'];

    public function roleable()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }
}
