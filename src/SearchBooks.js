// import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    // onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

  render() {

    const { books } = this.props
    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            	type="text" 
            	placeholder="Search by title or author"
            	value={this.state.query}
            	onChange={(event) => this.updateQuery(event.target.value)}
            />
            
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          	{books.map((book) => (
          		<li key={book.id}>
          			<p>{book.title}</p>
          			<p>{book.authors[0]}</p>
          		</li>
          	))}

          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBooks