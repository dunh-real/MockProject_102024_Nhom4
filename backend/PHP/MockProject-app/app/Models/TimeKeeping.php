<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeKeeping extends Model
{
    //
    protected $table = 'TimeKeeping';
    protected $fillable = [
        'date', 
        'check_in_time', 
        'check_out_time', 
        'employee_id'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
