import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import axios from 'axios';
import styles from '../styles/Reviews.module.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewModal from '../components/ReviewModal.js';

const Reviews = () => {
  const [show, setShow] = useState(false);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [nextReviews, setNextReviews] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFiltered, setIsFiltered] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get('http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/reviews')
      .then(response => {
        console.log('show data =', response.data);
        const firstThree = [];
        const rest = [];
        response.data.forEach((el, index) => {
          if (index < 3) {
            firstThree.push(el);
          } else {
            rest.push(el);
          }
        })
        setDisplayedReviews(firstThree)
        setNextReviews(rest)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleSelect = (event) => {
    setSelected(event.target.name);
    if (event.target.name === "All") {
      axios.get('http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/reviews')
      .then(response => {
        setIsFiltered(true)
        const firstThree = [];
        const rest = [];

        response.data.forEach((el, index) => {
          if (index < 3) {
            firstThree.push(el);
          } else {
            rest.push(el);
          }
        })
        setDisplayedReviews(firstThree)
        setNextReviews(rest)
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      axios.get(`http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/filterreviews/${event.target.name}`)
      .then(response => {
        setIsFiltered(true)
        const firstThree = [];
        const rest = [];

        response.data.forEach((el, index) => {
          if (index < 3) {
            firstThree.push(el);
          } else {
            rest.push(el);
          }
        })
        setDisplayedReviews(firstThree)
        setNextReviews(rest)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  const handleMoreReviews = () => {
    const newArray = displayedReviews.slice();
    const nextArray = nextReviews.slice();
    const removed = nextArray.splice(0, 2)

    removed.forEach((review) => {
      newArray.push(review);
    })

    setDisplayedReviews(newArray);
    setNextReviews(nextArray);
  }

  return (
    <div className={styles.reviewsContainer}>
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
      <div className={styles.topButtons}>
        <Button onClick={handleShow} variant="success" size="lg">Add Review</Button>
        <ReviewModal show={show} handleClose={handleClose} />
        <div className={styles.selectedCategory}>{selected}</div>
        <Dropdown as={ButtonGroup} size="lg">
          <Dropdown.Toggle variant="success" id="dropdown-basic">Filter By</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" name="All" onClick={handleSelect}>None (Show All Entries)</Dropdown.Item>
            <Dropdown.Item href="#/action-2" name="Carpentry" onClick={handleSelect}>Carpentry</Dropdown.Item>
            <Dropdown.Item href="#/action-3" name="Painting" onClick={handleSelect}>Painting</Dropdown.Item>
            <Dropdown.Item href="#/action-4" name="Plumbing" onClick={handleSelect}>Plumbing</Dropdown.Item>
            <Dropdown.Item href="#/action-5" name="Electrical" onClick={handleSelect}>Electrical</Dropdown.Item>
            <Dropdown.Item href="#/action-6" name="Drywall" onClick={handleSelect}>Drywall</Dropdown.Item>
            <Dropdown.Item href="#/action-7" name="Concrete" onClick={handleSelect}>Concrete</Dropdown.Item>
            <Dropdown.Item href="#/action-8" name="Demolition" onClick={handleSelect}>Demolition</Dropdown.Item>
            <Dropdown.Item href="#/action-9" name="HVAC" onClick={handleSelect}>HVAC</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.reviewFeed}>
        {(!isFiltered) ?
          displayedReviews.map((review, index) => {
            const date = new Date(review.date);
            return (
              <div key={index} className={styles.review}>
                <h1 className={styles.reviewTitle}>{review.title}</h1>
                <p className={styles.reviewBody}>{review.body}</p>
                <div className={styles.reviewerInfo}>
                  <p>{review.user}, {review.city} {review.state}</p>
                  <p>{date.toLocaleDateString()}</p>
                </div>
                <div>
                    {review.img.length > 0 ? review.img.map((image, index) => {
                      return (<img className={styles.imageThumbnail} key={index} src={image} />)
                    }) : <></>}
                  </div>
              </div>
            )
          }) : (isFiltered && displayedReviews.length > 0) ?
            displayedReviews.map((review, index) => {
              const date = new Date(review.date);
              return (
                <div key={index} className={styles.review}>
                  <h1 className={styles.reviewTitle}>{review.title}</h1>
                  <p className={styles.reviewBody}>{review.body}</p>
                  <div className={styles.reviewerInfo}>
                    <p>{review.user}, {review.city} {review.state}</p>
                    <p>{date.toLocaleDateString()}</p>
                  </div>
                  <div>
                    {review.img.length > 0 ? review.img.map((image, index) => {
                      return (<img className={styles.imageThumbnail} key={index} src={image} />)
                    }) : <></>}
                  </div>
                </div>
              )
            })
            : <div className={styles.noCategories}><p>There are no reviews for this category yet. Add one today!</p></div>
        }
      </div>
      <div className={styles.bottomButton}>
        { nextReviews.length > 0 ? <Button variant="success" size="lg" onClick={handleMoreReviews}>See More Reviews</Button> : <></>}
      </div>
    </div>
  );
}

export default Reviews;