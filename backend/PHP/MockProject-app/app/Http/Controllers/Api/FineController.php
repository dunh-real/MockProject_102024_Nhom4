<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fine;
use App\Models\LeaseContract;
use App\Models\Payment;
use App\Models\ResidentAmenity;
use App\Models\ResidentUtility;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FineController extends Controller
{
  public function getFines()
  {
    $fines = Fine::all()->toArray();
    if (!$fines) {
      return response()->json([
        'success' => false,
        'message' => 'No fines were found'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'success' => true,
      'message' => "Data retrieved successfully",
      'data' => $fines
    ], Response::HTTP_OK);
  }

  public function getResidentFines($id)
  {
    // Lấy danh sách phí phạt theo id của resident
    $fines = Fine::with([
      'resident' => function ($query) {
        $query->select('id', 'name', 'email'); // Resident details
      },
      'payment' => function ($query) {
        $query->select('fine_id', 'method', 'date'); // Payment details
      }
    ])
      ->select('id', 'date', 'fee', 'reason', 'status', 'resident_id')
      ->where('resident_id', $id)
      ->get();

    if ($fines->isEmpty()) {
      return response()->json([
        'success' => false,
        'message' => 'No fines found for this resident.'
      ], Response::HTTP_NOT_FOUND);
    }

    return response()->json([
      'success' => true,
      'message' => 'Fines retrieved successfully.',
      'data' => $fines
    ], Response::HTTP_OK);
  }

  // Xác nhận thanh toán
  public function payFine(Request $request, $fineId)
  {
    $fine = Fine::find($fineId);
    $residentId = $fine->resident_id;

    $leaseContract = LeaseContract::where("resident_id", $residentId)->select("id")->first();

    $residentUtility = ResidentUtility::where('resident_id', $residentId)->select("utility_id")->first();

    $residentAmenity = ResidentAmenity::where('resident_id', $residentId)->select("amenity_id")->first();

    if (!$fine) {
      return response()->json([
        'success' => false,
        'message' => 'Fine not found.'
      ], Response::HTTP_NOT_FOUND);
    }

    // Thông tin thanh toán
    $payment = new Payment();
    $payment->fine_id = $fineId;
    $payment->amount = $request->input('amount');
    $payment->method = $request->input('method');
    $payment->resident_id = $fine->resident_id;
    $payment->date = now();

    $payment->lease_contract_id = $leaseContract ? $leaseContract->id : null;
    $payment->amenity_id = $residentAmenity ? $residentAmenity->amenity_id : null;
    $payment->utility_id = $residentUtility ? $residentUtility->utility_id : null;

    // Save the payment
    $payment->save();

    // After payment, update the fine status to 'Paid'
    $fine->status = 'Paid';
    $fine->save();

    // Return success response with payment data
    return response()->json([
      'success' => true,
      'message' => 'Fine paid successfully. Proof of payment saved.',
      'data' => $payment
    ], Response::HTTP_OK);
  }
}
