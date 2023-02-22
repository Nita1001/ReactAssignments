import { useState, useEffect } from 'react';
import uniqid from 'uniqid'
import Task from './components/Task'
import Input from './components/Input'
import Button from './components/Button'

import './App.css';

function App() {

  const [tasks, setTasks] = useState(()=>{
   
      const data = localStorage.getItem('tasks');
      if (data) {
        return JSON.parse(data);
      } else{
        return [];
      }
    
  });

  const [newTask, setNewTask] = useState('');


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleNewInput = (ev) => {
    setNewTask(ev.target.value);
  };

  const createTask = () => {
    setTasks((tasks) => [...tasks, { task: newTask, id: uniqid(), state: 'incomplete'}]);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Input
            type='text'
            className={'task-input'}
            value={newTask}
            handleNewInput={handleNewInput}
            placeholder='Insert New Task' />
          <Button className='' title='Add' handleClick={createTask}></Button>
        </div>
        <div className='tasks-container'>
          {tasks.map((task, index) => {
            return (
              <div key={uniqid()} className='taskField'>
                <Input key={uniqid()} id="checkbox" type="checkbox" />
                <Task key={uniqid()} title={task.task}></Task>
                <Button key={uniqid()}
                  className='trash'
                  title='Delete'
                  handleClick={() => deleteTask(task.id)}></Button>
              </div>
            );
          })}           

        </div>

      </header>
    </div>
  );
}

export default App;