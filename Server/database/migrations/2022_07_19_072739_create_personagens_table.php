<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personagens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id');
            $table->string('nome');
            $table->enum('classe', ['Lenhador', 'Ladrão', 'Monge']);
            $table->integer('nivel')->default(1);
            $table->integer('pontos_evolucao')->default(0);
            $table->integer('experiencia')->default(0);
            $table->integer('andar')->default(1);
            $table->integer('dano');
            $table->integer('resistencia');
            $table->integer('vida');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personagens');
    }
};
