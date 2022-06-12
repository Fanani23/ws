<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
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
            'name' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
            'birthday' => $this->faker->date('Y-m-d'),
            'membership' => $this->faker->randomElement(['vip', 'reguler'])
        ];
    }
}
