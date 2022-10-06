import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  const {user, error, isLoading } = useUser();
  return (
    <Navbar bg="light" expand="lg" className={styles.coloredNav}>
    <Container>
    <Navbar.Brand href="#home">
            <img
              alt="Duguid Construction Logo"
              src="/img/dc-logo.png"
              className={styles.logo}
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className={styles.link}>HOME</Nav.Link>
          <Nav.Link href="/clientportal" className={styles.link}>JOBS</Nav.Link>
          <Nav.Link href="/reviews" className={styles.link}>REVIEWS</Nav.Link>
          <Nav.Link href="/employeeportal" className={styles.link}>EMPLOYEES</Nav.Link>
          <Nav.Link href="/contact" className={styles.link}>CONTACT</Nav.Link>
          {user ? (
          <Nav.Link href='/api/auth/logout' className={styles.link}>LOGOUT</Nav.Link>
        ) : (
          <Nav.Link href='/api/auth/login' className={styles.link}>LOGIN</Nav.Link>
        )}
         {user ? (
              <p className={styles.link}>{user.name}{console.log(user)}</p>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navigation;