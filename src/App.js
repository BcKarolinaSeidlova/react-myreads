import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import Search from './Search'
import './App.css'

class App extends React.Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
  }

  allBooks = () => {
  BooksAPI.getAll().then((books)=> {
    this.setState({ books })
    })
  }

  componentDidMount() {
  this.allBooks()
  }

  updateShelf = (book, newshelf) => {
    BooksAPI.update(book, newshelf).then(() => {
      this.allBooks()
    })  
  }



 // managing the input state
  updateQuery = (query) => {
    this.setState({query: query})
    let showingBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.state.books.findIndex(c => c.id === b.id)
            if( index >= 0 ) {
              return this.state.books[index]
            } else {
              return b
            }
          })
        }
        this.setState({showingBooks})
      })
    }
    else {
      this.setState({showingBooks})
    }
  }



  render() {
    return ( <div className="app">
      <Route exact path="/search" render={() => (
      <Search
        updateQuery = {this.updateQuery}
        updateShelf = {this.updateShelf}
        showingBooks = {this.state.showingBooks}
        query = {this.state.query} />
        )} />

      
      <Route exact path="/" render={() => (
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
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div> 

        )}/>
      </div>
    )
  }
}

export default App
