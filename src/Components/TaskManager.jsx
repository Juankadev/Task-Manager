//TaskManager
//  -TaskForm
//  -TaskList
//      -TaskItem

import React, { useState } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import "./css/Global.css"
import "./css/TaskManager.css"

const ContainerTaskList = () => {
    const [tasks, setTasks] = useState([])
    const [id, setId] = useState(1);

    const addTask = (taskName) => {
        const backgroundColors = ["#c176c8", "#f17894", "#f1a977", "#e0db94", "#bdefd3"]
        // Obtener un color aleatorio del array
        const randomBackground = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

        const newTask = {
            id: id,
            name: taskName,
            complete: false,
            backgroundColor: randomBackground
        };
        setId(id + 1)
        setTasks([...tasks, newTask]);
    };

    const onDelete = (taskId) => {
        // Filtra las tareas para obtener una nueva lista sin la tarea que se va a eliminar
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const onComplete = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, complete: !task.complete };
            }
            return task;
        });

        setTasks(updatedTasks); // Actualiza el estado con la tarea completada
    };

    return (
        <div>
            <header>
                <h1>Task Industry</h1>
            </header>
            <TaskForm addTask={addTask}></TaskForm>
            <TaskList tasks={tasks} onDelete={onDelete} onComplete={onComplete} />
        </div>
    )
}

export default ContainerTaskList