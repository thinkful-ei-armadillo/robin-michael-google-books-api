import React, { Component } from 'react';
import './App.css';
import SeacrhAndFilter from './SearchAndFilter';
import Booklist from './Booklist';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Google Book Seacrh</h1>
        </header>
        <div>
          <SeacrhAndFilter />
        </div>
        <main>
          <Booklist />
        </main>
      </div>
    );
  }
}

export default App;
