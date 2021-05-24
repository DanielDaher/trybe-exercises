import './App.css';
import HelloWorld from './helloWorld';

function App() {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'blue';
  return <HelloWorld />;
}

export default App;
