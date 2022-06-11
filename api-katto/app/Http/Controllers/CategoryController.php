<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Category $categories)
    {
        $categories = $categories->newQuery();

        if (request()->has('name')) {
            $categories->where('name','like',"%".request()->name."%");
        }

        return new CategoryCollection($categories->orderBy('name')->paginate(6));
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function create(CategoryRequest $request)
    {
        Category::create([
            'code' => $request->code,
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->update([
            'code' => $request->code,
            'name' => $request->name
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
