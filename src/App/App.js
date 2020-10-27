import React, { Component } from 'react';
import Header from './components/header/header';
import List from './components/list/list';
import Group from './components/group/group';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <Group />
        <List />
      </div>
    );
  }
}

export default App;
