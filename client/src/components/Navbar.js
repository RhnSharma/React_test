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
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import "./../App.css";

const TopNav = ({ theme, setTheme }) => {
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
                <div className="themeswitch">
                  <NavItem>
                    <Link to="/" className="navlink nav-link">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    {theme.mode === "light" ? (
                      <FaMoon
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="black"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FiSun
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="white"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </NavItem>
                </div>
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
                  <NavItem className="nav-link">
                    {theme.mode === "light" ? (
                      <FaMoon
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="black"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FiSun
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="white"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )}
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
                <div className="themeswitch">
                  <NavItem>
                    <Link to="/" className="navlink nav-link">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    {theme.mode === "light" ? (
                      <FaMoon
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="black"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FiSun
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="white"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </NavItem>
                </div>
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
                  <NavItem className="nav-link">
                    {theme.mode === "light" ? (
                      <FaMoon
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="black"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FiSun
                        onClick={() => {
                          theme.mode === "light"
                            ? setTheme({ mode: "dark" })
                            : setTheme({ mode: "light" });
                        }}
                        color="white"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    )}
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
