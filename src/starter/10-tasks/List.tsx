import { type Task } from './types';

type ListProps = {
  list: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

const List = ({ list, toggleTask }: ListProps) => {
  return (
    <ul className="list">
      {list.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask({ id: task.id })}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
