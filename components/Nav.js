import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/dc-logo.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/clientportal">Job Requests</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/employeeportal">Employees</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    // <nav className={styles.nav}>
    //   <ul>
    //     <img src="/img/dc-logo.png"/>
    //     <li>
    //       <Link href='/'><a className={styles.link}>Home</a></Link>
    //     </li>
    //     <li>
    //       <Link href='/clientportal'><a className={styles.link}>Job Requests</a></Link>
    //     </li>
    //     <li>
    //       <Link href='/reviews'><a className={styles.link}>Reviews</a></Link>
    //     </li>
    //     <li>
    //       <Link href='/employeeportal'><a className={styles.link}>Employees</a></Link>
    //     </li>
    //     <li>
    //       <Link href='/login'><a className={styles.link}>Login</a></Link>
    //     </li>
    //     <li>
    //       <Link href='/contact'><a className={styles.link}>Contact Us</a></Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navigation;