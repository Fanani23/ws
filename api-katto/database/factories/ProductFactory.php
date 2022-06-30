<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => Category::factory(),
            'code' => \Str::random(6),
            'name' => $this->faker->name(),
            'price' => $this->faker->randomDigit(),
        ];
    }
}
