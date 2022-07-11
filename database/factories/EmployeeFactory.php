<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'job_id' => Job::factory(),
            'code' => \Str::random(6),
            'name' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
