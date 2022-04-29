import React from 'react';
import { Header } from './Header';
import { TaskNew } from './tasks/New';
import { TaskList } from './tasks/List';
import { useActiveTask } from '../contexts/ActiveTask';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types/task';

export const App: React.FC = () => {
  const { setActiveTask } = useActiveTask();
  const { data, error, createTask, updateTask, removeTask } =
    useTasks(setActiveTask);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <TaskNew handleAction={createTask} />
        <TaskList
          data={data}
          error={error}
          handleUpdateTask={updateTask}
          handleRemoveTask={removeTask}
        />
      </div>
    </div>
  );
};
