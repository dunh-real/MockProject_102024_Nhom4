<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Employee extends Model
{
    //
    use HasFactory;
    protected $table = 'Employee'; // Specify the name of the database table that this model is associated with
    public $timestamps = false;

    // protected $fillable = [
    //     'id', 'category_id', 'description', 'image', 'price', 'stock',
    // ];
    protected $guarded = [];
}