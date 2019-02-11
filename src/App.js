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
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  fetchingAPI(searchValue){
    const base_URL ='https://www.googleapis.com/books/v1/volumes?q=intitle:'
    fetch(`${base_URL}${searchValue}`)
    .then(res => res.json())
    .then(resJ=> {
      const newItems = resJ.items.map(function(el,index){
        const sale = el.saleInfo.saleability === 'FOR_SALE' ? el.saleInfo.retailPrice.amount: null;
        return { key: index,
                 title: el.volumeInfo.title , 
                 authors: el.volumeInfo.authors, 
                 description: el.volumeInfo.description, 
                 thumbnail: el.volumeInfo.imageLinks.thumbnail, 
                 sale: el.saleInfo.saleability,
                 price: sale
      }}); 
      this.setState({
        lists: newItems
      })
    })
      
  }
  getSearchResults(val){
     this.fetchingAPI(val);
  }

  render() {
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
          {this.state.lists.map((el,index) =>
            (<Booklist 
              key={index}
              title= {el.title}
              authors= {el.authors}
              description= {el.description} 
              thumbnail= {el.thumbnail} 
              sale= {el.sale}
              price= {el.price}
              />)
          )}

        </main>
      </div>
    );
  }
}

export default App;
