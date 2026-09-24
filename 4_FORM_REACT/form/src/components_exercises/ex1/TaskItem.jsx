import React from 'react'

const TaskItem = ({newTask}) => {

  return (
    <div>
        <form>
            <label htmlFor="task">Insira a nova tarefa: </label>
            <input type="text" name='task' placeholder='Insira a nova tarefa...'/>
        </form>
    </div>
  )
}

export default TaskItem