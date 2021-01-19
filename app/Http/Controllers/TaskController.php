<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        $tasks = Task::with('user')->orderBy('id', 'DESC');
        return response()->json(['data' => $tasks], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!auth("api")->user()->is_admin) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }
        $this->validate($request, [
            'task_name' => 'required',
            'task_description' => 'required',
            'user_id' => 'required',
            'task_date_assigned' => 'required',
            'task_due_date' => 'required',
        ]);
        $task = new Task();
        $task->task_name = $request->input('task_name');
        $task->task_description = $request->input('task_description');
        $task->task_date_assigned = $request->input('task_date_assigned');
        $task->task_due_date = $request->input('task_due_date');
        $task->user_id = auth("api")->user()->id;
        $task->save;

        return response()->json(['data' => $task, 'message' => 'Created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!auth("api")->user()->is_admin) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
