<?php

namespace App\Http\Controllers;

use App\Models\Pergunta;
use Illuminate\Http\Request;

class PerguntaController extends Controller
{
    protected function perguntasRandom()
    {
        $pergunta = Pergunta::inRandomOrder()->first();

        return $pergunta;
    }

    protected function perguntaNivel($id)
    {
        $pergunta = Pergunta::find($id);

        return $pergunta;
    }
}
