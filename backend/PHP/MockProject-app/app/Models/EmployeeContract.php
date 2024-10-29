<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeContract extends Model
{
  use HasFactory;

  protected $table = 'EmployeeContract';

  public $timestamps = false;

  protected $fillable = [
    'start_date',
    'end_date',
    'position',
    'employee_id',
  ];

  public function employee()
  {
    return $this->belongsTo(Employee::class, 'employee_id');
  }

  // public function contract()
  // {
  //   return $this->hasOne(EmployeeContract::class, 'employee_id');
  // }

}
