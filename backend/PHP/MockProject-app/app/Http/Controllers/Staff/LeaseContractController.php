<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use App\Http\Requests\Staff\StoreLeaseContractRequest;
use App\Http\Requests\Staff\UpdateLeaseContractRequest;
use Illuminate\Http\Request;
use App\Models\LeaseContract;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class LeaseContractController extends Controller
{
    // 1.1 Create a New Lease Contract
    public function store(StoreLeaseContractRequest $request)
    {
        try {
            // Check if lease contract already exists for the given apartment and resident
            $existingContract = LeaseContract::where('apartment_id', $request->apartment_id)
                ->where('resident_id', $request->resident_id)
                ->first();

            if ($existingContract) {
                return response()->json(['error' => 'Lease contract already exists for this apartment and resident'], 409);
            }

            // Create the lease contract
            $leaseContract = LeaseContract::create($request->all());

            return response()->json([
                'message' => 'Lease contract created successfully',
                'contractId' => $leaseContract->id
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }

    // 1.2 Get All Lease Contracts
    public function index() 
    {
        try {
            Log::info('Fetching all lease contracts...');
            $contracts = LeaseContract::all();
            Log::info('Lease contracts retrieved:', ['contracts' => $contracts]);
            return response()->json([
                'message' => 'Lease contracts retrieved successfully',
                'data' => $contracts
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error retrieving lease contracts: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }

    // 1.3 Get a Lease Contract by ID
    public function show($id)
    {
        try {            
            $leaseContract = LeaseContract::find($id);
            if (!$leaseContract) {
                return response()->json(['error' => 'Lease contract not found'], 404);
            }

            return response()->json([
                'message' => 'Lease contract retrieved successfully',
                'data' => $leaseContract
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }

    // 1.4 Update a Lease Contract
    public function update(UpdateLeaseContractRequest $request, $id)
    {
        try {
            $leaseContract = LeaseContract::find($id);

            if (!$leaseContract) {
                return response()->json(['error' => 'Lease contract not found'], 404);
            }

            $leaseContract->update($request->all());

            return response()->json([
                'message' => 'Lease contract updated successfully',
                'data' => $leaseContract
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }

    // 1.5 Delete a Lease Contract
    public function destroy($id)
    {
        try {
            $leaseContract = LeaseContract::find($id);

            if (!$leaseContract) {
                return response()->json(['error' => 'Lease contract not found'], 404);
            }

            $leaseContract->delete();

            return response()->json([
                'message' => 'Lease contract deleted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }

    // 1.6 Search Lease Contracts
    public function search(Request $request)
    {
        try {
            $query = LeaseContract::query();

            $filters = ['start_date', 'end_date', 'apartment_id', 'resident_id', 'employee_id'];

            foreach ($filters as $filter) {
                if ($request->has($filter)) {
                    $query->where($filter, $request->$filter);
                }
            }

            $contracts = $query->get();
            // Log::info('Query executed: ' . $query->toSql());
            // Log::info('Contracts found: ' . json_encode($contracts));
            // Log::info('Bindings: ' . json_encode($query->getBindings()));
            // Log::info('Request Data: ' . json_encode($request->all()));

            if ($contracts->isEmpty()) {
                return response()->json(['error' => 'No lease contracts found!!!!'], 404);
            }

            return response()->json([
                'message' => 'Lease contracts found!!',
                'data' => $contracts
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'details' => $e->getMessage()], 500);
        }
    }
}
