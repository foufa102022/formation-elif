// TaskList.js
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4']);

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
