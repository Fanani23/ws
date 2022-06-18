<?php

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
        $data->where($additionalSearch, request()->$additionalSearch);
    }

    if ($with != '') {
        $data->with($with);
    }

    if ($new) {
        return new $resource($data->orderBy('name')->paginate(6));
    } else {
        return $resource::collection($data->orderBy('name')->paginate(6));
    }
}
