import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [list, setList] = useState<Task[]>(() => loadTasks());

  function addTask(task: Task) {
    setList([...list, task]);
  }

  const toggleTask = ({ id }: { id: string }) => {
    setList(
      list.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage(list);
  }, [list]);

  return (
    <section>
      <Form addTask={addTask} />
      <List list={list} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
