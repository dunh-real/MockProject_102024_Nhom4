<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utility extends Model
{
  use HasFactory;

  public $timestamps = false;

  protected $table = 'Utility'; // Tên bảng trong cơ sở dữ liệu

  protected $fillable = [
    'name',
    'price_rate',
    'description',
    'company_id'
  ];
}
