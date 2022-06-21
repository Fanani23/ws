<?php

namespace App\Http\Controllers;

use App\Http\Resources\Order\CommissionTransactionItemCollection;
use App\Models\TransactionItem;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->latest()->paginate(6);

        if (request()->has('from') && request()->has('to')) {
            $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->whereBetween('datetime', [request()->from, request()->to." 23:59:59"])->latest()->paginate(6);
        }

        // revenue = price / after discount?
        $total_revenue = $transactionItems->sum('price');
        $total_comission = $transactionItems->sum('fee');
        $total_profit = $transactionItems->sum('price_after_discount');
        return (new CommissionTransactionItemCollection($transactionItems))->additional(compact('total_revenue', 'total_comission', 'total_profit'));
    }
}
