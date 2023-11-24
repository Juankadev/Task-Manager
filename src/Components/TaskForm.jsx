//Componente de Formulario (TaskForm):
// Este componente contendrá un formulario para agregar nuevas tareas.
// Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
// la lista principal.

import React, { useState } from 'react'
import "./css/TaskForm.css"

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName !== "") {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <>
      <h2 className='main-title'>Crear nueva tarea:</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='input-task' id='input-task' value={taskName}
          onChange={(e) => setTaskName(e.target.value)}>
        </input>
        <button type='submit' className='btnCreateTask' name='btnCreateTask' id='btnCreateTask'>Crear</button>
      </form>
    </>
  )
}

export default TaskForm
