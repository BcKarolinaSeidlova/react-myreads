import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

//import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }


  updateShelf = (book, newshelf) => {
  

    BooksAPI.update(book, newshelf).then(() => {
      this.filterShelf()
    })  
  }


filterShelf = () => {
  BooksAPI.getAll().then((books)=> {
    this.setState({ books })
    })
}

componentDidMount() {
  this.filterShelf()
  }


  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            
                <Shelf name="Currently Reading"
                        books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                />

                <Shelf name="Want to Read"
                        books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                />

                <Shelf name="Read"
                        books={this.state.books.filter((book) => book.shelf === 'read')}
                onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                />
                
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BooksApp
