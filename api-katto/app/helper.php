<?php

use Carbon\CarbonPeriod;

function getCode($string)
{
    return $string . strtoupper(substr(md5(uniqid()), 0, 5));
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