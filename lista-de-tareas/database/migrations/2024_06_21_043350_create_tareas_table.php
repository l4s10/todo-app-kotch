<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tareas', function (Blueprint $table) {
            //id de la tarea
            $table->id();
            //titulo de la tarea
            $table->string('titulo', 100);
            //descripcion de la tarea
            $table->text('descripcion');
            //fecha de inicio
            $table->date('fecha_inicio');
            //fecha de fin
            $table->date('fecha_fin');
            //estado de la tarea
            $table->enum('estado', ['pendiente', 'en_proceso', 'finalizado']);
            //timestamps
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
