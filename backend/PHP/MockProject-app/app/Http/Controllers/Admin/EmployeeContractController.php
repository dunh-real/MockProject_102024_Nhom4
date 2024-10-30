<?php

namespace App\Http\Controllers\Admin;
use App\Models\EmployeeContract;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class EmployeeContractController extends Controller
{
    public function index()
    {
        try {
            $contracts = EmployeeContract::all(); // Lấy tất cả bản ghi từ bảng EmployeeContract

            return response()->json([
                'message' => 'Employee contracts retrieved successfully',
                'data' => $contracts
            ], 200);
        } catch (\Exception $e) {
            // Ghi log lỗi chi tiết
            Log::error('Error fetching employee contracts: ' . $e->getMessage());

            return response()->json([
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

}
