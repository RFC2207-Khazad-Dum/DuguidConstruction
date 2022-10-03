import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobModalForm from '../components/JobModalForm'

export default class JobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: [],
      address: '',
      city: '',
      state: '',
      zip: '',
      description: '',
      media: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCheck = (e) => {
    let temp = this.state.categories;
    temp.push(e.target.name);
    this.setState({
      categories: temp
    });
    console.log(this.state.categories);
  }
  handleSubmit = () => {
    axios.post('http://localhost:8080/addjob', this.state)
      .then(this.props.handleClose)
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <JobModalForm handleInputChange={this.handleInputChange} handleCheck={this.handleCheck}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}