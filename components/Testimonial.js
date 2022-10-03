import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.testimonialContainer}>
      <h1 className={styles.testimonialTitle}>Testimonials from our Clients</h1>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedback}>
          <h2>Name 1</h2>
          <p>Feedback information would go here.</p>
        </div>
        <div className={styles.feedback}>
          <h2>Name 2</h2>
          <p>Feedback information would go here</p>
        </div>
        <div className={styles.feedback}>
          <h2>Name 3</h2>
          <p>Client information would go here.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;