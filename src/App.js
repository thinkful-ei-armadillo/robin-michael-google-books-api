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
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  handleInput = (val) => {
    
<<<<<<< HEAD
  }

=======
    console.log(val)
  }

  getSearchResults(val){
     //const results = this.props.getSearchResults(val);
     console.log(val);
  }


>>>>>>> d688c725d5bf15923c2a38bf225ed0e60b02743a
  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div>
          <SeacrhAndFilter getSearchResults={this.getSearchResults()} />
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
