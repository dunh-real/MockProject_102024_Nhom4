<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  use HasFactory;
  protected $table = 'Payment'; // Table name
  public $timestamps = false;
  protected $fillable = [
    'date',
    'amount',
    'method',
    'resident_id',
    'utility_id',
    'amenity_id',
    'fine_id',
    'lease_contract_id'
  ];

  public function resident()
  {
    return $this->belongsTo(Resident::class, 'resident_id');
  }
  public function fine()
  {
    return $this->belongsTo(Fine::class, 'fine_id');
  }
}
