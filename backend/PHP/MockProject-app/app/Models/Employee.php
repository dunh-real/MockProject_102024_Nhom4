<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
  use HasFactory;

  protected $table = 'employees'; // Table name
  protected $primaryKey = 'id';   // Primary key
  public $timestamps = false;     // Disable timestamps

  // Fillable properties
  protected $fillable = [
    'name',
    'birth_date',
    'email',
    'phone_number',
    'avatar',
    'username',
    'password',
    'role_id',
  ];
}
