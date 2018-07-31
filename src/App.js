import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
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

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.allBooks()
    })  
  }



 // search input
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

//clear query and book list when closing the search bar
clearQuery = () => {
  this.setState({
    query: '',
    showingBooks: []
    })
}

  render() {
    return ( <div className="app">
      <Route exact path="/search" render={() => (
      <Search
        updateQuery = {this.updateQuery}
        clearQuery = {this.clearQuery}
        updateShelf = {this.updateShelf}
        showingBooks = {this.state.showingBooks}
        query = {this.state.query}
         />
        )} />

      
      <Route exact path="/" render={() => (
        <Library
        books = {this.state.books}
        updateShelf = {this.updateShelf} /> 
        )}/>
      </div>

      
    )
  }
}

export default App
