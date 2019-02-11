import React, { Component } from 'react';
import './App.css';
import SeacrhAndFilter from './SearchAndFilter';
import Booklist from './Booklist';
import FilterBooklist from './FilterBooklist';

class App extends Component {
  
  constructor(Props){
    super();
    this.state = {
      lists: []
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Seacrh</h1>
        </header>
        <div>
          <SeacrhAndFilter />
          <FilterBooklist />
        </div>
          
        <main>
          <Booklist />
        </main>
      </div>
    );
  }
}

export default App;
