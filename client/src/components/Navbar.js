import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './../App.css';

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar-dark' style={{'backgroundColor':'#0e0e0e'}} expand="md">
  <NavbarBrand className='brandName'><Link id='brandName' to='/'>Rohan Sharma</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/#about" className='navlink'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact" className='navlink'>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#projects" className='navlink'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink'><Link id='bloglink' to='/blogs'>Blog</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;