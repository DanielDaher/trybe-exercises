import './App.css';
import Home from './Home';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Personagens from './Personagens';
import Empty from './Empty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Personagens} />
        <Route exact path='/empty' component={Empty} />
      </Switch>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
