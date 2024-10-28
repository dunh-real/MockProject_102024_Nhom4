<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{

    public function getListComplaintRequest(Request $request)
    {
        try {
            // Get the limit for pagination from the query string, default to 10 if not provided
            $limit = $request->input('limit', 10);

            // Query the database for complaints, joining with the Resident table to get requester names
            $listRequest = Complaint::where("Complaint.id", "!=", "0")
                ->join('Resident', 'Complaint.resident_id', '=', 'Resident.id')
                ->select('Complaint.*', 'Resident.name as Requester')
                ->paginate($limit); // Paginate the result based on the limit

            // Check if the request list is not empty and return the data
            if ($listRequest->isNotEmpty()) {
                return response()->json($listRequest);
            } else {
                // Return a 404 error if no requests are found
                return response()->json(['error' => 'Request not found'], 404);
            }
        } catch (\Exception $e) {
            // Return a 500 error with the exception message in case of failure
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    public function getDetailComplaintRequest(string $id)
    {
        try {
            // Query the complaint by ID, joining with the Resident table to get the requester's name
            $request = Complaint::where("Complaint.id", $id)
                ->join('Resident', 'Complaint.resident_id', '=', 'Resident.id')
                ->select('Complaint.*', 'Resident.name as Requester')
                ->first(); // Retrieve the first matching record

            // If the request exists, return it as a JSON response
            if ($request) {
                return response()->json($request);
            } else {
                // If not found, return a 404 error with a message
                return response()->json(['error' => 'Not found detail of Request'], 404);
            }
        } catch (\Exception $e) {
            // Return a 500 error with the exception message in case of failure
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }

    }

    public function createComplaintRequest(Request $request)
    {
        try {
            // Validate input fields with rules for required fields and maximum lengths
            $validated = $request->validate([
                'resident_id' => 'required|max:50',
                'request_type' => 'required|max:255',
                'status' => 'required|max:50',
                'description' => 'required|max:255',
                'solution' => 'required|max:255',
            ], [
                // Custom error messages for missing required fields
                'resident_id.required' => 'Please fill in the requester',
                'request_type.required' => 'Please fill in the request type',
                'status.required' => 'Please fill in the status',
                'description.required' => 'Please fill in the description',
                'solution.required' => 'Please fill in the solution',
            ]);

            // Get all the request data and add the current date for the 'date' field
            $complaintData = $request->all();
            $complaintData['date'] = Carbon::now(); // Add the current date to 'date'

            // Create a new complaint request using the validated data
            $complaint = Complaint::create($complaintData);

            // Return a successful response with the created complaint data
            return response()->json([
                'message' => 'Complaint request created successfully',
                'complaint' => $complaint,
            ], 201);

        } catch (\Exception $e) {
            // Catch any exceptions and return an error response
            return response()->json([
                'error' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function editComplaintRequest($id)
    {
        try {
            // Find the complaint request by its ID
            $complaintRequest = Complaint::find($id);

            // Check if the complaint request exists
            if ($complaintRequest) {
                // If found, return the complaint request data as a JSON response
                return response()->json($complaintRequest);
            } else {
                // If not found, return a 404 error response with a custom error message
                return response()->json(['error' => 'Complaint Request not found'], 404);
            }
        } catch (\Exception $e) {
            // Catch any exceptions and return a 500 error response with the exception message
            return response()->json([
                'error' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function updateComplaintRequest(Request $request, $id)
    {
        try {
            // Validate the 'status' field from the request
            $validated = $request->validate([
                'status' => 'required',
            ], [
                'status.required' => 'Please fill in the status field',
            ]);
            // Find the complaint request by its ID
            $complaint = Complaint::find($id);
            // Check if the complaint request exists
            if ($complaint) {
                // If found, update the 'status' field with the new value from the request
                $complaint->update([
                    'status' => $request->input('status'),
                ]);
                // Return a success response with the updated complaint and success message
                return response()->json([
                    "data" => $complaint,
                    "message" => "Update status successfully",
                ]);
            } else {
                // If not found, return a 404 error with a custom message
                return response()->json(['message' => 'Complaint Request not found'], 404);
            }
        } catch (\Exception $e) {
            // Catch any exceptions and return a 500 error response with the exception message
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }

    }

    public function deleteComplaintRequest($id)
    {
        try {
            // Find the complaint request by its ID
            $complaint = Complaint::find($id);

            // Check if the complaint request exists
            if ($complaint) {
                // Perform a soft delete (mark the record as deleted without actually removing it from the database)
                $complaint->delete();

                // Return a success response after the soft delete
                return response()->json(['message' => 'Complaint Request has been soft deleted successfully']);

            } else {
                // If the complaint request is not found, return a 404 error with a custom message
                return response()->json(['error' => 'Complaint Request not found'], 404);
            }

        } catch (\Exception $e) {
            // Catch any exceptions and return a 500 error response with the exception message
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    public function restoreComplaintRequest($id)
    {

        try {
            // Find the complaint request by its ID, including soft-deleted records
            $complaint = Complaint::withTrashed()->find($id);

            // Check if the complaint request exists (either deleted or active)
            if ($complaint) {
                // Restore the soft-deleted record
                $complaint->restore();

                // Return a success response after the restoration
                return response()->json(['message' => 'Complaint Request has been restored successfully']);

            } else {
                // If the complaint request is not found, return a 404 error with a custom message
                return response()->json(['error' => 'Complaint Request not found'], 404);
            }

        } catch (\Exception $e) {
            // Catch any exceptions and return a 500 error response with the exception message
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }

    }

}