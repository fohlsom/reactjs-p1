// import React from 'react'
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import Bookshelf from './Bookshelf'



class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

  const { books } = this.props

  let currentlyReading = books.filter((b) => b.shelf === 'currentlyReading')
  let wantToRead = books.filter((b) => b.shelf === 'wantToRead')
  let read = books.filter((b) => b.shelf === 'read')

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title='Currently reading' books={ currentlyReading}/>
            <Bookshelf title='Want to read' books={ wantToRead}/>
            <Bookshelf title='Read' books={ read}/>
          </div>
        </div>
      </div>
    )
  }
}
export default ListBooks