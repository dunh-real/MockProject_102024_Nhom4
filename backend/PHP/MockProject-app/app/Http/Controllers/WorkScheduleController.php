<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\WorkSchedule;
use App\Models\Building;

class WorkScheduleController extends Controller
{

   public function getListWorkSchedule()
   {
      $workSchedules = WorkSchedule::all();
      return response()->json($workSchedules);
   }
   //1. Get a monthly work schedule
   public function getMonthlySchedule($employeeId, $month)
   {
      $schedules = WorkSchedule::where('employee_id', $employeeId)
         ->whereMonth('date', $month)
         ->get();
      return response()->json($schedules);
   }
   //2. View detailed work schedule for the day
   public function getScheduleDetails($employeeId, $date)
   {
      try {
         // Query the work schedule based on employee ID and date
         $schedule = WorkSchedule::with('building')
            ->where('employee_id', $employeeId)
            ->where('date', $date)
            ->firstOrFail();

         // Format the schedule details according to database schema
         $details = [
            'schedule_id' => $schedule->id,
            'working_hours' => [
               'start' => $schedule->start_time,
               'end' => $schedule->end_time
            ],
            'shift_type' => $schedule->shift_type,
            'location' => [
               'building_id' => $schedule->building_id,
               'building_name' => $schedule->building->name_build,
               'building_location' => $schedule->building->location
            ],
            'date' => $schedule->date
         ];

         return response()->json([
            'status' => 'success',
            'data' => $details
         ], 200);

      } catch (ModelNotFoundException $e) {
         return response()->json([
            'status' => 'error',
            'message' => 'Schedule not found for the specified employee and date'
         ], 404);
      } catch (\Exception $e) {
         return response()->json([
            'status' => 'error',
            'message' => 'An error occurred while fetching the schedule'
         ], 500);
      }
   }
   // 3.Send notification of work schedule changes to employees
   public function notifyScheduleChange(Request $request)
   {
       // Validate the incoming request data
       $validatedData = $request->validate([
         'employee_id' => 'required|exists:employee,id',
         'schedule_id' => 'required|exists:work_schedules,id',
     ]);

     // Fetch employee and schedule data for verification and notification
     $employee = Employee::findOrFail($validatedData['employee_id']);
     $schedule = WorkSchedule::findOrFail($validatedData['schedule_id']);

     // Response on successful notification dispatch
     return response()->json([
         'message' => 'Notification sent to employee',
         'employee' => $employee->name,
         'schedule_id' => $schedule->id
     ], 200);
   }
}
