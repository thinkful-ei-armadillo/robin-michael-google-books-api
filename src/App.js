import React, { Component } from 'react';
import './App.css';
import SearchAndFilter from './SearchAndFilter';
import Booklist from './Booklist';
import FilterBooklist from './FilterBooklist';

class App extends Component {
  
  constructor(Props){
    super();
    this.state = {
      searchValue: null,
      lists: [],
    }
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  fetchingAPI(searchValue, filterOption){
    const base_URL ='https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const filterResults = !filterOption ? '': `&filter:${filterOption}`;
    fetch(`${base_URL}${searchValue}${filterResults}`)
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
                 price: sale,
                 printType: el.volumeInfo.printType,
                 viewability: el.accessInfo.viewability,
                 ebook: el.accessInfo.epub.isAvailable
      }}); 
      
      this.setState({
        lists: newItems
      })
     
    })
      
  }
  getSearchResults(val){
    
    this.setState({
      searchValue: val
    });
    console.log(this.state.searchValue)
     this.fetchingAPI(val);

  }

  filterBookType(val){
    console.log(val);
    this.fetchingAPI(this.state.searchValue, val);
  }

  filterPrintType(val){
    console.log(val);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div>
          <SearchAndFilter getSearchResults={val => this.getSearchResults(val)} />
          <FilterBooklist  
              onBookType={val => this.filterBookType(val)}
              onPrintType ={val => this.filterPrintType(val)}/>
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
