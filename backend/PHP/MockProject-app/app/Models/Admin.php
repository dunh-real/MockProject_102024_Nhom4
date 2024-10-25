<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Thêm dòng này

class Admin extends Authenticatable
{
    
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'Admin'; 
    protected $fillable = ['name','birth_date', 'email','phone_number','avatar', 'username', 'password', 'role_id'];
    public $timestamps = false;
    protected $guarded = [];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id' );
    }
}