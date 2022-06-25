<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Transaction;
use App\Models\TransactionItem;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use DateTime;
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
        $total_visitor = $total_transactions;

        return response()->json([
            'data' => [
                'total_transactions' => $total_transactions,
                'total_revenue' => $total_revenue,
                'total_profit' => $total_profit,
                'total_visitor' => $total_visitor,
            ]
        ]);
    }

    public function membership()
    {
        $membership = [
            [
                'name' => 'reguler',
                'count' => Customer::where('membership', 'reguler')->get()->count(),
            ], [
                'name' => 'vip',
                'count' => Customer::where('membership', 'vip')->get()->count(),
            ]
        ];

        return response()->json([
            'data' => $membership
        ]);
    }

    public function category()
    {
        $transactionItemsWithData = TransactionItem::with('category')->get();

        $result = $transactionItemsWithData->groupBy(function ($item) {
            return $item->category->name;
        })
            ->map(function ($data, $name) {
                return [
                    'category' => $name,
                    'count' => $data->count(),
                ];
            })->values();

        foreach ($result as $res) {
            $hai[] = $res;
        }

        usort($hai, function ($a, $b) {
            return $b['count'] <=> $a['count'];
        });

        return response()->json([
            'data' => $hai
        ]);
    }

    public function revenue()
    {
        if (request()->month) {
            $from = Carbon::now()->startOfMonth()->format('Y-m-d');
            $to = Carbon::now()->endOfMonth()->format('Y-m-d');
        } elseif (request()->year) {
            $from = Carbon::now()->startOfYear()->format('Y-m-d');
            $to = Carbon::now()->endOfYear()->format('Y-m-d');
        } else {
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');
        }

        $allData = Transaction::all();

        $groupData = $allData
            ->whereBetween('datetime', [$from, $to])
            ->groupBy(function ($item) {
                return (new DateTime($item->datetime))->format('Y-m-d');
            })
            ->map(function ($data, $date) {
                return [
                    'date' => (new DateTime($date))->format('Y-m-d'),
                    'day' => (new DateTime($date))->format('l'),
                    'count' => $data->sum('subtotal'),
                ];
            })
            ->values();

        $result = dataChart($groupData, $from, $to);

        return response()->json([
            'data' => $result
        ]);
    }

    public function transaction()
    {
        if (request()->month) {
            $from = Carbon::now()->startOfMonth()->format('Y-m-d');
            $to = Carbon::now()->endOfMonth()->format('Y-m-d');
        } elseif (request()->year) {
            $from = Carbon::now()->startOfYear()->format('Y-m-d');
            $to = Carbon::now()->endOfYear()->format('Y-m-d');
        } else {
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');
        }

        $allData = Transaction::all();

        $groupData = $allData
            ->whereBetween('datetime', [$from, $to])
            ->groupBy(function ($item) {
                return (new DateTime($item->datetime))->format('Y-m-d');
            })
            ->map(function ($data, $date) {
                return [
                    'date' => (new DateTime($date))->format('Y-m-d'),
                    'day' => (new DateTime($date))->format('l'),
                    'count' => $data->count(),
                ];
            })
            ->values();

        $result = dataChart($groupData, $from, $to);

        return response()->json([
            'data' => $result
        ]);
    }

    public function comparison()
    {
        if (request()->month) {
            $start = Carbon::now()->startOfMonth()->subDay()->format('Y-m-d');
            $from = Carbon::now()->startOfMonth()->format('Y-m-d');
            $to = Carbon::now()->endOfMonth()->format('Y-m-d');
        } elseif (request()->year) {
            $start = Carbon::now()->startOfYear()->subDay()->format('Y-m-d');
            $from = Carbon::now()->startOfYear()->format('Y-m-d');
            $to = Carbon::now()->endOfYear()->format('Y-m-d');
        } else {
            $start = Carbon::now()->startOfWeek()->subDay()->format('Y-m-d');
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');
        }

        $allData = Transaction::all();

        $groupData = $allData
            ->whereBetween('datetime', [$start, $to])
            ->groupBy(function ($item) {
                return (new DateTime($item->datetime))->format('Y-m-d');
            })
            ->map(function ($data, $date) {
                return [
                    'date' => (new DateTime($date))->format('Y-m-d'),
                    'day' => (new DateTime($date))->format('l'),
                    'today' => $data->count(),
                ];
            })
            ->values();

        // $result = dataChart($groupData, $from, $to);

        $period = CarbonPeriod::create($from, $to);

        foreach ($period as $date) {
            $listDates[] = $date->format('Y-m-d');
        }

        $weekDatas = [];

        foreach ($groupData as $data) {
            array_push($weekDatas, $data);
        }

        foreach ($listDates as $listDate) {
            // jika di dalam array tanggal terdapat tanggal yang sama dengan transaksi
            if (in_array($listDate, array_column($weekDatas, 'date'))) {
                continue;
            // jika di dalam array tanggal terdapat tanggal yang kurang dari kolom date array weekDatas
            } else {
                array_push($weekDatas, [
                    'date' => $listDate,
                    'day' => (new DateTime($listDate))->format('l'),
                    'today' => 0,
                ]);
            }
        }

        $unsortedData = collect(
            $weekDatas
        );

        $sortedData = $unsortedData->sortBy('date')->values();

        $newData = [];
        foreach ($sortedData as $key => $data) {
            if ($data['date'] == $start) {
                unset($sortedData[$key]);
            } else {
                $yesterday = 0;
    
                if ($key != 0 && $key != 1) {
                    $yesterday = $sortedData[$key - 1]['today'];
                }
                
                array_push($newData, [
                    'date' => $data['date'],
                    'day' => $data['day'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            }

        }

        return response()->json([
            'data' => $newData
        ]);
    }
}
