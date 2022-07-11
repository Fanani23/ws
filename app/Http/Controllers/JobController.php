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
        return searchByName($jobs, '', 'App\Http\Resources\Job\JobCollection', true, '');
    }

    public function show(Job $job)
    {
        return new JobResource($job);
    }

    public function create(JobRequest $request)
    {
        Job::create([
            'code' => getCode('J-'),
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Successfully created.'
        ]);
    }

    public function update(JobRequest $request, Job $job)
    {
        $job->update([
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
