<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fine;
use App\Models\Payment;
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

    if (!$fine) {
      return response()->json([
        'success' => false,
        'message' => 'Fine not found.'
      ], Response::HTTP_NOT_FOUND);
    }

    $payment = new Payment();
    $payment->fine_id = $fineId;
    $payment->amount = $request->input('amount');
    $payment->method = $request->input('method');
    $payment->resident_id = $fine->resident_id;
    $payment->save();

    // thanh toán xong thì cập nhật trạng thái unpaid thành paid
    $fine->status = 'Paid';
    $fine->save();

    return response()->json([
      'success' => true,
      'message' => 'Fine paid successfully. Proof of payment saved.',
      'data' => $payment
    ], Response::HTTP_OK);
  }






}
