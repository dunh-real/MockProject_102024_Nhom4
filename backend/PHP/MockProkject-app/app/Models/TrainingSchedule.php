<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrainingSchedule extends Model
{
    protected $table = 'trainingschedule';

    // Các cột có thể gán giá trị hàng loạt
    protected $fillable = [
        'class_training_id',
        'start_date',
        'end_date',
        'location',
        'time',
        'status',
        'Participant',
        'employee_id'
    ];

    public $timestamps = false;

    // Định nghĩa mối quan hệ với bảng ClassTraining
    public function classTraining()
    {
        return $this->belongsTo(ClassTraining::class, 'class_training_id');
    }

    // Định nghĩa mối quan hệ với bảng Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
