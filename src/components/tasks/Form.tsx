import React from 'react';
import { Task } from '../../types/task';
import { useForm } from '../../hooks/useForm';

interface IProps {
  activeTask: Task;
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ activeTask, handleAction }) => {
  const { formState, handleChange, handleSubmit } = useForm<Task>(
    activeTask,
    handleAction
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
      />
      <input type="submit" />
    </form>
  );
};
