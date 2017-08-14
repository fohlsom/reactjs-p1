import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book';



class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  componentWillReceiveProps(nextProps) {    
    let books = this.state.books;
    this.updateShelfValues(nextProps.books, books);
    this.setState( {books: books} );
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    if (query.length > 0) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          console.log("Error message: " + results.error)
          this.setState( {books: [] });
        } else {
          this.updateShelfValues(this.props.books, results);
          this.setState({ books: results })
        }
      })      
    }
    return 
  }

  updateShelfValues = (booksInProp, booksInResults) => {

    booksInResults.forEach((b) => {
      b.shelf = 'none';
      for (var i = 0; i < booksInProp.length; i++) {
        if (b.id === booksInProp[i].id) {
          b.shelf = booksInProp[i].shelf;
        }
      }
    });
  }


  render() {

    const { query, books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            	type="text" 
            	placeholder="Search by title or author"
            	value={query}
            	onChange={(event) => this.updateQuery(event.target.value)}
            />
            
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          	{books.map((book) => (
          		<li key={book.id}>
                 <Book data={book} onUpdateBook={this.props.onUpdateBook}></Book>
          		</li>
          	))}

          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBooks