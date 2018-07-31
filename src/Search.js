import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {


  render () {
  	return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/" onClick={this.props.clearQuery}>Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text"
                         placeholder="Search by title or author"
                         value={this.props.query}
                         onChange={(event) => this.props.updateQuery(event.target.value)}
                  />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.props.showingBooks.map((book) => (
                  	<li key={book.id}>
                    <Book book={book}
                          onUpdateBook={(book, shelf) => this.props.updateShelf(book, shelf)}/>
                  </li>))}
                </ol>
              </div>
            </div>
        )
	}
}

export default Search;