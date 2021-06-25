import React from 'react';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';
import { useActiveTask } from '../contexts/ActiveTask';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types/task';

export const App: React.FC = () => {
  const { setActiveTask } = useActiveTask();
  const { data, error, createTask, updateTask, removeTask } = useTasks();

  const handleUpdateTask = (task: Task) => {
    updateTask(task);
    setActiveTask();
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <TaskNew handleAction={createTask} />
        <TaskList
          data={data}
          error={error}
          handleUpdateTask={handleUpdateTask}
          handleRemoveTask={removeTask}
        />
      </div>
    </div>
  );
};
