import { useReducer, useEffect, useState } from 'react';
import uniqid from 'uniqid'
import Task from './components/Task'
import Input from './components/Input'
import Button from './components/Button'

import './App.css';

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { task: action.payload.task, id: action.payload.id, state: 'incomplete' }];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

function App() {

  const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  });

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleNewInput = (ev) => {
    setNewTask(ev.target.value);
  };

  const createTask = () => {
    const newId = uniqid();
    dispatch({ type: 'ADD_TASK', payload: { task: newTask, id: newId } });
    setNewTask('');
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
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
          {tasks.map((task) => {
            return (
              <div key={task.id} className='taskField'>
                <Input key={`checkbox-${task.id}`} id='checkbox' type="checkbox" />
                <Task key={`task-${task.id}`} title={task.task}></Task>
                <Button key={`trash-${task.id}`}
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