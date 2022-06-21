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
        return searchByName($categories, '', 'App\Http\Resources\Category\CategoryCollection', true, '');
    }

    public function all()
    {
        return new CategoryCollection(Category::orderBy('name')->get());
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    public function create(CategoryRequest $request)
    {
        $code = getCode('CA-');
        Category::create([
            'code' => $code,
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->update([
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
