<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with('products')->orderBy('name')->paginate(6);
        return CategoryResource::collection($categories);
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function create()
    {
        Category::create([
            'code' => request()->code,
            'name' => request()->name
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(Category $category)
    {
        $category->update([
            'code' => request()->code,
            'name' => request()->name
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
