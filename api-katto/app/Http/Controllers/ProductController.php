<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Product $products)
    {
        return searchByName($products, '', 'App\Http\Resources\ProductResource', false, '');
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    public function create(ProductRequest $request)
    {
        $code = getCode('P-');
        $date = date('Y-m-d');
        if ($request->file('image')) {
            $image = $request->file('image');
            $imageUrl = $image->storeAs("images/products", "{$code}-{$date}.{$image->extension()}");
        } else {
            $imageUrl = null;
        }

        Product::create([
            'category_id' => $request->category_id,
            'code' => $code,
            'name' => $request->name,
            'price' => $request->price,
            'commission_type' => $request->commission_type,
            'commission_value' => $request->commission_value,
            'image' => $imageUrl,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $date = date('Y-m-d');
        if ($request->file('image')) {
            \Storage::delete($product->image);

            $image = $request->file('image');
            $imageUrl = $image->storeAs("images/products", "{$product->code}-{$date}.{$image->extension()}");
        } else {
            $imageUrl = $product->image;
        }

        $product->update([
            'category_id' => $request->category_id,
            'code' => $request->code,
            'name' => $request->name,
            'price' => $request->price,
            'commission_type' => $request->commission_type,
            'commission_value' => $request->commission_value,
            'image' => $imageUrl,
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        \Storage::delete($product->image);

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
