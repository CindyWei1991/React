import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import '../styles/navbarStyle.css';
import LottieControl from './logoAnimation';

class NavbarResPonsive extends Component{
    render() {
        return (
            
            <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                  <LottieControl />
                <a href="#">Haoran Lighting</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">About Us</NavItem>
                <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>LED Emergency Lighting</MenuItem>
                  <MenuItem eventKey={3.2}>LED Lamps Lighting</MenuItem>
                  <MenuItem eventKey={3.3}>LED Office Lighting</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Traditional Lighting</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Contact Us</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
      

export default NavbarResPonsive;
