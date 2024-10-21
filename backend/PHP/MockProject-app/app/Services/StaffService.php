<?php

namespace App\Services;

use App\Models\Staff;
use Exception;
use Illuminate\Support\Facades\Log;

class StaffService
{
    protected $model;
    public function __construct(Staff $staff)
    {
        $this->model = $staff;
    }

    public function getAll()
    {
        return $this->model->where('status', 1)->orderBy('id', 'ASC');
    }

    public function create($params)
    {
        try {
            $params['status'] = 1;
            $staff = $this->model->create($params);
            return $staff;

        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }

    public function update(Staff $staff, $params)
    {
        try {
            return $staff->update($params);
        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }

    public function destroy(Staff $staff)
    {
        try {
            return $staff->softDelete();
        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }

    public function restore(Staff $staff)
    {
        try {
            $staff['status'] = 1;
            return $staff->save();
        } catch (Exception $exception) {
            Log::error($exception);
            return false;
        }
    }
}