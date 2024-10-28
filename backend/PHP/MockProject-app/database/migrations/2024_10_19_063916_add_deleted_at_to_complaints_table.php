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
        Schema::table('Complaint', function (Blueprint $table) {
            //
            $table->softDeletes(); // Thêm cột deleted_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Complaint', function (Blueprint $table) {
            //
            $table->dropSoftDeletes(); // Xóa cột deleted_at nếu rollback
        });
    }
};