<?php

namespace App\Http\Controllers;

use App\Models\ClassTraining;
use App\Models\TrainingSchedule;
use App\Models\TrainingRegistration;
use Illuminate\Http\Request;

class TrainingProgramController extends Controller
{
    // API to retrieve all classes
    public function showAllClasses()
    {
        $classes = ClassTraining::all();

        return response()->json([
            'message' => 'All classes retrieved successfully.',
            'success' => true,
            'data' => $classes
        ], 200);
    }

    // API to register an employee for a class
    public function register(Request $request)
    {
        $request->validate([
            'training_schedule_id' => 'required|integer|exists:trainingschedule,id',
            'employee_id' => 'required|integer|exists:employee,id'
        ]);

        $trainingSchedule = TrainingSchedule::find($request->training_schedule_id);

        // Check if the employee is already registered for this class
        $existingRegistration = TrainingRegistration::where('training_schedule_id', $request->training_schedule_id)
            ->where('employee_id', $request->employee_id)
            ->first();

        if ($existingRegistration) {
            return response()->json([
                'message' => 'The employee is already registered for this class.',
                'success' => false
            ], 400);
        }

        // Register for the class and increment Participant
        TrainingRegistration::create([
            'training_schedule_id' => $request->training_schedule_id,
            'employee_id' => $request->employee_id
        ]);

        $trainingSchedule->increment('Participant');

        return response()->json([
            'message' => 'Class registration successful!',
            'success' => true,
            'data' => $trainingSchedule
        ], 200);
    }

    // API to unregister an employee from a class
    public function unregister(Request $request)
    {
        $request->validate([
            'training_schedule_id' => 'required|integer|exists:trainingschedule,id',
            'employee_id' => 'required|integer|exists:employee,id'
        ]);

        $trainingSchedule = TrainingSchedule::find($request->training_schedule_id);

        // Check if the employee is registered for this class
        $existingRegistration = TrainingRegistration::where('training_schedule_id', $request->training_schedule_id)
            ->where('employee_id', $request->employee_id)
            ->first();

        if (!$existingRegistration) {
            return response()->json([
                'message' => 'The employee is not registered for this class.',
                'success' => false
            ], 400);
        }

        // Unregister from the class and decrement Participant
        $existingRegistration->delete();
        $trainingSchedule->decrement('Participant');

        return response()->json([
            'message' => 'Class unregistration successful!',
            'success' => true,
            'data' => $trainingSchedule
        ], 200);
    }
}
