import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';

function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar bg=" #567d89" expand="lg" sticky="top">
      <div className="container-fluid">
        <h3>Morgan Rott</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#about-me">About</Dropdown.Item>
            <Dropdown.Item href="#projects">Portfolio</Dropdown.Item>
            <Dropdown.Item href="#Contact-Me">Contact</Dropdown.Item>
            <Dropdown.Item href="#Resume">Resume</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Nav;
{/* <nav>
      <a href="#About-Me">About Me</a>
      <a href="#Portfolio">Portfolio</a>
      <a href="#Contact-Me">Contact Me</a>
      <a href="#Resume">Resume</a>
    </nav>  */}