import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ShelfPage from './components/ShelfPage';
import HomePage from './components/HomePage';
import Inventory from './components/Inventory';
import Create from './components/Create';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shelf/:id" component={ShelfPage} />
            <Route path="/bin/:id" component={Inventory} />
            <Route path="/create/:id" component={Create} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
