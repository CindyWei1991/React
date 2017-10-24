import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/footer.css';

class Footer extends Component {

  render() {
    return (
    <div>
        <footer className="App-footer">
          <div className="container">
            <div className="column1">
              <div className="columnHeader">
                Products
              </div>
              <div className="columnContent">
              <ul>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              </ul>
              </div>
            </div>
            <div className="column2">
            <div className="columnHeader">
                News
              </div>
              <div className="columnContent">
                <ul>
                <li href="#">Link2</li>
                <li href="#">Link2</li>
                <li href="#">Link2</li>
                </ul>
              </div>
            </div>
            <div className="column3">
              <div className="columnHeader">
                Contact Us
              </div>
              <div className="columnContent">
              <ul>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              </ul>
              </div>
            </div>
            <div className="column4">
              <div className="columnHeader">
                Address
              </div>
              <div className="columnContent">
              <ul>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              <li href="#">Link2</li>
              </ul>
              </div>
            </div>
          </div>
           
       </footer>
    </div>
    )
  }
}


export default Footer;