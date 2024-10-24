<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'Roles'; 
    protected $fillable = ['name'];

    public function users()
    {
        return $this->hasMany(Employee::class, 'role_id');
    }
}
