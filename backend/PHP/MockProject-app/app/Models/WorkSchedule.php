<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkSchedule extends Model
{
    //
    use HasFactory;
    protected $table = 'WorkSchedule';

    protected $fillable = [
        'employee_id',
        'date',
        'start_time',
        'end_time',
        'shift_type',
        'building_id',
    ];

    // 
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    // 
    public function building()
    {
        return $this->belongsTo(Building::class);
    }
}

