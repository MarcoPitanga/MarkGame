<?php

namespace App\Http\Controllers;

use App\Models\Pergunta;
use Illuminate\Http\Request;

class PerguntaController extends Controller
{
    protected function perguntasRandom()
    {
        $perguntas = Pergunta::inRandomOrder()->first();

        return $perguntas;
    }
}
