import React from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
        books: []
    }

  componentDidMount() {
    this.getBooks()
  }

  // Gets all the books from the backend
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })    
  }

  // Updates the shelf value of the book
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((b) => {
      this.getBooks();
    });
  }

  render() {
    return (
      <div className="app">
          <Route path='/search' render={({ history }) => (
            <SearchBooks 
              books={this.state.books}
              query={this.state.query}
              onUpdateBook={this.updateBook}
            />
          )}/>
          <Route exact path='/' render={() => (
            <div>
              <ListBooks
                books={this.state.books}
                onUpdateBook={this.updateBook}
              />
              <div className="open-search">
                <Link to="/search"></Link>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
