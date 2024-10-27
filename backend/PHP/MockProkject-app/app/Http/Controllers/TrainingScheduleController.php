<?php

namespace App\Http\Controllers;

use App\Models\TrainingSchedule;
use Illuminate\Http\Request;

class TrainingScheduleController extends Controller
{
    // Lấy tất cả các lịch đào tạo
    public function index(Request $request)
    {
        $query = TrainingSchedule::query();

        if ($request->has('class_training_id')) {
            $query->where('class_training_id', $request->input('class_training_id'));
        }

        if ($request->has('start_date')) {
            $query->whereDate('start_date', '>=', $request->input('start_date'));
        }

        if ($request->has('end_date')) {
            $query->whereDate('end_date', '<=', $request->input('end_date'));
        }

        if ($request->has('location')) {
            $query->where('location', 'LIKE', '%' . $request->input('location') . '%');
        }

        if ($request->has('employee_id')) {
            $query->where('employee_id', $request->input('employee_id'));
        }

        if ($request->has('status')) {
            $query->where('status', $request->input('status'));
        }

        $perPage = $request->input('per_page', 15);

        $schedules = $query->with('employee', 'classTraining')->paginate($perPage);

        return response()->json([
            'message' => 'Training schedules search results',
            'success' => true,
            'data' => $schedules
        ], 200);

        $schedules = TrainingSchedule::with('employee', 'classTraining')->get();
        return response()->json([
            'message' => 'Training schedules retrieved successfully',
            'success' => true,
            'data' => $schedules
        ], 200);
    }

    // Lấy chi tiết một lịch đào tạo
    public function show($id)
    {
        $schedule = TrainingSchedule::with('employee', 'classTraining')->find($id);

        if (!$schedule) {
            return response()->json([
                'message' => 'Training schedule not found',
                'success' => false
            ], 404);
        }

        return response()->json([
            'message' => 'Training schedule retrieved successfully',
            'success' => true,
            'data' => $schedule
        ], 200);
    }

    // Tạo mới một lịch đào tạo
    public function store(Request $request)
    {
        // Xác thực dữ liệu đầu vào
        $validatedData = $request->validate([
            'class_training_id' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'location' => 'required|string|max:100',
            'time' => 'required',
            'status' => 'required|boolean',
            'Participant' => 'required|integer',
            'employee_id' => 'required|integer'
        ]);

        $schedule = TrainingSchedule::create($validatedData);

        return response()->json([
            'message' => 'Training schedule created successfully',
            'success' => true,
            'data' => $schedule
        ], 201);
    }

    // Cập nhật lịch đào tạo
    public function update(Request $request, $id)
    {
        $schedule = TrainingSchedule::find($id);

        if (!$schedule) {
            return response()->json([
                'message' => 'Training schedule not found',
                'success' => false
            ], 404);
        }

        $validatedData = $request->validate([
            'class_training_id' => 'integer',
            'start_date' => 'date',
            'end_date' => 'date',
            'location' => 'string|max:100',
            'time' => 'string',
            'status' => 'boolean',
            'Participant' => 'integer',
            'employee_id' => 'integer'
        ]);

        $schedule->update($validatedData);

        return response()->json([
            'message' => 'Training schedule updated successfully',
            'success' => true,
            'data' => $schedule
        ], 200);
    }

    // Xóa lịch đào tạo
    public function destroy($id)
    {
        $schedule = TrainingSchedule::find($id);

        if (!$schedule) {
            return response()->json([
                'message' => 'Training schedule not found',
                'success' => false
            ], 404);
        }

        // Xóa lịch đào tạo
        $schedule->delete();

        return response()->json([
            'message' => 'Training schedule deleted successfully',
            'success' => true
        ], 200);
    }
}
