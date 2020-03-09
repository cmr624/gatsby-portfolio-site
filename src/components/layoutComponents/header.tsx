import PropTypes from "prop-types"
import React, { CSSProperties } from "react"
import {Nav, Navbar, Container} from 'react-bootstrap';
import NavLink, {NavLinkCenter} from '../globalComponents/navLink';
import './header.css';

const Header = ({ siteTitle }) => (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#000000'}}>
      <Navbar.Brand style={{color:"#FFFFFF"}}>
        <NavLink to="/">{siteTitle}</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" style={{backgroundColor:"black"}}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLinkCenter to="/personal">At Home</NavLinkCenter>
            <NavLinkCenter to="/scholastic">At Scholastic</NavLinkCenter>
            <NavLinkCenter to="/nyu">At NYU</NavLinkCenter>
        </Nav>
        <NavLink to="/contact">Contact</NavLink>   
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
