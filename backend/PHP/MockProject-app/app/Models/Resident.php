<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
  use HasFactory;

  protected $table = 'Resident'; // Table name
  
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
