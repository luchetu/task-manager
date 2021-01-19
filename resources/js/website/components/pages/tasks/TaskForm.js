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
        editTask(task_name,task_description,person_assigned,task_due,editItem.id)
    }
  }

  const handleNameChange = e => {
    setTaskName(e.target.value);

  }

const handlePersonChange=e=>{
    setPersonAssigned(e.target.value);
}

const handleDescriptionChange=e=>{
    setTaskDescription(e.target.value);
}

const handleDateChange=e=>{
    setTaskDue(e.target.value);
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
        onChange={handleNameChange}
        required
        className="task-input"
      />

      </label>
      <Datetime onChange={this.handleDateChange} value={task_due}/>
       <label>
          Task Description
          <textarea value={task_description} onChange={this.handleDescriptionChange} />
        </label>

       <select value={person_assigned} onChange={handlePersonChange}>
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