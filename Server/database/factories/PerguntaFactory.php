<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pergunta>
 */
class PerguntaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'questao' => 'Qual o numero favorito de ' . fake()->firstName() . ' ?',
            'opcao_certa' => str(rand(1, 4)),
            'opcao_1' => '1',
            'opcao_2' => '2',
            'opcao_3' => '3',
            'opcao_4' => '4',
        ];
    }
}
