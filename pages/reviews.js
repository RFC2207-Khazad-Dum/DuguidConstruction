import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Reviews.module.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewModal from '../components/ReviewModal.js'
import ContactUs from '../components/ContactUs.js';

const Reviews = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/reviews')
      .then(response => {
        console.log('show data =', response.data);
        setReviews(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className={styles.reviewsContainer}>
      <div id={styles.image}>
        <img className={styles.writing} src="/img/writing1.png"/>
        <img className={styles.writing} src="/img/writing2.png"/>
        <img className={styles.writing} src="/img/writing3.png"/>
      </div>
      <div className={styles.topButtons}>
        <Button onClick={handleShow} variant="success">Add Review</Button>
        <ReviewModal show={show} handleClose={handleClose} />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">Filter By</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.reviewFeed}>
        {reviews.map((review) => {
          return (
            <div key={review.id} className={styles.review}>
              <h1 className={styles.reviewTitle}>{review.title}</h1>
              <p>{review.body}</p>
              <p>{review.user}, {review.date}</p>
              <div>
              <img className={styles.imageThumbnail} src={review.img}/>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.bottomButton}>
        <Button variant="success">See More Reviews</Button>
      </div>
      <ContactUs/>
    </div>
  );
}

export default Reviews;