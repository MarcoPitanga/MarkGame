<?php

namespace App\Http\Controllers;

use App\Models\Personagem;
use Illuminate\Http\Request;

class PersonagemController extends Controller
{
    protected function retornarTodos()
    {
        $personagens = Personagem::all();

        return $personagens;
    }
}