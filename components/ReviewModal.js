import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewModalForm from '../components/ReviewModalForm.js'

export default class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      workDate: '',
      body: '',
      title: '',
      img: [],
      categories: [],
      city: '',
      state: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleCheck = (e) => {
    let temp = this.state.categories;
    if (temp.indexOf(e.target.name) !== -1) {
      temp.splice(temp.indexOf(e.target.name), 1);
      this.setState({
        categories: temp
      });
    } else {
      temp.push(e.target.name);
      this.setState({
        categories: temp
      })
    }
  }
  handleSubmit = () => {
    axios.post('http://localhost:8080/addreview', this.state)
      .then(() => {
        console.log('review sent');
        this.props.handleClose();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add A New Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewModalForm handleInputChange={this.handleInputChange} handleCheck={this.handleCheck}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={this.handleSubmit} >
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}