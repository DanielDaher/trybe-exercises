import { useState, useEffect} from 'react';

function HelloWorld() {

const [message, setMessage] = useState('Cheguei');

  useEffect(() => {
    console.log(message);
    return () => console.log('saí');
  }, [message]);

  return <div>
    'Olá'
    <button onClick={() => setMessage('Mudei!')}>Mudar</button>
  </div>
}

export default HelloWorld;
