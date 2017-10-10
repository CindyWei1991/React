import React, { Component } from 'react';
import '../styles/navbarStyle.css';
class SearchBar extends Component {
  render() {
    return (
        <img src={require("../imgs/search-icon.png")} className="searchIcon"/>
    )
  }
}


export default SearchBar;