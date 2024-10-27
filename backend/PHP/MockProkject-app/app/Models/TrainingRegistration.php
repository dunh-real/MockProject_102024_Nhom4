<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingRegistration extends Model
{
    protected $table = 'trainingregistration';
    protected $fillable = ['training_schedule_id', 'employee_id'];
    public $timestamps = false; // Tắt tính năng timestamps
}
