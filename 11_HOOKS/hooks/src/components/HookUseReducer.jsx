import React from 'react'
import { useReducer, useState } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {

        return Math.floor(Math.random() * 100)

    }, 0)

    const initialTasks = [
        {id: 1, text: "Fazer compras"},
        {id: 2, text: "Estudar React"}
    ]

    const taskReducer = (state, action) => {

        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText("")

                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            default:
                return state
    }
}

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {

        e.preventDefault()

        dispatchTasks({type: "ADD"})

    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }
 
  return (
    <div>

        <h2>UseReducer</h2>
        <p>Número: {number}</p>

        <button onClick={dispatch}>Alterar número</button>

        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="newtask">Adicionar tarefa: </label>
            <input type="text" id='newtask' value={taskText} onChange={(e) => setTaskText(e.target.value)}/>

            <input type="submit" value={"enviar"} />
        </form>

        <ul>
        {tasks.map(task => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>Nome da tarefa: {task.text}</li>
        ))}
        </ul>

    </div>
  )
}

export default HookUseReducer