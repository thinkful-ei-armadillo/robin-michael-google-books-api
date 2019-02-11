import React from 'react';

class SearchAndFilter extends React.Component {
    constructor(props){
        super();
        this.state ={ 
            inputValue: null};
    }
    handleSubmit(ev){
        ev.preventDefault();
        const val = this.state.inputValue;
        this.props.handleInput(val);
    }    
    titleChanged(title) { 
        this.setState({ inputValue : title }); 
    }

    render(){
        console.log(this.props);
        return (
            <form>
                <label htmlFor="searchTerm">Search: </label>
                <input type="text" name="searchTerm" id="search" placeholder="henry" value={this.state.inputValue} onChange={e => this.titleChanged(e.target.value)}/>
                <input type="submit" name="submit" onClick={(e)=> this.handleSubmit(e)} value="search" />
            </form>
        )
    }
}

export default SearchAndFilter;