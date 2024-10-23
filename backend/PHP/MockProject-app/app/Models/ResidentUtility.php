<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentUtility extends Model
{
  use HasFactory;

  protected $table = 'ResidentUtility'; // Tên bảng trong database

  public $timestamps = false;

  protected $fillable = [
      'resident_id',
      'utility_id',
      'type',
      'status'
  ];

  // Relationship với Resident
  public function resident()
  {
      return $this->belongsTo(Resident::class, 'resident_id');
  }

  // Relationship với Utility
  public function utility()
  {
      return $this->belongsTo(Utility::class, 'utility_id');
  }
}
