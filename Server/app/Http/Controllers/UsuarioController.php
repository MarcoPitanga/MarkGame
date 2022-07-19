<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    protected function retornarTodos()
    {
        $usuarios = Usuario::all();

        return $usuarios;
    }
}
