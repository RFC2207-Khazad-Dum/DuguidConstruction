import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewModalForm from '../components/ReviewModalForm.js'

export default function ReviewModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Add A New Review</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReviewModalForm />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="success" onClick={handleClose}>
        Submit Review
      </Button>
    </Modal.Footer>
  </Modal>
  )
}