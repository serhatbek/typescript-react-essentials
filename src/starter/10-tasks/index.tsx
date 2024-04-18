import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div>
      <h2>Tasks</h2>
      <div>
        <Form />
        <List />
      </div>
    </div>
  );
};

export default Component;
