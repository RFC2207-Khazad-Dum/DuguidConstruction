import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import JobModalForm from "../components/JobModalForm";
import UploadWidget from '../components/UploadWidget';
import PreviewGallery from '../components/PreviewGallery';
import Geocode from 'react-geocode';

export default class JobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: this.props.email,
      title: "",
      categories: [],
      coordinates: { lat: null, lng: null },
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      description: "",
      media: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  };
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
  };

  handleSubmit = () => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    var latVal;
    var lngVal;
    Geocode.fromAddress(`${this.state.address1} + ${this.state.city}`)
    .then((res) => {
      latVal = res.results[0].geometry.location.lat.toString();
      lngVal = res.results[0].geometry.location.lng.toString();
      this.setState({
        coordinates: { lat: latVal, lng: lngVal },
      })
      console.log('without state ref:', latVal, lngVal);
      setTimeout(() => axios.post("http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/addjob", this.state), 250); // Temporary Fix
    })
    .then(this.props.handleClose)
    .catch((err) => console.error(err));
  };

  handleImageUpload = (url) => {
    let tempMedia = this.state.media;
    tempMedia.push(url);
    this.setState({
      media: tempMedia,
    })
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobModalForm
            handleInputChange={this.handleInputChange}
            handleCheck={this.handleCheck}
            handleImageUpload={this.handleImageUpload}
          />
          <PreviewGallery photos={this.state.media} />
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
    );
  }
}
