import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'




class Library extends React.Component {

	render () {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf name="Currently Reading"
                    books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
                    onUpdateShelf={(book, shelf) => this.props.updateShelf(book, shelf)}
                  />

            <Shelf name="Want to Read"
                    books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
                    onUpdateShelf={(book, shelf) => this.props.updateShelf(book, shelf)}
                  />

            <Shelf name="Read"
                    books={this.props.books.filter((book) => book.shelf === 'read')}
                    onUpdateShelf={(book, shelf) => this.props.updateShelf(book, shelf)}
                  />
                
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div> 
      </div>
    )
  }
	
}

export default Library