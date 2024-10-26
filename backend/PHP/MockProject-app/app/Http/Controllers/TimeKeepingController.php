<?php

namespace App\Http\Controllers;

use App\Models\TimeKeeping;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TimeKeepingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $query = TimeKeeping::query();

        if ($request->has('employee_id')) {
            $query->where('employee_id', $request->employee_id);
        }
    
        if ($request->has('date')) {
            $query->where('date', $request->date);
        }
    
        $timeKeepings = $query->get();
    
        return response()->json($timeKeepings);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate([
            'date' => 'required|date',
            'check_in_time' => 'required',
            'check_out_time' => 'nullable',
            'employee_id' => 'required|exists:employees,id',
        ]);
    
        $timeKeeping = TimeKeeping::create($validatedData);
    
        return response()->json(['message' => 'TimeKeeping created successfully', 'data' => $timeKeeping], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(TimeKeeping $timeKeeping)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TimeKeeping $timeKeeping)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TimeKeeping $timeKeeping)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TimeKeeping $timeKeeping)
    {
        //
    }
    //Update check-in time
    public function updateCheckOut(Request $request, $id)
    {
        $request->validate([
            'check_out_time' => 'required',
        ]);

        $timeKeeping = TimeKeeping::findOrFail($id);
        $timeKeeping->update(['check_out_time' => $request->check_out_time]);

        return response()->json(['message' => 'Check-out time updated', 'data' => $timeKeeping]);
    }
    //Calculate total hours worked
    public function calculateTotalHours($id)
    {
        $timeKeeping = TimeKeeping::findOrFail($id);

        if ($timeKeeping->check_in_time && $timeKeeping->check_out_time) {
            $checkIn = Carbon::parse($timeKeeping->check_in_time);
            $checkOut = Carbon::parse($timeKeeping->check_out_time);
            $hoursWorked = $checkIn->diffInHours($checkOut);

            return response()->json(['total_hours' => $hoursWorked]);
        }

        return response()->json(['message' => 'Incomplete attendance record'], 400);
    }
}
