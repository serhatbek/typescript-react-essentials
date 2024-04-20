import { Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
  deleteTask: (taskId: string) => void;
};

const List = ({ toggleTask, tasks, deleteTask }: ListProps) => {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className='task-text'>{task.description}</p>
            <div>
              <input
                type='checkbox'
                checked={task.isCompleted}
                onChange={() => {
                  toggleTask({ id: task.id });
                }}
              />
              <button
                style={{ marginLeft: '20px' }}
                className='btn'
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
