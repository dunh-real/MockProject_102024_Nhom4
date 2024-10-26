<?php

namespace App\Http\Controllers;

use App\Models\Cv;
use Illuminate\Http\Request;

class CandidateCVController extends Controller
{
    public function getListCVs(Request $request)
    {
        try {
            // Retrieve the number of records per page from the query string, defaulting to 10 if not provided
            $limit = $request->input('limit', 10); // If the limit parameter is not present, default to 10

            // Query and paginate the CVs
            $listcvs = CV::where("CandidateCV.id", "!=", "0") // Ensuring that we are querying valid records
                ->join('Candidate', 'CandidateCV.candidate_id', '=', 'Candidate.id') // Joining with the Candidate table
                ->select('CandidateCV.*', 'Candidate.name as candidatesName', 'Candidate.position_applied as appliedRole') // Selecting relevant fields
                ->paginate($limit); // Paginate the results based on the limit

            // Check if the list of CVs is not empty and return the data
            if ($listcvs->isNotEmpty()) {
                return response()->json($listcvs); // Return the paginated list of CVs as JSON
            } else {
                return response()->json(['error' => 'CV not found'], 404); // Return a 404 error if no CVs are found
            }

        } catch (\Exception $e) {
            // Catch any exceptions that occur during the execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }
    }

    public function getListCvByStatus(Request $request, String $status)
    {
        try {
            // Retrieve the number of records per page from the query string, defaulting to 10 if not provided
            $limit = $request->input('limit', 10); // If the limit parameter is not present, default to 10

            // Build the query to get CVs based on status
            $query = CV::where('status', $status) // Filter by the given status
                ->join('Candidate', 'CandidateCV.candidate_id', '=', 'Candidate.id') // Join with the Candidate table to get additional information
                ->select('CandidateCV.*', 'Candidate.name as candidatesName', 'Candidate.position_applied as appliedRole'); // Select relevant fields

            // Execute pagination on the query results
            $listcvs = $query->paginate($limit); // Get paginated results based on the limit

            // Check if any CVs are found and return the data
            if ($listcvs->isNotEmpty()) { // Use isNotEmpty() to check if the collection has items
                return response()->json($listcvs); // Return the paginated list of CVs as JSON
            } else {
                return response()->json(['error' => 'CVs not found'], 404); // Return a 404 error if no CVs are found
            }

        } catch (\Exception $e) {
            // Catch any exceptions that occur during the execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }
    }

    public function getCvDetail(string $id)
    {
        try {
            // Find the CV based on the provided id
            $cv = CV::where('CandidateCV.id', $id) // Query for the CV with the specified id
                ->join('Candidate', 'CandidateCV.candidate_id', '=', 'Candidate.id') // Join with the Candidate table to get additional information
                ->select('CandidateCV.*', 'Candidate.*') // Select all fields from both tables
                ->first(); // Retrieve the first matching record

            // Check if a CV was found and return the data
            if ($cv) {
                return response()->json($cv); // Return the CV as a JSON response if found
            } else {
                return response()->json(['error' => 'CV not found'], 404); // Return a 404 error if no CV is found
            }

        } catch (\Exception $e) {
            // Catch any exceptions that occur during the execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }
    }

    public function updateStatusCV(Request $request, $id)
    {
        try {
            // Find the CV by its ID
            $cv = CV::find($id); // Attempt to retrieve the CV with the specified ID

            if ($cv) {
                // Update the status of the CV (accepted or rejected) based on the request input
                $cv->update([
                    'status' => $request["status"], // Update the 'status' field with the value from the request
                ]);

                // Return a successful response with the updated CV data
                return response()->json([
                    "data" => $cv, // Include the updated CV in the response
                    "message" => "Update status successfully", // Success message
                ], 200); // HTTP status code 200 for success

            } else {
                // Return a response if the CV was not found
                return response()->json(['message' => 'CV not found'], 404); // HTTP status code 404 for not found
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occur during execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }
    }

    public function deleteCvById($id)
    {
        try {
            // Attempt to find the CV by its ID
            $cv = CV::find($id); // Retrieve the CV record with the specified ID

            if ($cv) {
                // If the CV exists, perform a soft delete
                $cv->delete(); // Soft delete the CV record
                return response()->json(['message' => 'CV has been soft deleted successfully']); // Return success message
            } else {
                // If the CV is not found, return a not found error response
                return response()->json(['error' => 'CV not found'], 404); // HTTP status code 404 for not found
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occur during execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }
    }

    public function restoreCvById($id)
    {

        try {
            // Attempt to find the CV by its ID, including soft-deleted records
            $cv = CV::withTrashed()->find($id); // Retrieve the CV record with the specified ID, including those that are soft-deleted

            if ($cv) {
                // If the CV exists, restore the soft-deleted record
                $cv->restore(); // Restore the CV record
                return response()->json(['message' => 'CV has been restored successfully']); // Return success message
            } else {
                // If the CV is not found, return a not found error response
                return response()->json(['error' => 'CV not found'], 404); // HTTP status code 404 for not found
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occur during execution
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500); // Return a 500 error with the exception message
        }

    }

}