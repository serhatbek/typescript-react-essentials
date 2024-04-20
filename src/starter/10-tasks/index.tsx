import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  console.log('tasks', tasks);

  const addTask = (item: Task) => {
    setTasks((prevState: Task[]) => {
      return [...prevState, item];
    });
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <Form addTask={addTask} />
        <List />
      </div>
    </div>
  );
};

export default Component;
