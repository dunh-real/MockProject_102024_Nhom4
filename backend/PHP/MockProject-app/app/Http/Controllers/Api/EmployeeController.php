<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\EmployeeContract;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EmployeeController extends Controller
{
  public function show($id)
  {
    $employee = Employee::find($id);

    if (!$employee) {
      return response()->json([
        'success' => false,
        'message' => 'Employee not found'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'success' => true,
      'data' => $employee
    ], Response::HTTP_OK);
  }

  public function update(Request $request, $id)
  {
    $employee = Employee::find($id);

    if (!$employee) {
      return response()->json([
        'success' => false,
        'message' => 'Employee not found'
      ], Response::HTTP_NOT_FOUND);
    }

    $validatedData = $request->validate([
      'name' => 'sometimes|string|max:100',
      'email' => 'sometimes|email|max:100|unique:employees,email,' . $id,
      'phone_number' => 'sometimes|string|max:20',
      'avatar' => 'sometimes|string|max:255',
      'username' => 'sometimes|string|max:100|unique:employees,username,' . $id,
      'password' => 'sometimes|string|max:100'
    ]);

    $employee->update($validatedData);

    return response()->json([
      'success' => true,
      'message' => 'Employee profile updated successfully',
      'data' => $employee
    ], Response::HTTP_OK);
  }

  public function showContract($id)
  {
    $employee = Employee::with('contract')->find($id);

    if (!$employee || !$employee->contract) {
      return response()->json([
        'success' => false,
        'message' => 'Employee or contract not found'
      ], Response::HTTP_NOT_FOUND);
    }
   
    return response()->json([
      'success' => true,
      'data' => $employee->contract
    ], Response::HTTP_OK);
  }
}