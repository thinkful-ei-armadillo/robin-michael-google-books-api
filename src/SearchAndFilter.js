import React from 'react';

class SearchAndFilter extends React.Component {
    handleSubmit(ev){
        ev.preventDefault();
        const val = ev.target.searchTerm.value;
        console.log(val);
<<<<<<< HEAD
=======
        return this.props.getSearchResults(val);
>>>>>>> d688c725d5bf15923c2a38bf225ed0e60b02743a
    }    
  
    render(){
        
        return (
            <form onSubmit={(ev) => this.handleSubmit(ev)}>
                <label htmlFor="searchTerm">Search: </label>
                <input type="text" id="search" placeholder="henry" name="searchTerm"/>
                <input type="submit" name="submit" value="search" />
            </form>
        )
    }
}


export default SearchAndFilter;