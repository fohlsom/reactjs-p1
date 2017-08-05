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

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })    
  }

  render() {
    return (
      <div className="app">
          <Route path='/search' render={({ history }) => (
            <SearchBooks 
              books={this.state.books}
              query={this.state.query}
            />
          )}/>
          <Route exact path='/' render={() => (
            <div>
              <ListBooks/>
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
