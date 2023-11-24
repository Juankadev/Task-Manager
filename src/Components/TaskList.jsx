//Componente de Lista de Tareas (TaskList):
// Este componente deberá mostrar la lista de tareas.
// Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
// relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
// Cada tarea debe representarse mediante un componente TaskItem.

import React from 'react'
import TaskItem from './TaskItem'
import "./css/TaskList.css"

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <div className='container'>

      <h2 className='main-title'>Tus tareas:</h2>

      <div className='tasks-container'>
        {tasks.map((task) => {
          return (
            <TaskItem task={task} onDelete={onDelete} onComplete={onComplete} />
          )
        })}
      </div>

    </div>
  )
}

export default TaskList