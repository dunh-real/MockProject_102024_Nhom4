<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
  use HasFactory;
  public $timestamps = false;
  protected $table = 'Complaint'; // Tên bảng trong database

  protected $fillable = [
    'date',
    'description',
    'status',
    'resident_id',
    'employee_id',
    'request_type',
    'solution'
  ];

  // Mặc định khi tạo mới complaint là open
  protected static function boot()
  {
    parent::boot();

    static::creating(function ($complaint) {
      if (empty($complaint->status)) {
        $complaint->status = 'Open';
      }
    });
  }

  public function resident()
  {
    return $this->belongsTo(Resident::class, 'resident_id');
  }

  public function employee()
  {
    return $this->belongsTo(Employee::class, 'employee_id');
  }
}
