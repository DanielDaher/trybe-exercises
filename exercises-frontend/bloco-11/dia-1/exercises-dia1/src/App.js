import './App.css';
import Task from './Task';

const tarefas = ['Acordar', 'Escovar os dentes', 'Estudar', 'Rocket League', 'Dormir'];

const hello = <h1>Hello exercício 1</h1>;

function App() {
  return (
    <div>
      <div className = 'hero-title'> {hello} </div>

      <div className = 'list'>
    <ul>
      { tarefas.map((tarefa) => Task(tarefa))}
    </ul>
      </div>
      <footer className = 'footer'>Made by</footer>
  </div>);
}

export default App;
