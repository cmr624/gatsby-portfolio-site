import PropTypes from "prop-types"
import React, { CSSProperties } from "react"
import {Nav, Navbar} from 'react-bootstrap';
import NavLink from './navLink';
import './header.css';

const Header = ({ siteTitle }) => (
    <Navbar collapseOnSelect expand="sm" style={{backgroundColor:'#000000'}}>
      <Navbar.Brand style={{color:"#FFFFFF"}}>
        <NavLink to="/">{siteTitle}</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" style={{backgroundColor:"black"}}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLink to="/">About</NavLink>
            <NavLink to="/personal">@Home</NavLink>
            <NavLink to="/scholastic">@Scholastic</NavLink>
            <NavLink to="/nyu">@NYU</NavLink>
            <NavLink to="/contact">@me</NavLink>
        </Nav>    
      </Navbar.Collapse>
    </Navbar>
      
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
