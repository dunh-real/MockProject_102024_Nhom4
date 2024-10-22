<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ResidentComplaintController extends Controller
{
  public $successStatus = 200;

  public function getComplaints()
  {
    $complaints = Complaint::all()->toArray();

    if (!$complaints) {
      return response()->json([
        'success' => false,
        'message' => 'No complaints found'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'response' => 'success',
      'message' => "Data retrieved successfully",
      'data' => $complaints,
    ], Response::HTTP_OK);
  }

  // Get complaint by resident ID
  public function getResidentComplaint($id)
  {
    $complaint = Complaint::all()->where('resident_id', $id)->toArray();
    if (!$complaint) {
      return response()->json([
        'success' => false,
        'message' => 'Complaint not found'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'success' => true,
      'data' => $complaint
    ], Response::HTTP_OK);
  }

  public function create()
  {
    //
  }

  public function createComplaint(Request $request)
  {
    // Xác thực dữ liệu đầu vào
    $validatedData = $request->validate([
      'date' => 'required|date',
      'description' => 'required|string|max:255',
      'resident_id' => 'required|integer',
      'employee_id' => 'required|integer',
      'request_type' => 'required|string',
      'solution' => 'required|string',
    ]);

    try {
      $complaint = Complaint::create($validatedData);

      return response()->json([
        'success' => true,
        'message' => 'Complaint created successfully',
        'data' => $complaint
      ], Response::HTTP_CREATED);

    } catch (\Exception $e) {
      return response()->json([
        'response' => 'error',
        'message' => 'Failed to create complaint',
        'error' => $e->getMessage()
      ], 500);
    }
  }

  public function show(string $id)
  {
    $complaint = Complaint::find($id);

    if (!$complaint) {
      return response()->json([
        'success' => false,
        'message' => 'Complaint not found'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'success' => true,
      'data' => $complaint
    ], Response::HTTP_OK);
  }

  public function edit(string $id)
  {
    //
  }

  public function update(Request $request, string $id)
  {
    //
  }

  public function destroy(string $id)
  {
    $complaint = Complaint::find($id);

    if (!$complaint) {
      return response()->json([
        'success' => false,
        'message' => 'Complaint not found'
      ], Response::HTTP_NOT_FOUND);
    }

    $complaint->delete();

    return response()->json([
      'success' => true,
      'message' => 'Complaint deleted successfully'
    ], Response::HTTP_OK);
  }
}
