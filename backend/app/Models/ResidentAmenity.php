<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentAmenity extends Model
{
  use HasFactory;

  public $timestamps = false;

  protected $table = 'ResidentAmenity'; // Tên bảng trong database

  protected $fillable = [
    'resident_id',
    'amenity_id',
    'type',
    'price',
    'status'
  ];

  // Relationship với Resident
  public function resident()
  {
    return $this->belongsTo(Resident::class, 'resident_id');
  }

  // Relationship với Amenity
  public function amenity()
  {
    return $this->belongsTo(Amenity::class, 'amenity_id');
  }
}
