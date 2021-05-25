// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Items from './Items';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1> Orders recently created </h1>
      <Items/>
    </div>);
  }
};

export default App;
