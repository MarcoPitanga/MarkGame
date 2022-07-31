<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pergunta extends Model
{
    use HasFactory;

    protected $fillable = [
        'questao',
        'opcao_certa',
        'opcao_1',
        'opcao_2',
        'opcao_3',
        'opcao_4',
    ];
}
