import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Task } from './types';

type FormProps = {
  addTask: (item: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text == '') {
      console.log('please enter a value');
      return;
    }
    addTask({
      id: uuidv4(),
      description: text,
      isCompleted: false,
    });
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='text' value={text} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
