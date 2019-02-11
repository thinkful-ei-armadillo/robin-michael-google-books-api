import React from 'react';

class Booklist extends React.Component{
    render()
    {

        return (
            <div>
                <h2>Title: {this.props.title}</h2>
                {/* <img href={this.props.thumbnails} alt="pic"/> */}
                <ul>
                    <li>
                        <h4>Authors: {this.props.authors}</h4>
                    </li>
                    <li>
                        <div>Sale Price: {this.props.sale === 'FOR_SALE'? this.props.price: this.props.sale}</div> 
                    </li>
                    <li>
                        <p>Description: {this.props.description}</p> 
                    </li>
                </ul>
            </div>

        )
    }
}
export default Booklist;