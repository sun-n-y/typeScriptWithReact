import { useState } from 'react';
import { type Task } from './types';

type ComponentProps = {
  addTask(task: Task): void;
};

const Form = ({ addTask }: ComponentProps) => {
  const [task, setTask] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) {
      alert('please enter value');
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      description: task,
      isCompleted: false,
    });
  };

  return (
    <form className="form task-form" onSubmit={submitHandler}>
      <input
        type="text"
        name="form-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn ">
        add task
      </button>
    </form>
  );
};

export default Form;
