import React, { createContext, useState, useEffect } from "react";

export const TasksListContext = createContext();

const TaskListProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("Tasks")) || [];

    const [Tasks, setTasks] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }, [Tasks]);

    const [editTasks, setEditTasks] = useState(null);

    // Add Tasks
    const addTasks = (name, description,due_date,user_id) => {
        setTasks([...Tasks, {name, description,due_date,user_id, id: uuid() }]);
    };

    // Remove Tasks
    const removeTask = id => {
        setTasks(Tasks.filter(Task => Task.id !== id));
    };

    // Edit task
    const editTask = (name, description,due_date,user_id, id) => {
        const newTask = Tasks.map(Task =>
            Task.id === id ? { name, description,due_date,user_id } : Task
        );

        setTasks(newTasks);
        setEditTasks(null);

    };
    return (
        <TasksListContext.Provider
          value={{
            Tasks,
            addTasks,
            removeTask,
            editTask,

          }}
        >
          {props.children}
        </TasksListContext.Provider>
      )
};
export default TaskListProvider