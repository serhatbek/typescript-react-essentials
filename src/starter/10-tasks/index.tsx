import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  console.log('tasks', tasks);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <section>
      <h2>Tasks</h2>
      <div>
        <Form addTask={addTask} />
        <List toggleTask={toggleTask} tasks={tasks} />
      </div>
    </section>
  );
};

export default Component;
