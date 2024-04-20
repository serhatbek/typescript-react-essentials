import { useState } from 'react';

type FormProps = {
  addTask: (text: string) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter a value!');
      return;
    }

    addTask(text);
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
