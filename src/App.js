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
  handleInput = (val) => {
    console.log(val)
  }
  render() {
    return (
      <div>
        <header>
          <h1>Google Book Seacrh</h1>
        </header>
        <div>
          <SeacrhAndFilter handleInput={() => this.handleInput} />
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
