import React, { useState } from 'react';
import ImageModal from '../components/ImageModal'
import styles from '../styles/Jobs.module.css'

export default function JobImage({ url }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <img src={url} onClick={handleShow} className={styles.jobGallery}/>
    <ImageModal url={url} show={show} handleClose={handleClose} />
    </>
  )
}