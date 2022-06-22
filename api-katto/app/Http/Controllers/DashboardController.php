<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Transaction;
use App\Models\TransactionItem;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $transactionItems = TransactionItem::all();
        $total_comission = $transactionItems->sum('fee');
        $total_price_after_discount = $transactionItems->sum('price_after_discount');

        $total_transactions = Transaction::count();
        $total_revenue = $transactionItems->sum('price');
        $total_profit = $total_price_after_discount - $total_comission;
        $total_visitor = '999';

        return response()->json([
            'total_transactions' => $total_transactions,
            'total_revenue' => $total_revenue,
            'total_profit' => $total_profit,
            'total_visitor' => $total_visitor,
        ]);
    }

    public function membership()
    {
        $membership = [
            'reguler' => Customer::where('membership', 'reguler')->get()->count(),
            'vip' => Customer::where('membership', 'vip')->get()->count(),
        ];

        return response()->json([
            'membership' => $membership
        ]);
    }

    public function category()
    {
        $category = [];
        $transactionItemsWithData = TransactionItem::with('product', 'product.category')->get();
        foreach ($transactionItemsWithData as $key => $item) {
            array_push($category, $item->product->category->name);
        }

        $category_count = array_count_values($category);
        arsort($category_count);
        $result = array_slice($category_count, 0, 10, true);

        return response()->json([
            'category' => $result
        ]);
    }
}
