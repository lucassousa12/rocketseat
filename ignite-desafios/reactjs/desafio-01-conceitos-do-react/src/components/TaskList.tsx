import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    
    //Verifica se o Input está vazio.
    if(!newTaskTitle) {
      return
    }

    //Cria a nova task
    const newTask: Task = {
      id: tasks.length,
      title: newTaskTitle,
      isComplete: false
    } 

    //Adiciona a nova task a lista 'Tasks'
    setTasks(tasks => [...tasks, newTask])

  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID

    //Procura a Task do id passado e seta True no isComplete. Obs: O Else é necessário para mandar para o setTasks um objeto de array válido.
    const taskCompleted = tasks.map(task => {
      if (task.id == id ) {
        return ({
          ...task,
          isComplete: !task.isComplete
        })
      } else {
        return task
      }
    })

    //Adiciona a alteração.
    setTasks(taskCompleted)
    
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const rmTask = tasks.filter(task => task.id != id)

    setTasks(rmTask)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}

function taskInfo(taskInfo: any) {
  throw new Error('Function not implemented.');
}
