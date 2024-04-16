import { useState } from 'react';

interface Link {
  id: number;
  url: string;
  text: string;
}

const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/',
    text: 'Products',
  },
  {
    id: 3,
    url: '/',
    text: 'About',
  },
];

const Component = () => {
  const [text, setText] = useState('Unicorn');
  const [number, setNumber] = useState(6);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  console.log(links);
  return (
    <div>
      <h2 className='mb-1'>React State & Typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          setText('Horses in my dreams');
          setNumber(number * 2);
          setList(['meow', 'cik', 'tıs']);
          setLinks([...links, { id: 3, url: '/', text: 'Contact' }]);
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
