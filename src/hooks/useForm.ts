import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return { formState, handleChange, handleSubmit };
};