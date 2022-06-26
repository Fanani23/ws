<?php

namespace App\Http\Controllers;

use App\Http\Resources\Order\CommissionTransactionItemCollection;
use App\Models\Transaction;
use App\Models\TransactionItem;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->latest()->paginate(9);

        if (request()->has('from') && request()->has('to')) {
            $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->whereBetween('datetime', [request()->from, request()->to." 23:59:59"])->latest()->paginate(9);
        }

        if (request()->has('searchCode')) {
            $transactionId = Transaction::where('code', request()->searchCode)->first()->id;
            $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->where('transaction_id', $transactionId)->latest()->paginate(9);
        }

        $total_revenue = $transactionItems->sum('price');
        $total_comission = $transactionItems->sum('fee');
        $total_price_after_discount = $transactionItems->sum('price_after_discount');
        $total_profit = $total_price_after_discount - $total_comission;
        return (new CommissionTransactionItemCollection($transactionItems))->additional(compact('total_revenue', 'total_comission', 'total_profit'));
    }
}
