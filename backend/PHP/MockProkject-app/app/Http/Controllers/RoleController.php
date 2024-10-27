<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    // Lấy danh sách tất cả các Role
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles, 200);
    }

    // Lấy chi tiết Role
    public function show($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }
        return response()->json($role, 200);
    }

    // Tạo mới Role
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:100'
        ]);

        $role = Role::create($validatedData);
        return response()->json($role, 201);
    }

    // Cập nhật Role
    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'string|max:100'
        ]);

        $role->update($validatedData);
        return response()->json($role, 200);
    }

    // Xóa Role
    public function destroy($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $role->delete();
        return response()->json(['message' => 'Role deleted'], 200);
    }
}
