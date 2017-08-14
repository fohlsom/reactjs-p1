// import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book';



class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    if (query.length > 0) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          console.log("Error message: " + results.error)
          this.setState( {books: [] });
        } else {
          this.setState({ books: results })
        }
      })      
    }
    return 
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
                 <Book data={book}></Book>
          		</li>
          	))}

          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBooks