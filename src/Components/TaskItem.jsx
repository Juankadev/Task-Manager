//Componente de Tarea (TaskItem):
// Este componente deberá representar individualmente una tarea.
// Mostrará el nombre de la tarea y un botón para completarla.
// Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
// cuando esté completada).

import React from 'react'
import "./css/TaskItem.css"

const TaskItem = ({ task, onDelete, onComplete }) => {

  return (
    <div className='task-container'>

      <div className='task-header' style={{ backgroundColor: task.backgroundColor }}>
        <span>Tarea N°: {task.id + 1}</span>
      </div>

      <div className='task-body'>
        <p>{task.name}</p>
        <button className='btnEliminar' onClick={() => onDelete(task.id)}>Eliminar</button>
        <button className='btnCompletar' onClick={() => onComplete(task.id)}>
          {task.complete ? "No Completar" : "Completar"} </button>
      </div>

    </div>

  )
}

export default TaskItem