<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WorkSchedule;

class WorkScheduleController extends Controller
{
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
        $schedule = WorkSchedule::where('employee_id', $employeeId)
            ->where('date', $date)
            ->firstOrFail();

        // Thông tin thêm về công việc, nhiệm vụ
        $details = [
            'job_name' => $schedule->job_name,
            'tasks' => $schedule->tasks,
            'working_hours' => [
                'start' => $schedule->start_time,
                'end' => $schedule->end_time,
            ],
            'shift' => $schedule->shift_type,
            'location' => $schedule->building->name,
            'notes' => $schedule->notes,
        ];

        return response()->json($details);
    }
    // 3. API to get the list of employees working on a specific day
    public function notifyScheduleChange(Request $request)
    {
        $employeeId = $request->employee_id;
        $scheduleId = $request->schedule_id;
        
        
        return response()->json(['message' => 'Notification sent to employee']);
    }
}
