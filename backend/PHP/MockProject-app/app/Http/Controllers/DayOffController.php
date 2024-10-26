<?php

namespace App\Http\Controllers;

use App\Http\Requests\Api\DayOff\ApproveRequest;
use App\Http\Requests\Api\DayOff\CreateRequest;
use App\Http\Requests\Api\DayOff\UpdateRequest;
use App\Http\Resources\DayOffResource;
use App\Models\DayOff;
use App\Services\DayOffService;
use Illuminate\Http\Request;

class DayOffController extends Controller
{
    protected $dayOffService;

    public function __construct(DayOffService $dayOffService)
    {
        $this->dayOffService = $dayOffService;
    }

    public function index(Request $request)
    {
        $result = $this->dayOffService->getList();
        return DayOffResource::apiPaginate($result, $request);
    }

    public function show(DayOff $dayOff)
    {
        return response()->success('The record was successfully gotten', new DayOffResource($dayOff));
    }

    public function showMyRequests($employeeID, Request $request)
    {
        $result = $this->dayOffService->getListByEmployeeID($employeeID);
        return DayOffResource::apiPaginate($result, $request);
    }

    public function store(CreateRequest $createRequest)
    {
        try {
            $requests = $createRequest->validated();

            $result = $this->dayOffService->create($requests);

            if ($result) {
                return response()->success_created('The record was successfully created', new DayOffResource($result));
            }
        }catch(\Exception $e){
            return response()->server_error('Error occurred', $e->getMessage());
        }   
    }

    public function update(DayOff $dayOff, UpdateRequest $updateRequest)
    {
        try{
            $request = $updateRequest->validated();

            $result = $this->dayOffService->update($dayOff, $request);

            if ($result) {
                return response()->success('The record was successfully updated', new DayOffResource($dayOff));
            }            
        }catch(\Exception $e){
            return response()->server_error('Error occurred', $e->getMessage());
        }  
    }

    public function destroy(DayOff $dayOff)
    {
        try{
            if ($dayOff->exists) {
                // Xóa mềm (cập nhật status thành 1)
                $result = $this->dayOffService->destroy($dayOff);
            } else {
                throw new \Exception('The record does not exist or has not been retrieved correctly.');
            }
            if ($result) {
                return response()->success_no_content('The record was successfully soft deleted');
            }        
        }catch(\Exception $e){
            return response()->server_error('Error occurred', $e->getMessage());
        }        
    }

    public function restore(DayOff $dayOff)
    {
        try {
            if ($dayOff->is_deleted()) {
                $result = $this->dayOffService->restore($dayOff);
                if ($result) {
                    return response()->success('The record was successfully restored', new DayOffResource($dayOff));
                }
            } else {
                throw new \Exception('Can not delete because the record have not been deleted.');
            }
            
        } catch (\Exception $e) {
            return response()->server_error('Error occurred', $e->getMessage());
        }
    }

    public function approve(DayOff $dayOff, ApproveRequest $approveRequest)
    {
        try{
            $request = $approveRequest->validated();

            $result = $this->dayOffService->approve($dayOff, $request);

            if ($result) {
                return response()->success('The record was successfully updated', new DayOffResource($dayOff));
            }            
        }catch(\Exception $e){
            return response()->server_error('Error occurred', $e->getMessage());
        }  
    }
}
