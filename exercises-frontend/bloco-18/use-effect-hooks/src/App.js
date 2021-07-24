import { useState } from 'react';
import HelloWorld from './Components/HelloWorld';
import './App.css';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {(show) ? <HelloWorld/> : null}
      <button onClick={() => setShow(false)}>Hide</button>
      <button onClick={() => setShow(true)}>Show</button>
    </div>
  );
}

export default App;
