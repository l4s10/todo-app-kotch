<?php

namespace App\Http\Controllers\Api;

use App\Models\Tarea;
use Illuminate\Http\Request;
use App\Http\Requests\TareaRequest;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\TareaResource;

class TareaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //$tareas = Tarea::paginate();
        $tareas = Tarea::all();

        return TareaResource::collection($tareas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TareaRequest $request): Tarea
    {
        return Tarea::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Tarea $tarea): Tarea
    {
        return $tarea;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TareaRequest $request, Tarea $tarea): Tarea
    {
        $tarea->update($request->validated());

        return $tarea;
    }

    public function destroy(Tarea $tarea): Response
    {
        $tarea->delete();

        return response()->noContent();
    }
}
