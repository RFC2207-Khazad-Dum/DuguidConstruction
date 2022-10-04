import React, { useState, useEffect } from 'react';
import styles from '../styles/Reviews.module.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewModal from '../components/ReviewModal.js'

const Reviews = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reviewData = [
    {
      id: 1,
      user: "User1",
      date: "9/30/2022",
      body: "We were able to trust Duguid Construction with repainting our house. Great quality work.",
      title: "Paint Remodel",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      user: "User2",
      date: "10/02/2022",
      body: "Duguid Construction did a great job in remodeling my house windows! I would highly recommend them.",
      title: "Window Remodel",
      img: "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      user: "User3",
      date: "10/03/2022",
      body: "I was able to get the electric wires within my kitchen reconfigured with Duguid Construction. They did an awesome job and were able to handle the job request quickly.",
      title: "Electric Reconfiguration",
      img: "https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <div className={styles.reviewsContainer}>
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
        {reviewData.map((review) => {
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
    </div>
  );
}

export default Reviews;