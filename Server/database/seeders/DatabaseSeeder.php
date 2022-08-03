<?php

namespace Database\Seeders;

use App\Models\Pergunta;
use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Usuario::factory(10)->create();

        DB::table('perguntas')->insert(
            [
                'questao' => 'Qual pais tem apenas 2 cores na bandeira?',
                'opcao_certa' => 'Japão',
                'opcao_1' => 'França',
                'opcao_2' => 'Brasil',
                'opcao_3' => 'Japão',
                'opcao_4' => 'Alemanha'
            ],
            [
                'questao' => 'De quem é a famosa frase “Penso, logo existo”?',
                'opcao_certa' => 'Descartes',
                'opcao_1' => 'Platão',
                'opcao_2' => 'Descartes',
                'opcao_3' => 'Sócrates',
                'opcao_4' => 'Galileu Galilei'
            ],
            [
                'questao' => 'De onde é a invenção do chuveiro elétrico?',
                'opcao_certa' => 'Brasil',
                'opcao_1' => 'Itália',
                'opcao_2' => 'Inglaterra',
                'opcao_3' => 'Brasil',
                'opcao_4' => 'França'
            ],
            [
                'questao' => 'Qual é o menor país do mundo?',
                'opcao_certa' => 'Vaticano',
                'opcao_1' => 'Vaticano',
                'opcao_2' => 'Nauru',
                'opcao_3' => 'Mônaco',
                'opcao_4' => 'Malta'
            ],
            [
                'questao' => 'Qual é o maior país do mundo?',
                'opcao_certa' => 'Rússia',
                'opcao_1' => 'China',
                'opcao_2' => 'Canadá',
                'opcao_3' => 'Estados Unidos',
                'opcao_4' => 'Rússia'
            ],
            [
                'questao' => 'Quantas casas decimais tem o número pi?',
                'opcao_certa' => 'Infinitas',
                'opcao_1' => 'Duas',
                'opcao_2' => 'Infinitas',
                'opcao_3' => 'Milhares',
                'opcao_4' => 'Centenas'
            ],
            [
                'questao' => 'Qual a nacionalidade de Che Guevara?',
                'opcao_certa' => 'Argentina',
                'opcao_1' => 'Cubana',
                'opcao_2' => 'Peruana',
                'opcao_3' => 'Boliviana',
                'opcao_4' => 'Argentina'
            ],
            [
                'questao' => 'Qual a montanha mais alta do Brasil?',
                'opcao_certa' => 'Pico da Neblina',
                'opcao_1' => 'Pico da Neblina',
                'opcao_2' => 'Pico Paraná',
                'opcao_3' => 'Monte Roraima',
                'opcao_4' => 'Pico da Bandeira'
            ],
            [
                'questao' => 'Qual destes países é transcontinental?',
                'opcao_certa' => 'Rússia',
                'opcao_1' => 'Marrocos',
                'opcao_2' => 'Groenlândia',
                'opcao_3' => 'Rússia',
                'opcao_4' => 'Filipinas'
            ],
            [
                'questao' => 'Qual o maior animal terrestre?',
                'opcao_certa' => 'Elefante africano',
                'opcao_1' => 'Elefante africano',
                'opcao_2' => 'Girafa',
                'opcao_3' => 'Dinossauro',
                'opcao_4' => 'Baleia Azul'
            ],
        );
    }
}
