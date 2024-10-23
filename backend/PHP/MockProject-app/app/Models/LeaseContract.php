<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaseContract extends Model
{
  protected $table = 'LeaseContract'; // Assuming your table is named 'lease_contracts'

  public $timestamps = false;

  protected $fillable = [
    'start_date',
    'end_date',
    'rent_price',
    'status',
    'apartment_id',
    'resident_id',
    'employee_id',
  ];

  public function resident()
  {
    return $this->belongsTo(Resident::class, 'resident_id');
  }

  public function employee()
  {
    return $this->belongsTo(Employee::class, 'employee_id');
  }
}
