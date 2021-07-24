import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Provider from './Context/LoginProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Route exact path="/" component={Login}/>
          <Route exact path="/profile" component={Profile} />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
