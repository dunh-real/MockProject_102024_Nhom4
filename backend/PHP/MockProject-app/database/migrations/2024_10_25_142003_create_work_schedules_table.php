<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('work_schedules', function (Blueprint $table) {
            $table->increments('id');  // Sử dụng increments thay vì id()
            $table->integer('employee_id')->unsigned();  // Sử dụng integer thay vì foreignId
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('shift_type', 50);
            $table->integer('building_id')->unsigned();  // Sử dụng integer thay vì foreignId
            $table->timestamps();
    
            $table->foreign('employee_id')
                  ->references('id')
                  ->on('Employee')
                  ->onDelete('cascade');
                  
            $table->foreign('building_id')
                  ->references('id')
                  ->on('Building')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_schedules');
    }
};
