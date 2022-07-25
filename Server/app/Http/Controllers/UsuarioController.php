<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    protected function listar()
    {
        $usuarios = Usuario::all();

        return $usuarios;
    }

    protected function buscar($login)
    {
        $usuario = Usuario::where('login', $login)->get();

        return $usuario;
    }

    protected function salvar(Request $req)
    {
        $usuario =  Usuario::create([
            'login' => $req['login'],
            'senha' => md5($req['senha'])
        ]);
        return $usuario;
    }

    protected function logar(Request $req)
    {
        $usuario = Usuario::where('login', $req['login'])->where('senha', md5($req['senha']))->get();
        return $usuario;
    }
}
