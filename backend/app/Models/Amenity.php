<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
  use HasFactory;
  public $timestamps = false;

  protected $table = 'Amenity'; // Tên bảng trong cơ sở dữ liệu

  protected $fillable = [
    'name',
    'description'
  ];
}
