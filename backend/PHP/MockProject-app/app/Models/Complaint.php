<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Complaint extends Model
{
    //
        //
        use HasFactory;
        protected $table = 'Complaint'; // Specify the name of the database table that this model is associated with
        use SoftDeletes; // Enable soft delete feature for the model, allowing records to be "deleted" without being removed from the database
        // protected $fillable = [
        //     'id', 'category_id', 'description', 'image', 'price', 'stock',
        // ];
        protected $guarded = [];
}