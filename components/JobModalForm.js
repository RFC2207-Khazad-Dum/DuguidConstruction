import React from 'react';
import states from './StateList'
import services from './Services'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function JobModalForm({ handleInputChange, handleCheck }) {
  return (
  <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Job Title</Form.Label>
        <Form.Control name="title" placeholder="Enter job title" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" as={Col} id="formGridCheckbox">
    <Form.Label>Select Require Services</Form.Label>
      {services.map((service) => (
      <Form.Check type="checkbox" label={service} name={service} onChange={handleCheck} isValid />
      ))}
    </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" name="address" onChange={handleInputChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity" >
        <Form.Label>City</Form.Label>
        <Form.Control name="city" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose..." name="state" onChange={handleInputChange}>
          <option>Choose...</option>
          {states.map(state =>
          <option>{state}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control name="zip" onChange={handleInputChange}/>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Description</Form.Label>
      <Form.Control placeholder="Add brief description of desired services" name="description" onChange={handleInputChange}/>
    </Form.Group>

    <Button variant="success">
      + &nbsp;Add Image/Video
    </Button>
  </Form>
  )
}
