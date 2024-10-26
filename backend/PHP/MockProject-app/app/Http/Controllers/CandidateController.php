<?php

namespace App\Http\Controllers;

use App\Models\Candidate; // Model cho bảng candidates
use App\Models\Cv; // Model cho bảng employees
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;

class CandidateController extends Controller
{
    //
    public function addCandidatesToEmployee()
    {
        try {
            // Get IDs of candidates who passed
            $idCandidates = CV::where('status', 'Pass')
                ->select('candidate_id')
                ->get();
            // Find candidate info using the IDs
            $candidates = Candidate::find($idCandidates);
            // Loop through each candidate and add them to the employees table
            foreach ($candidates as $candidate) {
                // Check if employee already exists
                $existingEmployee = Employee::where('email', $candidate->email)->first();
                if (!$existingEmployee) {
                    // Create new employee record
                    $employee = Employee::create([
                        'name' => $candidate->name,
                        'birth_date' => $candidate->birthday,
                        'email' => $candidate->email,
                        'phone_number' => $candidate->phone,
                        'username' => strtolower(str_replace(' ', '', $candidate->name)), // Tạo username từ name viết liền
                        'password' => Hash::make('123456789'), // Mật khẩu mặc định là 123456789 và được mã hóa
                        'role_id' => 4,
                        'status' => 1,
                    ]);
                    // Update the candidate record to link it to the newly created employee
                    $candidate->update([
                        'employee_id' => $employee->id,
                    ]);
                }
            }
            // Return success response
            return response()->json(
                ['message' => 'All passed candidates have been added to employees.',
                    "candidates" => $candidates,
                ],
            );
        } catch (\Exception $e) {
            //throw $th;
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()]);
        }
    }
}