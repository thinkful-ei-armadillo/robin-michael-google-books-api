import React from 'react';

class SearchAndFilter extends React.Component {
    render(){
        return (
            <form>
                <label HTMLfor="searchTerm">Search: </label>
                <input type="text" name="searchTerm" placeholder="henry" />
                <input type="submit" name="submit" value="search" />
            </form>
        )
    }
}

export default SearchAndFilter;