import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';
import { v4 as uuidv4 } from 'uuid';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  console.log('tasks', tasks);

  const addTask = (text: string) => {
    setTasks((prevState: Task[]) => {
      return [
        ...prevState,
        {
          id: uuidv4(),
          description: text,
          isCompleted: isCompleted,
        },
      ];
    });
  };

  const toggleTask = (): void => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <Form addTask={addTask} />
        <List toggleTask={toggleTask} />
      </div>
    </div>
  );
};

export default Component;
