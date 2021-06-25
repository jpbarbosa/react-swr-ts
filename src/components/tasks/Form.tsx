import React from 'react';
import { Task } from '../../types/task';
import { useForm } from '../../hooks/useForm';

interface IProps {
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ handleAction }) => {
  const { formState, handleChange, handleSubmit } = useForm<Task>(
    { name: '' },
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
