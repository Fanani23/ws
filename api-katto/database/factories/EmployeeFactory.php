<?php

namespace Database\Factories;

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
            'code' => \Str::random(5),
            'name' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
            'job' => $this->faker->randomElement(['stylist', 'assistant']),
        ];
    }
}
