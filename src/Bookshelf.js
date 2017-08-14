import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';

function Bookshelf (props) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>
        {props.title}
      </h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.books.map((book) =>(
            <li key={book.id} >
              <Book data={book}></Book>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  // onUpdateBook: PropTypes.func.isRequired
}

export default Bookshelf;