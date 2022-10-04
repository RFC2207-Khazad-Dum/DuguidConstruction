import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ImageModal({ url, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <img src={url} className="img-fluid"/>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;
