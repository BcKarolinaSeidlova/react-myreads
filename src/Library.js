import React from 'react'
import Shelf from './Shelf'
import './App.css'

class Library extends React.Component {
	

	render () {


		return (
			<div className="list-books">
			    <div className="list-books-title">
			          <h1>MyReads</h1>
			    </div>
 				<div className="bookshelf">
	          
	                <Shelf
	                	name='Currently Reading' 
	                />
	           
	                <Shelf
	                	name='Want to Read' 
	                />
	          
	                <Shelf
	                	name='Read Books' 
	                />

	            </div>
	        </div>

            )
	}
	
}

export default Library