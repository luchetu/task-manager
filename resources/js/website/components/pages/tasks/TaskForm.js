import React, { useEffect, useContext, useState } from 'react';
import { TaskListContext } from '../../../contexts/TaskListContext';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";


const TaskForm=()=>{

const {addTask,editTask,clearList,editItem } =useContext(TaskListContext);

const [task_name, setTaskName] = useState('');

const [task_description, setTaskDescription] = useState('');

const [person_assigned, setPersonAssigned] = useState('');

const [task_due, setTaskDue] = useState('');


const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(task_name,task_description,person_assigned,task_due)
      setTaskDescription('');
      setTaskDescription('');
      setPersonAssigned('');
      setTaskName('');
      setTaskDue('');

    } else {
        editTask({task_name,task_description,task_assigned,person_assigned,task_due})
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

    //place holders before fetching from db


    return (
        <>
        <form onSubmit={handleSubmit} className="form">
        <label>
        Name of Task
      <input
        type="text"
        placeholder="Add Task..."
        value={task_name}
        onChange={handleChange}
        required
        className="task-input"
      />
      <Datetime />
      </label>
       <label>
          Task Description
          <textarea value={task_description} onChange={this.handleChange} />
        </label>

       <select value={person_assigned} onChange={handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
     </select>
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>

    )
    </>
}

export default TaskForm;