<?php

namespace App\Http\Controllers;

use App\Http\Resources\Order\OrderTransactionItemCollection;
use App\Models\TransactionItem;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactionItems = TransactionItem::with(['transaction', 'employee','product', 'product.category'])->latest()->paginate(6);

        // revenune = price / after discount?
        $total_revenue = $transactionItems->sum('price');
        $total_comission = $transactionItems->sum('fee');
        return (new OrderTransactionItemCollection($transactionItems))->additional(compact('total_revenue', 'total_comission'));
    }
}
