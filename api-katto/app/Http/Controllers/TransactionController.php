<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionCollection;
use App\Http\Resources\TransactionItemCollection;
use App\Http\Resources\TransactionResource;
use App\Models\Employee;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::latest()->paginate(6);

        if (request()->has('from') && request()->has('to')) {
            $transactions = Transaction::whereBetween('datetime', [request()->from, request()->to." 23:59:59"])->latest()->paginate(6);
        }

        return new TransactionCollection($transactions);
    }

    public function orderHistoryCustomer($id)
    {
        $transactions = Transaction::where('customer_id', $id)->with('customer');
        
        if (request()->has('from') && request()->has('to')) {
            $transactions = $transactions->whereBetween('datetime', [request()->from, request()->to." 23:59:59"]);
        }

        return new TransactionCollection($transactions->latest()->paginate(6));
    }

    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction);
    }

    public function orderHistoryEmployee(Employee $employee)
    {
        $transactionItems = $employee->transactionItems()->with('transaction');
        
        if (request()->has('from') && request()->has('to')) {
            $transactionItems = $transactionItems->whereBetween('datetime', [request()->from, request()->to." 23:59:59"]);
        }

        return new TransactionItemCollection($transactionItems->get());
    }
    
}
