import './App.css';
import Home from './Home';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Personagens from './Personagens';
import Empty from './Empty';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Personagens} />
        <Route exact path='/empty' component={Empty} />
        <Route path='/details/:id' component={Details} />
      </Switch>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
