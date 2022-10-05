import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <h1 className={styles.testimonialTitle}>Testimonials from our Clients</h1>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedback}>
          <h2>Selina D.</h2>
          <p>Duguid Construction did a phenomenal job with our recent project. We had a number of issues in our house, and they were incredibly friendly and professional.</p>
        </div>
        <div className={styles.feedback}>
          <h2>Yari TN.</h2>
          <p>If you&#39;re considering going with Duguid Construction for your upcoming project, this is your sign! They are so friendly and have the best pricing for their jobs!</p>
        </div>
        <div className={styles.feedback}>
          <h2>Jacob G</h2>
          <p>Whether you need a leaky faucet repaired or an entire room remodeled, Duguid Construction will handle it! Mr. Duguid himself even contacted me to check in on the job and make sure our job was going smoothly.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;