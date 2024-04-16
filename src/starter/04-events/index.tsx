import { useState } from 'react';

interface Person {
  text: string;
  email: string;
}

const Component = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //NOTE - If we setup functions as references, we need to provide correct type for the event and correct HTML element.
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //NOTE - If we setup functions as references, we need to provide correct type for the event and correct HTML element.
    e.preventDefault();
    const formData = new FormData(e.currentTarget); //NOTE - To use FormData, we need to give names to form elements (name, email, password...)
    //_____------- OR -----______
    // const formData = new FormData(e.target as HTMLFormElement); //NOTE - Wee need a type assertion with FormData, this tells TypeScript to treat e.target as an HTMLFormElement object.
    // const text = formData.get('text') as string;    //NOTE - formData.get() get from data one by one.
    // const email = formData.get('email') as string;
    // const data: Person = {
    //   text,
    //   email,
    // };
    //_____------- OR -----______
    const data = Object.fromEntries(formData); //NOTE - Object.fromEntries() gets all the form data at once.
    const person: Person = {
      name: data.name as string,
      email: data.email as string,
    };
  };

  return (
    <section>
      <h2>Events Example</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input mb-1'
          value={text}
          onChange={(e) => setText(e.target.value)} //NOTE - If we use event in callback inline function, typescript knows that it is event.
          name='text'
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
};

export default Component;
