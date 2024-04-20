import { Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

const List = ({ toggleTask, tasks }: ListProps) => {
  return (
    <ul>
      {tasks?.map((task) => {
        const { id, description, isCompleted } = task;
        return (
          <li key={id}>
            {description}
            <input
              type='checkbox'
              onChange={() => toggleTask({ id: task.id })}
              checked={isCompleted}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
