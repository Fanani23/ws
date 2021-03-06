<?php

namespace App\Http\Controllers;

use App\Http\Resources\Transaction\TransactionCollection;
use App\Http\Resources\Transaction\TransactionItemCollection;
use App\Http\Resources\Transaction\TransactionResource;
use App\Models\Employee;
use App\Models\Transaction;

class OrderController extends Controller
{
    public function index()
    {
        $transactions = Transaction::latest()->paginate(9);

        if (request()->has('from') && request()->has('to')) {
            $transactions = Transaction::whereBetween('datetime', [request()->from, request()->to." 23:59:59"])->latest()->paginate(9);
        }

        return new TransactionCollection($transactions);
    }

    public function orderHistoryCustomer($id)
    {
        $transactions = Transaction::where('customer_id', $id)->with('customer');
        
        if (request()->has('from') && request()->has('to')) {
            $transactions = $transactions->whereBetween('datetime', [request()->from, request()->to." 23:59:59"]);
        }

        return new TransactionCollection($transactions->latest()->paginate(9));
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

        $salary = $transactionItems->sum('fee');

        return (new TransactionItemCollection($transactionItems->get()))->additional(compact('salary', 'employee'));
    }
}
