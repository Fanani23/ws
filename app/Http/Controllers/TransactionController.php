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
            $transaction = Transaction::where('code', request()->searchCode)->get();

            if ($transaction->count() == 0) {
                $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->where('transaction_id', 'HJDSJKSDJK')->latest()->paginate(9);
            } else {
                $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->where('transaction_id', $transaction->first()->id)->latest()->paginate(9);
            }
        }

        $total_revenue = formatPrice($transactionItems->sum('price'));
        $total_comission = formatPrice($transactionItems->sum('fee'));
        $total_price_after_discount = formatPrice($transactionItems->sum('price_after_discount'));
        $total_profit = formatPrice($transactionItems->sum('price_after_discount') - $transactionItems->sum('fee'));
        return (new CommissionTransactionItemCollection($transactionItems))->additional(compact('total_revenue', 'total_comission', 'total_profit'));
    }
}
