import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";
import './Navbar.css';
import { Bio } from "../../data/info";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <div className="navbar-background">
   <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Skills">
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Projects">
                PROJECTS
              </Link>
            </li>

          </ul>
        </nav>
        </header>
    </div>
  );
};

export default Navbar;