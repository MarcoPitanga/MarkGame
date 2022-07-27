<?php

use App\Http\Controllers\PersonagemController;
use App\Http\Controllers\UsuarioController;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuarios', [UsuarioController::class, 'listar']);
Route::get('/usuarios/ordenado', [UsuarioController::class, 'listarOrdenado']);
Route::get('/usuario/{login}', [UsuarioController::class, 'buscar']);
Route::post('/usuario/cadastrar', [UsuarioController::class, 'salvar']);
Route::post('/usuario/logar', [UsuarioController::class, 'logar']);
