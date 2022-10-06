import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import states from './StateList';
import services from './Services';
import UploadWidget from './UploadWidget';

export default function ReviewModalForm({ handleInputChange, handleCheck, handleImageUpload }) {
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Group as={Col} controlId="formReviewTitle">
            <Form.Label>Name</Form.Label>
            <Form.Control name="user" type="text" placeholder="Enter name" onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formReviewTitle">
            <Form.Label>Review Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter review title" onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formReviewDate">
            <Form.Label>Date of Service</Form.Label>
            <Form.Control name="workDate" type="date" onChange={handleInputChange}/>
          </Form.Group>
        </Col>

        <Form.Group className="mb-3" as={Col} id="formGridCheckbox">
          <Form.Label>Select the services rendered</Form.Label>
            {services.map((service, index) => (
            <Form.Check key={index} name={service} type="checkbox" label={service} isValid onChange={handleCheck}/>
            ))}
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formReviewCity">
          <Form.Label>City where services were provided</Form.Label>
          <Form.Control name="city" onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formReviewState">
          <Form.Label>State where services were provided</Form.Label>
          <Form.Select name="state" defaultValue="Choose..." onChange={handleInputChange}>
            <option>Choose...</option>
            {states.map((state, index) =>
            <option key={index}>{state}</option>)}
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Write your review here</Form.Label>
        <Form.Control name="body" type="textarea" onChange={handleInputChange}/>
        <Form.Text>Min. 20 Characters</Form.Text>
      </Form.Group>

      <UploadWidget handleImageUpload={handleImageUpload}/>
    </Form>
  )
}