<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DayOff extends Model
{
    use HasFactory;

    protected $table = 'DayOff';

    public $timestamps = false;

    protected $fillable = [
        'start_date',
        'end_date',
        'reason',
        'type',
        'is_approved',
        'status',
        'employee_id',
    ];

    // Phương thức xóa mềm, thay đổi status thành 1
    public function softDelete()
    {
        $this->status = 0;
        return $this->save();
    }

    // Phương thức khôi phục, thay đổi status lại thành 0
    public function restore()
    {
        $this->status = 1;
        return $this->save();
    }

    // public function approve($is_approved)
    // {
    //     $this->is_approved = $is_approved;
    //     return $this->save();
    // }

    public function is_deleted()
    {
        return $this->status==0 ? true : false;
    }
}
