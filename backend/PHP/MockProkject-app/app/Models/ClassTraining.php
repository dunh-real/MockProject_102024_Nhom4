<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassTraining extends Model
{
    protected $table = 'classtraining';

    protected $fillable = [
        'topic_name',
        'description',
        'duration'
    ];

    public $timestamps = false;
}
