import './App.css';
import Task from './Task';

const tarefas = ['Acordar', 'Escovar os dentes', 'Estudar', 'Rocket League', 'Dormir'];

const hello = <h1>Hello exercício 1</h1>;

function App() {
  return (
    <div >
    {hello}
    <ul>
      { tarefas.map((tarefa) => Task(tarefa))}
    </ul>
  </div>);
}

export default App;
