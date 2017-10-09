import React, { Component } from 'react';
import '../styles/navbarStyle.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="searchBar">
            
            <input type="text" className="form-control searchInput" placeholder = "Search"/>
        </div>
    )
  }
}


export default SearchBar;