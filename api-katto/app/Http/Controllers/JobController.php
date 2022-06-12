<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobRequest;
use App\Http\Resources\Job\JobCollection;
use App\Http\Resources\Job\JobResource;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(Job $jobs)
    {
        $jobs = $jobs->newQuery();

        if (request()->has('name')) {
            $jobs->where('name', 'like', "%" . request()->name . "%");
        }

        return new JobCollection($jobs->orderBy('name')->paginate(6));
    }

    public function show(Job $job)
    {
        return new JobResource($job);
    }

    public function create(JobRequest $request)
    {
        Job::create([
            'code' => $request->code,
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(JobRequest $request, Job $job)
    {
        $job->update([
            'code' => $request->code,
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Successfully updated.'
        ]);
    }

    public function destroy(Job $job)
    {
        $job->delete();

        return response()->json([
            'message' => 'Successfully deleted.'
        ]);
    }
}
