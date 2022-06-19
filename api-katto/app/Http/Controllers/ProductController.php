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
        $products = $products->newQuery();

        if (request()->has('name')) {
            $products->where('name', 'like', "%" . request()->name . "%");
        }

        return ProductResource::collection($products->orderBy('name')->paginate(6));
    }

    public function create(ProductRequest $request)
    {
        $code = getCode('P-');
        $date = date('Y-m-d');
        if ($request->file('image')) {
            $image = $request->file('image');
            $imageUrl = $image->storeAs("images/products", "{$code}-{$date}.{$image->extension()}");
        } else {
            $imageUrl = 'null';
        }

        Product::create([
            'category_id' => $request->category_id,
            'code' => $code,
            'name' => $request->name,
            'price' => $request->price,
            'commission_type' => $request->commission_type,
            'commission_value' => $request->fee_commission_value,
            'image' => $imageUrl,
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
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
            'name' => $request->name,
            'price' => $request->price,
            'commission_type' => $request->commission_type,
            'commission_value' => $request->fee_commission_value,
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
