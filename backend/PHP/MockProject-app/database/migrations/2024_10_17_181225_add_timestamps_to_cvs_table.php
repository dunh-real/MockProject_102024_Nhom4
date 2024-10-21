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
        Schema::table('CandidateCV', function (Blueprint $table) {
            //
            $table->timestamps(); // Thêm cột created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('CandidateCV', function (Blueprint $table) {
            //
            $table->dropTimestamps(); // Xóa cột created_at và updated_at
        });
    }
};