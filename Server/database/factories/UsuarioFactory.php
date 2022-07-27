<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\usuario>
 */
class UsuarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'login' => fake()->unique()->userName(),
            'senha' => md5(fake()->password(3, 20)),
            'total_respostas' => random_int(1, 30),
            'respostas_certas' => random_int(1, 15),
            'respostas_erradas' => random_int(1, 15)
        ];
    }
}
