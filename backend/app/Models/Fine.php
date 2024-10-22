<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fine extends Model
{
  use HasFactory;

  protected $table = 'Fine';

  public $timestamps = false;

  protected $fillable = [
    'date',
    'fee',
    'reason',
    'status',
    'resident_id'
  ];

  public function resident()
  {
    return $this->belongsTo(Resident::class, 'resident_id');
  }
  public function payment()
  {
    return $this->hasOne(Payment::class, 'fine_id');
  }
}
