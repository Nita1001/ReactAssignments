import React, { useState } from 'react';
import './App.css';

const todoList = [
  { name: 'CSS', completed: true },
  { name: 'JavaScript', completed: true },
  { name: 'Learn React', completed: false },
  { name: 'Learn mongoDB', completed: false },
  { name: 'Learn Node JS', completed: false },
];

const App = () => {
  const [tasks, setTasks] = useState(todoList);

  const handleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            <span className={todo.completed ? 'completed' : ''}>{todo.name}</span>
            <span onClick={() => handleCompleted(index)}>{todo.completed ? '✔' : '✘'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;