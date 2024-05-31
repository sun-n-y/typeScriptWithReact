import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 3,
    url: 'some url',
    text: 'some text',
  },
];

function Component() {
  const [text, setText] = useState('string');
  const [number, setNumber] = useState(10);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText('hello');
          setNumber(21);
          setList(['12', '12', '32']);
          setLinks([...links, { id: 4, url: 'hello', text: 'hi' }]);
        }}
      >
        click me
      </button>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
export default Component;
