import React from 'react';

class Booklist extends React.Component{
    render(){console.log(this.props)
    

        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    <li>
                        <h4>{this.props.authors}</h4>
                    </li>
                    <li>
                        <div>{this.props.sale === 'FOR_SALE'? this.props.price: this.props.sale}</div> 
                    </li>
                    <li>
                        <p> {this.props.description}</p> 
                    </li>
                </ul>
            </div>

        )
    }
}
export default Booklist;