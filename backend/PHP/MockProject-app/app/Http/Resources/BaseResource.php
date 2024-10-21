<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\Paginator;

class BaseResource extends JsonResource
{
    public static function apiPaginate($query, Request $request)
    {
        $pageSize = $request->page_size ?? 2;

        return static::collection($query->paginate($pageSize)->appends($request->query()))
            ->response()
            ->getData();
    }
}