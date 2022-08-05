<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'login',
        'senha',
        'total_respostas',
        'respostas_certas',
        'respostas_erradas',
        'pergunta_atual'
    ];
}
