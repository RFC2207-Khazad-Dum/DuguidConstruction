import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <img src="/img/dc-logo.png" alt="png of a roof representing company logo"/>
        <li>
          <Link href='/'><a className={styles.link}>Home</a></Link>
        </li>
        <li>
          <Link href='/clientportal'><a className={styles.link}>Job Requests</a></Link>
        </li>
        <li>
          <Link href='/reviews'><a className={styles.link}>Reviews</a></Link>
        </li>
        <li>
          <Link href='/employeeportal'><a className={styles.link}>Employees</a></Link>
        </li>
        <li>
          <Link href='/login'><a className={styles.link}>Login</a></Link>
        </li>
        <li>
          <Link href='/contact'><a className={styles.link}>Contact Us</a></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;