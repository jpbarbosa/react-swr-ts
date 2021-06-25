import { createContext, useContext, useState } from 'react';
import { Task } from '../types/task';

type ContextType = {
  activeTask?: Task;
  setActiveTask: (task?: Task) => void;
};

const Context = createContext<ContextType>({
  setActiveTask: (task) => console.warn('no task provider'),
});

export const useActiveTask = () => useContext(Context);

export const ActiveTaskStore: React.FC = ({ children }) => {
  const [activeTask, setActiveTask] = useState<Task>();
  return (
    <Context.Provider value={{ activeTask, setActiveTask }}>
      {children}
    </Context.Provider>
  );
};
