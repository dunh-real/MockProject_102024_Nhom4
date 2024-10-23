<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cv extends Model
{

    use SoftDeletes; // Enable soft delete feature for the model, allowing records to be "deleted" without being removed from the database
    use HasFactory; // Enable the factory feature for the model, allowing for easy creation of test data
    protected $table = 'CandidateCV'; // Specify the name of the database table that this model is associated with

    // protected $fillable = [ // Define mass assignable attributes (commented out for now)
    //     'id', 'category_id', 'description', 'image', 'price', 'stock',
    // ];
    protected $guarded = []; // Indicate that all attributes are mass assignable, as this model does not restrict any attributes

}