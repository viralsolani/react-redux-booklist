import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = { book.title } className="list-group-item"> { book.title } </li>
            );
        });
    }

    render() {
        return (
            <ul className =  "list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
    
}

function mapStatetoProps (state) {

        console.log(state);
        // whatever is returned will show as props 
        // inside of booklist
        return {
            books : state.books
        }
        
    }


export default connect(mapStatetoProps)(BookList);