import { useState } from 'react';

const Component = () => {
  const [text, setText] = useState('Unicorn');
  const [number, setNumber] = useState(6);
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <h2 className='mb-1'>React State & Typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          setText('Horses in my dreams');
          setNumber(number * 2);
          setList(['meow', 'cik', 'tıs']);
        }}
      >
        click me
      </button>
      <p>{text}</p>
      <p>{number}</p>
      <p>{list}</p>
    </div>
  );
};

export default Component;
