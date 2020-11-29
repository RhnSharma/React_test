import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./../App.css";

const TopNav = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  let location = useLocation();
  return (
    <div>
      {theme.mode === "dark" ? (
        <Navbar dark expand="md">
          <Link className="navbar-brand" id="brandName" to="/">
            Rohan Sharma
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {location.pathname !== "/" ? (
                <NavItem>
                  <Link to="/" className="navlink nav-link">
                    Home
                  </Link>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="#about" className="navlink">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#contact" className="navlink">
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#projects" className="navlink">
                      Projects
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/blogs">
                      Blog
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <Navbar light expand="md">
          <Link className="navbar-brand" id="brandName" to="/">
            Rohan Sharma
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {location.pathname !== "/" ? (
                <NavItem>
                  <Link to="/" className="navlink nav-link">
                    Home
                  </Link>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="#about" className="navlink">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#contact" className="navlink">
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#projects" className="navlink">
                      Projects
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/blogs">
                      Blog
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default TopNav;
