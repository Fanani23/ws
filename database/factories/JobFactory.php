<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => \Str::random(6),
            'name' => $this->faker->randomElement(['stylist', 'assistant stylist', 'helper']),
        ];
    }
}
