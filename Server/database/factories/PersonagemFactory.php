<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\personagens>
 */
class PersonagemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'usuario_id' => fake()->randomElement(Usuario::pluck('id')),
            'nome' => fake()->firstName(),
            'classe' => fake()->randomElement(['Lenhador', 'Ladrão', 'Monge']),
            'dano' => 100,
            'resistencia' => 100,
            'vida' => 1000
        ];
    }
}
