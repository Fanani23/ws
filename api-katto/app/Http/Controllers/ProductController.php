<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('name')->paginate(6);
        return ProductResource::collection($products);
    }

    public function create()
    {
        Product::create([
            'category_id' => request()->category_id,
            'code' => request()->code,
            'name' => request()->name,
            'price' => request()->price,
            'fee_commission_rupiah' => request()->fee_commission_rupiah,
            'fee_commission_percent' => request()->fee_commission_percent,
            'image' => request()->image,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    public function update(Product $product)
    {
        $product->update([
            'category_id' => request()->category_id,
            'code' => request()->code,
            'name' => request()->name,
            'price' => request()->price,
            'fee_commission_rupiah' => request()->fee_commission_rupiah,
            'fee_commission_percent' => request()->fee_commission_percent,
            'image' => request()->image,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
