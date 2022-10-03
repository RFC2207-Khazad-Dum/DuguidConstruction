import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Header.module.css';

const Header = () => {
  const images = {
    img1: "/img/construct1.jpeg",
    img2: "/img/construct2.jpeg",
    img3: "/img/construct3.jpeg",
    img4: "/img/construct4.jpeg"
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <div className={styles.carouselContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Fourth slide label</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;