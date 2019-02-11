import React, { Component } from 'react';
import './App.css';
import SearchAndFilter from './SearchAndFilter';
import Booklist from './Booklist';
import FilterBooklist from './FilterBooklist';

class App extends Component {
  
  constructor(Props){
    super();
    this.state = {
      lists: [],
      input: ""
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  handleInput = (val) => {
    

    console.log(val)
  }

  getSearchResults(val){
     //const results = this.props.getSearchResults(val);
     console.log(val);
  }

  componentDidUpdate(){
    console.log(this.state.input);
  }

  render() {
    console.log(this.state.input);
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div>
          <SearchAndFilter getSearchResults={val => this.getSearchResults(val)} />
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
