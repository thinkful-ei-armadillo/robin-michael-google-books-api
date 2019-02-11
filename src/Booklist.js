import React from 'react';

class Booklist extends React.Component{
    render(){
        return (
            <div>
                <h2>Title</h2>
                <ul>
                    <li>
                        <h2>Author</h2>
                    </li>
                    <li>
                        <div>Price</div> 
                    </li>
                    <li>
                        <p> description</p> 
                    </li>
                </ul>
            </div>

        )
    }
}
export default Booklist;