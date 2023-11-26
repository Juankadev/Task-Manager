//TaskManager
//  -TaskForm
//  -TaskList
//      -TaskItem

import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import "./css/Global.css"
import "./css/TaskManager.css"

const ContainerTaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (localStorage.length > 0) {
            const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
            // Establecer el estado con todas las tareas obtenidas del localStorage
            setTasks(tasksFromLocalStorage);
        }
    }, []);

    const addTask = (taskName) => {
        const backgroundColors = ["#c176c8", "#f17894", "#f1a977", "#e0db94", "#bdefd3"]
        // Obtener un color aleatorio del array
        const randomBackground = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Obtener las tareas del localStorage
        // Obtener el máximo id
        const maxId = storedTasks.reduce((max, task) => (task.id > max ? task.id : max), 0);
        console.log('El máximo id es:', maxId); // Imprime el máximo id encontrado en la consola

        const newId = maxId + 1;

        const newTask = {
            id: newId,
            name: taskName,
            complete: false,
            backgroundColor: randomBackground
        };

        const updatedTasks = [...storedTasks, newTask]; // Agregar la nueva tarea a las tareas almacenadas
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Actualizar el localStorage con las tareas actualizadas
        setTasks(updatedTasks); // Actualizar el estado tasks
    };

    const onDelete = (taskId) => {
        // Filtra las tareas para obtener una nueva lista sin la tarea que se va a eliminar
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Actualizar el localStorage con las tareas actualizadas
        setTasks(updatedTasks); // Actualizar el estado tasks
    };

    const onComplete = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, complete: !task.complete };
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Actualizar el localStorage con las tareas actualizadas
        setTasks(updatedTasks); // Actualizar el estado tasks
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