import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const Nav = () => {
  const {user, error, isLoading } = useUser();
  return (
    <nav className={styles.nav}>
      <ul>
        <img src="/img/dc-logo.png"/>
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
        {user ? (
          <Link href='/api/auth/logout'><a className={styles.link}>Logout</a></Link>
        ) : (
          <Link href='/api/auth/login'><a className={styles.link}>Login</a></Link>
        )}
        </li>
        <li>
          <Link href='/contact'><a className={styles.link}>Contact Us</a></Link>
        </li>
        <li>
          {user ? (
              <p className={styles.link}>{user.email}</p>
          ) : (<></>)}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;