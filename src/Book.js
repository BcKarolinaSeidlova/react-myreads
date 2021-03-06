import React from 'react'


class Book extends React.Component {

  state = {
    shelf: this.props.book.shelf
  }

  setShelf = (e) => {
    e.preventDefault()
    this.setState({
      shelf: e.target.value
    })

    this.props.onUpdateBook(this.props.book, e.target.value)
  }
  
	render() { 

    const { book } = this.props

    //check if book has cover, if not then add empty url
    const imageLink = book.imageLinks ? book.imageLinks.thumbnail : ""

		return (
				<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, 
              backgroundImage: `url(${imageLink})`}}>
             </div>
              <div className="book-shelf-changer">
                <select value= {this.state.shelf ? this.state.shelf:'none'}
                        onChange = {this.setShelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.authors }</div>

        </div>
		  )
	}
}

export default Book