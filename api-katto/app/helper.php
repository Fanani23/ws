<?php

use Carbon\CarbonPeriod;

function getCode($string)
{
    return $string . strtoupper(substr(md5(uniqid()), 0, 5));
}

function formatPrice($price)
{
    return number_format($price, 0, ',', '.');
}

function formatPhoneNumber($phone)
{
    $phone = preg_replace('/[^0-9]/', '', $phone);
    $phone = substr($phone, 0, 4) . '-' . substr($phone, 4, 4) . '-' . substr($phone, 8, 4);
    return $phone;
}

function searchByName($data, $with, $resource, $new = false, $additionalSearch)
{
    $data = $data->newQuery();

    if (request()->has('name')) {
        $data->where('name', 'like', "%" . request()->name . "%");
    }

    if ($additionalSearch != '') {
        if (request()->has($additionalSearch)) {
            $data->where($additionalSearch, request()->$additionalSearch);
        }
    }

    if ($with != '') {
        $data->with($with);
    }

    if ($new) {
        return new $resource($data->orderBy('name')->paginate(9));
    } else {
        return $resource::collection($data->orderBy('name')->paginate(9));
    }
}

function dataChart($groupData, $from, $to)
{
    $period = CarbonPeriod::create($from, $to);

    foreach ($period as $date) {
        $listDates[] = $date->format('Y-m-d');
    }

    $weekDatas = [];

    foreach ($groupData as $data) {
        array_push($weekDatas, $data);
    }

    foreach ($listDates as $listDate) {
        if (in_array($listDate, array_column($weekDatas, 'date'))) {
            continue;
        } else {
            array_push($weekDatas, [
                'date' => $listDate,
                'day' => (new DateTime($listDate))->format('l'),
                'count' => 0,
            ]);
        }
    }

    $unsortedData = collect(
        $weekDatas
    );

    $sortedData = $unsortedData->sortBy('date')->values();

    return $sortedData;
}

function growth($today, $yesterday)
{
    if ($yesterday == 0) {
        $growth = $today * 100;
    } else {
        $growth = ($today - $yesterday) / $yesterday * 100;
    }
    
    return floor($growth);
}

function apaAja($groupData, $listTime, $inArrayColumn, $sortByColumn)
{
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
                    'count' => 0,
                ]);
            } elseif (request()->year) {
                array_push($weekDatas, [
                    $inArrayColumn => $time,
                    'count' => 0,
                ]);
            } else {
                array_push($weekDatas, [
                    $inArrayColumn => $time,
                    'label' => (new DateTime($time))->format('l'),
                    'count' => 0,
                ]);
            }
        }
    }

    $unsortedData = collect(
        $weekDatas
    );

    $sortedData = $unsortedData->sortBy($sortByColumn)->values();

    return response()->json([
        'data' => $sortedData
    ]);
}
