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
        // share, total fee ?
        return new OrderTransactionItemCollection($transactionItems);
    }
}
