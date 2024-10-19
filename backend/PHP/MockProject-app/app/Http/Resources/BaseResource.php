<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BaseResource extends JsonResource
{
    public static function apiPaginate($query, $request)
    {
        $pageSize = $request->page_size ?? 4;
        return static::collection($query->paginate($pageSize)->appends($request->query()))
            ->response()
            ->getdata();
    }
}
