import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

updateBook = (book, shelf) => {
    this.props.onUpdateShelf(book, shelf)
  }

render() { 
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.name }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                      <Book book= { book }
                        onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}/>
                    </li>
                    ))
                  }
                  
                </ol>
            </div>   
        </div>
        )
	}
	
}

export default Shelf