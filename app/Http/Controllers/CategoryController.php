<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Category\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
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

    public function productByCategory(Category $category)
    {
        if (request()->has('name')) {
            $products = Product::where('category_id', $category->id)->where('name', 'like', '%' . request('name') . '%')->paginate(9);
            return response()->json([
                'data' => ProductResource::collection($products)
            ]);
        }
        
        $products = Product::where('category_id', $category->id)->paginate(9);
        return ProductResource::collection($products);
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
