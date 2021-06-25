import { useState } from 'react';

export const useForm = <T>(initialState: T, handleAction: Function) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAction(formState);
  };

  return { formState, handleChange, handleSubmit };
};
