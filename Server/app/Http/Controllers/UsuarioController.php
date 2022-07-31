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

    protected function listarOrdenado()
    {
        $usuarios['total_respostas'] = Usuario::orderBy('total_respostas', 'desc')->get();
        $usuarios['respostas_certas'] = Usuario::orderBy('respostas_certas', 'desc')->get();
        return $usuarios;
    }

    protected function buscar($login)
    {
        $usuario = Usuario::where('login', $login)->get();

        return $usuario;
    }

    protected function salvarResposta(Request $req)
    {
        $usuario = Usuario::find($req->id);

        if ($req->resultado == 'certa') {
            $usuario->total_respostas += 1;
            $usuario->respostas_certas += 1;
        } else if ($req->resultado == 'errada') {
            $usuario->total_respostas += 1;
            $usuario->respostas_erradas += 1;
        }

        $usuario->save();

        return $usuario;
    }

    protected function salvar(Request $req)
    {
        $usuario =  Usuario::create([
            'login' => $req['login'],
            'senha' => md5($req['senha']),
        ]);
        return $usuario;
    }

    protected function logar(Request $req)
    {
        $usuario = Usuario::where('login', $req['login'])->where('senha', md5($req['senha']))->get();
        return $usuario;
    }
}
