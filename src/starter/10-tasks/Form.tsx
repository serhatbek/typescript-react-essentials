import { useState } from 'react';
import { Task } from './types';
import { v4 as uuidv4 } from 'uuid';

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter a value!');
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
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        className='form-input'
      />
      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
};

export default Form;
