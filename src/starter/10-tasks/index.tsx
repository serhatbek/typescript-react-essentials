import { useEffect, useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const updateTasks = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks());

  console.log('tasks', tasks);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    updateTasks(tasks);
  }, [tasks]);

  return (
    <section>
      <h2>Tasks</h2>
      <div>
        <Form addTask={addTask} />
        <List toggleTask={toggleTask} tasks={tasks} deleteTask={deleteTask} />
      </div>
    </section>
  );
};

export default Component;
