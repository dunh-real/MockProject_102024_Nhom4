<?php

namespace App\Http\Controllers;

use App\Http\Requests\Api\Staff\CreateRequest;
use App\Http\Requests\Api\Staff\UpdateRequest;
use App\Models\Staff;
use Illuminate\Http\Request;
use App\Http\Resources\StaffResource;
use App\Providers\ResponseServiceProvider;
use App\Services\StaffService;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules\Exists;

class StaffController extends Controller
{
    protected $staffService;

    public function __construct(StaffService $staffService)
    {
        $this->staffService = $staffService;
    }
    public function index(Request $request)
    {
        $result = $this->staffService->getAll();
        return response()->success("List staff members retrieved successfully", StaffResource::apiPaginate($result, $request));
    }

    public function show(Staff $staff)
    {
        return response()->success("Staff member retrieved successfully", new StaffResource($staff));
    }

    public function store(CreateRequest $createRequest)
    {
        $requests = $createRequest->validated();

        $result = $this->staffService->create($requests);
        if ($result) {
            return response()->success_created("Staff member was created successfully", new StaffResource($result));
        } else {
            return response()->server_error("Staff member was created unsuccessfully", "Validation error or missing required fields");
        }
    }

    public function update(Staff $staff, UpdateRequest $updateRequest)
    {
        $request = $updateRequest->validated();

        $result = $this->staffService->update($staff, $request);
        if ($result) {
            return response()->success("Staff member updated successfully", new StaffResource($staff));
        } else {
            return response()->server_error("Staff member updated unsuccessfully", "Validation error or missing required fields");
        }
    }

    public function destroy(Staff $staff)
    {
        try {
            if ($staff->exists() && !$staff->isSoftDelete()) {
                $result = $this->staffService->destroy($staff);
            } else {
                throw new \Exception('The record does not exist or has not been retrieved correctly.');
            }

            if ($result) {
                return response()->success_no_content("Staff member soft-deleted successfully");
            }
        } catch (\Exception $exception) {
            return response()->server_error("Staff member soft-deleted unsuccessfully", $exception->getMessage());
        }
    }

    public function restore(Staff $staff)
    {
        try {
            if ($staff->isSoftDelete()) {
                $result = $this->staffService->restore($staff);
            } else {
                throw new \Exception('The record exists or has not been retrieved correctly');
            }
            if ($result) {
                return response()->success("Staff member restore successfully", new StaffResource($staff));
            }
        } catch (\Exception $exception) {
            return response()->server_error("Staff member restore unsuccessfully", $exception->getMessage());
        }
    }
}