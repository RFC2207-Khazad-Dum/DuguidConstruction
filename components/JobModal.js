import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobModalForm from '../components/JobModalForm'

export default function JobModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Add a New Job</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <JobModalForm />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}