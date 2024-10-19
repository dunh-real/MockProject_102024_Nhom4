<?php
namespace App\Services;

use App\Models\DayOff;
use Exception;
use Illuminate\Support\Facades\Log;

class DayOffService {
    protected $model;

    public function __construct(DayOff $dayOff)
    {
        $this->model = $dayOff;
    }

    public function getList() {
        return $this->model
            ->where('status', 1)
            ->orderBy('id');
    }

    public function create($params)
    {
        try{
            $params['status']=1;
            $params['is_approved']=2;
            return $this->model->create($params);
        }catch(\Exception $exception){
            Log::error($exception);
            throw new \Exception($exception->getMessage());
            return false;
        }
        
    }

    public function update($dayOff, $param)
    {
        try{
            return $dayOff->update($param);
        }catch(Exception $exception){
            Log::error($exception);
            throw new \Exception($exception->getMessage());
            return false;
        }
    }

    public function destroy($dayOff)
    {
        try{
            return $dayOff->softDelete();
        }catch(\Exception $exception){
            Log::error($exception);
            throw new \Exception($exception->getMessage());
            return false;
        }  
    }

    public function restore($dayOff)
    {
        try{
            return $dayOff->restore();
        }catch(Exception $exception){
            Log::error($exception);
            throw new \Exception($exception->getMessage());
            return false;
        }  
    }

    public function approve($dayOff, $param)
    {
        try{

            return $dayOff->update($param);
        }catch(Exception $exception){
            Log::error($exception);
            throw new \Exception($exception->getMessage());
            return false;
        }  
    }
}