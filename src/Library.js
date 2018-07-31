import React from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {
	getShelf = (shelfName) => {
		this.books.filter((book) => book.shelf === shelfName)
	}

	updateShelf = (book, newshelf) => {
    BooksAPI.update(book, newshelf).then(() => {
      this.filterShelf()
    })  
  }
	

	render () {


		return (
			<div className="app">
        		<div className="list-books">
          			<div className="list-books-title">
            			<h1>MyReads</h1>
          			</div>
          
          			<div className="list-books-content">
            			<div>
            
                		<Shelf name="Currently Reading"
                        	books= {this.getShelf('currentlyReading')}
                			onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                			/>

                		<Shelf name="Want to Read"
                		        books={this.getShelf('wantToRead')}
                		onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                		/>

                		<Shelf name="Read"
                		        books={this.getShelf('read')}
                		onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}
                		/>
                
            			</div>
          			</div>
          
        		</div>
      		</div>
        )
	}
	
}

export default Library