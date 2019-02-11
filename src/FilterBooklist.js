import React from 'react';

class FilterBooklist extends React.Component{
    handlePrintType(ev){
       const val = ev.target.value;
       this.props.onPrintType(val);

       
    }
    handleBookType(ev){
        const val = ev.target.value;
        this.props.onBookType(val);
     }
     
    
    render(){
        return (
            <form >
                <label htmlFor="print-type">Print Type</label>
                <select onChange={(ev) => this.handlePrintType(ev)}name="print-type">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
                <label htmlFor="book-type">Book-type: </label>
                <select onChange={(ev) => this.handleBookType(ev)}name="book-type">
                    <option value="">All</option>
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="full">full</option>
                    <option value="partial">partial</option>
                </select>
            </form>
        )
    }
}

export default FilterBooklist;