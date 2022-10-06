import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactUs.module.css';
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button, { ButtonProps } from '@mui/material/Button';

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <h1>Let Us Get Started With Your Project Today!</h1>
        <Button href="/contact" className={styles.button} variant="contained" size="large">Contact Us</Button>
      </div>
      <div className={styles.contactInfo}>
        <div>
          <h2>Our Address</h2>
          <p>1234 State Road 0<br/>Dodge City, KS<br/>12345</p>
        </div>
        <div>
          <h2>Phone Number</h2>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h2>Email Address</h2>
          <p>info@duguidconstruction.com</p>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div className={styles.icons}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;