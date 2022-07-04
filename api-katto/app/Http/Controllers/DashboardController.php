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
        $transactionItemsToday = TransactionItem::whereDate('datetime', date('Y-m-d'))->get();
        $transactionItemsYesterday = TransactionItem::whereDate('datetime', date('Y-m-d', strtotime("-1 days")))->get();

        $totalTransactionsToday = Transaction::whereDate('datetime', date('Y-m-d'))->count();
        $totalTransactionsYesterday = Transaction::whereDate('datetime', date('Y-m-d', strtotime("-1 days")))->count();
        $transactionsGrowth = growth($totalTransactionsToday, $totalTransactionsYesterday);

        $totalRevenueToday = $transactionItemsToday->sum('price');
        $totalRevenueYesterday = $transactionItemsYesterday->sum('price');
        $revenueGrowth = growth($totalRevenueToday, $totalRevenueYesterday);

        $totalProfitToday = $transactionItemsToday->sum('price_after_discount') - $transactionItemsToday->sum('fee');
        $totalProfitYesterday = $transactionItemsYesterday->sum('price_after_discount') - $transactionItemsYesterday->sum('fee');
        $profitGrowth = growth($totalProfitToday, $totalProfitYesterday);

        $totalVisitorToday = $totalTransactionsToday;
        $totalVisitorYesterday = $totalTransactionsYesterday;
        $visitorGrowth = growth($totalVisitorToday, $totalVisitorYesterday);

        return response()->json([
            'data' => [
                'total_transactions' => [
                    "total" => $totalTransactionsToday,
                    "growth" => $transactionsGrowth . '%',
                    "type" => $transactionsGrowth > 0 ? 'up' : 'down'
                ],
                'total_revenue' => [
                    "total" => formatPrice($totalRevenueToday),
                    "growth" => $revenueGrowth . '%',
                    "type" => $transactionsGrowth > 0 ? 'up' : 'down'

                ],
                'total_profit' => [
                    "total" => formatPrice($totalProfitToday),
                    "growth" => $profitGrowth . '%',
                    "type" => $transactionsGrowth > 0 ? 'up' : 'down'

                ],
                'total_visitor' => [
                    "total" => $totalVisitorToday,
                    "growth" => $visitorGrowth . '%',
                    "type" => $transactionsGrowth > 0 ? 'up' : 'down'

                ],
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

        $dataCount = $transactionItemsWithData->groupBy(function ($item) {
            return $item->category->name;
        })
            ->map(function ($data, $name) {
                return [
                    'category' => $name,
                    'count' => $data->count(),
                ];
            })->values();

        foreach ($dataCount as $data) {
            $dataArray[] = $data;
        }

        usort($dataArray, function ($a, $b) {
            return $b['count'] <=> $a['count'];
        });

        $result = array_slice($dataArray, 0, 5);

        return response()->json([
            'data' => $result
        ]);
    }

    public function revenue()
    {
        if (request()->month) {
            // date
            $year = Carbon::now()->year;

            // data
            $allData = Transaction::whereYear('datetime', $year)->get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('F');
                })
                ->map(function ($data, $date) {
                    return [
                        'month_number' => (new DateTime($date))->format('n'),
                        'label' => $date,
                        'count' => formatPrice($data->sum('subtotal')),
                    ];
                })
                ->values();

            // listTime
            $listTime = [];
            for ($m = 1; $m <= 12; $m++) {
                $listTime[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
            }

            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'month_number';
        } elseif (request()->year) {
            // date
            $yearNow = Carbon::now()->year;
            $year1 = Carbon::now()->subYear(1)->year;
            $year2 = Carbon::now()->subYear(2)->year;
            $year3 = Carbon::now()->subYears(3)->year;

            // data
            $allData = Transaction::get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y');
                })
                ->map(function ($data, $year) {
                    return [
                        'label' => $year,
                        'count' => formatPrice($data->sum('subtotal')),
                    ];
                })
                ->values();

            // listTime
            $listTime = [
                $year1,
                $year2,
                $year3,
                $yearNow
            ];


            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'label';
        } else {
            // date
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');

            // data
            $allData = Transaction::all();

            // groupData
            $groupData = $allData
                ->whereBetween('datetime', [$from, $to])
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y-m-d');
                })
                ->map(function ($data, $date) {
                    return [
                        'date' => (new DateTime($date))->format('Y-m-d'),
                        'label' => (new DateTime($date))->format('l'),
                        'count' => formatPrice($data->sum('subtotal')),
                    ];
                })
                ->values();

            // listTime
            $period = CarbonPeriod::create($from, $to);

            foreach ($period as $date) {
                $listTime[] = $date->format('Y-m-d');
            }

            // sortByColumn
            $inArrayColumn = 'date';
            $sortByColumn = 'date';
        }

        return apaAja($groupData, $listTime, $inArrayColumn, $sortByColumn);
    }

    public function transaction()
    {
        if (request()->month) {
            // date
            $year = Carbon::now()->year;

            // data
            $allData = Transaction::whereYear('datetime', $year)->get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('F');
                })
                ->map(function ($data, $date) {
                    return [
                        'month_number' => (new DateTime($date))->format('n'),
                        'label' => $date,
                        'count' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [];
            for ($m = 1; $m <= 12; $m++) {
                $listTime[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
            }

            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'month_number';
        } elseif (request()->year) {
            // date
            $yearNow = Carbon::now()->year;
            $year1 = Carbon::now()->subYear(1)->year;
            $year2 = Carbon::now()->subYear(2)->year;
            $year3 = Carbon::now()->subYears(3)->year;

            // data
            $allData = Transaction::get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y');
                })
                ->map(function ($data, $year) {
                    return [
                        'label' => $year,
                        'count' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [
                $year1,
                $year2,
                $year3,
                $yearNow
            ];


            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'label';
        } else {
            // date
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');

            // data
            $allData = Transaction::all();

            // groupData
            $groupData = $allData
                ->whereBetween('datetime', [$from, $to])
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y-m-d');
                })
                ->map(function ($data, $date) {
                    return [
                        'date' => (new DateTime($date))->format('Y-m-d'),
                        'label' => (new DateTime($date))->format('l'),
                        'count' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $period = CarbonPeriod::create($from, $to);

            foreach ($period as $date) {
                $listTime[] = $date->format('Y-m-d');
            }

            // sortByColumn
            $inArrayColumn = 'date';
            $sortByColumn = 'date';
        }

        return apaAja($groupData, $listTime, $inArrayColumn, $sortByColumn);
    }

    public function comparisonTransaction()
    {
        if (request()->month) {
            // date
            $year = Carbon::now()->year;

            // data
            $allData = Transaction::whereYear('datetime', $year)->get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('F');
                })
                ->map(function ($data, $date) {
                    return [
                        'month_number' => (new DateTime($date))->format('n'),
                        'label' => $date,
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [];
            for ($m = 1; $m <= 12; $m++) {
                $listTime[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
            }

            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'month_number';
        } elseif (request()->year) {
            // date
            $yearNow = Carbon::now()->year;
            $year1 = Carbon::now()->subYear(1)->year;
            $year2 = Carbon::now()->subYear(2)->year;
            $year3 = Carbon::now()->subYears(3)->year;

            // data
            $allData = Transaction::get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y');
                })
                ->map(function ($data, $year) {
                    return [
                        'label' => $year,
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [
                $year1,
                $year2,
                $year3,
                $yearNow
            ];


            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'label';
        } else {
            // date
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');

            // data
            $allData = Transaction::all();

            // groupData
            $groupData = $allData
                ->whereBetween('datetime', [$from, $to])
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y-m-d');
                })
                ->map(function ($data, $date) {
                    return [
                        'date' => (new DateTime($date))->format('Y-m-d'),
                        'label' => (new DateTime($date))->format('l'),
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $period = CarbonPeriod::create($from, $to);

            foreach ($period as $date) {
                $listTime[] = $date->format('Y-m-d');
            }

            // sortByColumn
            $inArrayColumn = 'date';
            $sortByColumn = 'date';
        }

        $weekDatas = [];

        foreach ($groupData as $data) {
            array_push($weekDatas, $data);
        }

        foreach ($listTime as $time) {
            if (in_array($time, array_column($weekDatas, $inArrayColumn))) {
                continue;
            } else {
                if (request()->month) {
                    array_push($weekDatas, [
                        'month_number' => (new DateTime($time))->format('n'),
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } elseif (request()->year) {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } else {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'label' => (new DateTime($time))->format('l'),
                        'today' => 0,
                    ]);
                }
            }
        }

        $unsortedData = collect(
            $weekDatas
        );

        $sortedData = $unsortedData->sortBy($sortByColumn)->values();

        $newData = [];
        foreach ($sortedData as $key => $data) {
            $yesterday = 22;

            if ($key != 0) {
                $yesterday = $sortedData[$key - 1]['today'];
            } else {
                if (request()->year) {
                    $yesterday = Transaction::whereYear('datetime', Carbon::now()->subYear(4)->year)->count();
                } elseif (request()->month) {
                    $yesterday = Transaction::whereYear('datetime', Carbon::now()->subYear(1)->year)->whereMonth('datetime', '12')->count();
                } else {
                    $yesterday = Transaction::whereDate('datetime', Carbon::now()->startOfWeek()->subDay()->format('Y-m-d'))->count();
                }
            }

            if (request()->year) {
                if (in_array($data['label'], $listTime)) {
                    array_push($newData, [
                        'label' => $data['label'],
                        'yesterday' => $yesterday,
                        'today' => $data['today'],
                    ]);
                }
            } elseif (request()->month) {
                array_push($newData, [
                    'month_number' => $data['month_number'],
                    'label' => $data['label'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            } else {
                array_push($newData, [
                    'date' => $data['date'],
                    'label' => $data['label'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            }
        }

        return response()->json([
            'data' => $newData
        ]);
    }

    public function comparisonRevenue()
    {
        if (request()->month) {
            // date
            $year = Carbon::now()->year;

            // data
            $allData = Transaction::whereYear('datetime', $year)->get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('F');
                })
                ->map(function ($data, $date) {
                    return [
                        'month_number' => (new DateTime($date))->format('n'),
                        'label' => $date,
                        'today' => $data->sum('subtotal'),
                    ];
                })
                ->values();

            // listTime
            $listTime = [];
            for ($m = 1; $m <= 12; $m++) {
                $listTime[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
            }

            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'month_number';
        } elseif (request()->year) {
            // date
            $yearNow = Carbon::now()->year;
            $year1 = Carbon::now()->subYear(1)->year;
            $year2 = Carbon::now()->subYear(2)->year;
            $year3 = Carbon::now()->subYears(3)->year;

            // data
            $allData = Transaction::get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y');
                })
                ->map(function ($data, $year) {
                    return [
                        'label' => $year,
                        'today' => $data->sum('subtotal'),
                    ];
                })
                ->values();

            // listTime
            $listTime = [
                $year1,
                $year2,
                $year3,
                $yearNow
            ];


            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'label';
        } else {
            // date
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');

            // data
            $allData = Transaction::all();

            // groupData
            $groupData = $allData
                ->whereBetween('datetime', [$from, $to])
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y-m-d');
                })
                ->map(function ($data, $date) {
                    return [
                        'date' => (new DateTime($date))->format('Y-m-d'),
                        'label' => (new DateTime($date))->format('l'),
                        'today' => $data->sum('subtotal'),
                    ];
                })
                ->values();

            // listTime
            $period = CarbonPeriod::create($from, $to);

            foreach ($period as $date) {
                $listTime[] = $date->format('Y-m-d');
            }

            // sortByColumn
            $inArrayColumn = 'date';
            $sortByColumn = 'date';
        }

        $weekDatas = [];

        foreach ($groupData as $data) {
            array_push($weekDatas, $data);
        }

        foreach ($listTime as $time) {
            if (in_array($time, array_column($weekDatas, $inArrayColumn))) {
                continue;
            } else {
                if (request()->month) {
                    array_push($weekDatas, [
                        'month_number' => (new DateTime($time))->format('n'),
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } elseif (request()->year) {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } else {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'label' => (new DateTime($time))->format('l'),
                        'today' => 0,
                    ]);
                }
            }
        }

        $unsortedData = collect(
            $weekDatas
        );

        $sortedData = $unsortedData->sortBy($sortByColumn)->values();

        $newData = [];
        foreach ($sortedData as $key => $data) {
            $yesterday = 22;

            if ($key != 0) {
                $yesterday = $sortedData[$key - 1]['today'];
            } else {
                if (request()->year) {
                    $yesterday = Transaction::whereYear('datetime', Carbon::now()->subYear(4)->year)->sum('subtotal');
                } elseif (request()->month) {
                    $yesterday = Transaction::whereYear('datetime', Carbon::now()->subYear(1)->year)->whereMonth('datetime', '12')->sum('subtotal');
                } else {
                    $yesterday = Transaction::whereDate('datetime', Carbon::now()->startOfWeek()->subDay()->format('Y-m-d'))->sum('subtotal');
                }
            }

            if (request()->year) {
                if (in_array($data['label'], $listTime)) {
                    array_push($newData, [
                        'label' => $data['label'],
                        'yesterday' => $yesterday,
                        'today' => $data['today'],
                    ]);
                }
            } elseif (request()->month) {
                array_push($newData, [
                    'month_number' => $data['month_number'],
                    'label' => $data['label'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            } else {
                array_push($newData, [
                    'date' => $data['date'],
                    'label' => $data['label'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            }
        }

        return response()->json([
            'data' => $newData
        ]);
    }

    public function comparisonMembership()
    {
        if (request()->month) {
            // date
            $year = Carbon::now()->year;

            // data
            $allData = Customer::whereYear('datetime', $year)->get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('F');
                })
                ->map(function ($data, $date) {
                    return [
                        'month_number' => (new DateTime($date))->format('n'),
                        'label' => $date,
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [];
            for ($m = 1; $m <= 12; $m++) {
                $listTime[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
            }

            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'month_number';
        } elseif (request()->year) {
            // date
            $yearNow = Carbon::now()->year;
            $year1 = Carbon::now()->subYear(1)->year;
            $year2 = Carbon::now()->subYear(2)->year;
            $year3 = Carbon::now()->subYears(3)->year;

            // data
            $allData = Customer::get();

            // groupData
            $groupData = $allData
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y');
                })
                ->map(function ($data, $year) {
                    return [
                        'label' => $year,
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $listTime = [
                $year1,
                $year2,
                $year3,
                $yearNow
            ];


            // sortByColumn
            $inArrayColumn = 'label';
            $sortByColumn = 'label';
        } else {
            // date
            $from = Carbon::now()->startOfWeek()->format('Y-m-d');
            $to = Carbon::now()->endOfWeek()->format('Y-m-d');

            // data
            $allData = Customer::all();

            // groupData
            $groupData = $allData
                ->whereBetween('datetime', [$from, $to])
                ->groupBy(function ($item) {
                    return (new DateTime($item->datetime))->format('Y-m-d');
                })
                ->map(function ($data, $date) {
                    return [
                        'date' => (new DateTime($date))->format('Y-m-d'),
                        'label' => (new DateTime($date))->format('l'),
                        'today' => $data->count(),
                    ];
                })
                ->values();

            // listTime
            $period = CarbonPeriod::create($from, $to);

            foreach ($period as $date) {
                $listTime[] = $date->format('Y-m-d');
            }

            // sortByColumn
            $inArrayColumn = 'date';
            $sortByColumn = 'date';
        }

        $weekDatas = [];

        foreach ($groupData as $data) {
            array_push($weekDatas, $data);
        }

        foreach ($listTime as $time) {
            if (in_array($time, array_column($weekDatas, $inArrayColumn))) {
                continue;
            } else {
                if (request()->month) {
                    array_push($weekDatas, [
                        'month_number' => (new DateTime($time))->format('n'),
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } elseif (request()->year) {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'today' => 0,
                    ]);
                } else {
                    array_push($weekDatas, [
                        $inArrayColumn => $time,
                        'label' => (new DateTime($time))->format('l'),
                        'today' => 0,
                    ]);
                }
            }
        }

        $unsortedData = collect(
            $weekDatas
        );

        $sortedData = $unsortedData->sortBy($sortByColumn)->values();

        $newData = [];
        foreach ($sortedData as $key => $data) {
            $yesterday = 22;

            if ($key != 0) {
                $yesterday = $sortedData[$key - 1]['today'];
            } else {
                if (request()->year) {
                    $yesterday = Customer::whereYear('datetime', Carbon::now()->subYear(4)->year)->count();
                } elseif (request()->month) {
                    $yesterday = Customer::whereYear('datetime', Carbon::now()->subYear(1)->year)->whereMonth('datetime', '12')->count();
                } else {
                    $yesterday = Customer::whereDate('datetime', Carbon::now()->startOfWeek()->subDay()->format('Y-m-d'))->count();
                }
            }

            if (request()->year) {
                if (in_array($data['label'], $listTime)) {
                    array_push($newData, [
                        'label' => $data['label'],
                        'yesterday' => $yesterday,
                        'today' => $data['today'],
                    ]);
                }
            } elseif (request()->month) {
                array_push($newData, [
                    'month_number' => $data['month_number'],
                    'label' => $data['label'],
                    'yesterday' => $yesterday,
                    'today' => $data['today'],
                ]);
            } else {
                array_push($newData, [
                    'date' => $data['date'],
                    'label' => $data['label'],
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
