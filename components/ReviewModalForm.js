import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import states from './StateList'
import services from './Services'

export default function ReviewModalForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Group as={Col} controlId="formReviewTitle">
            <Form.Label>Review Title</Form.Label>
            <Form.Control type="text" placeholder="Enter review title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formReviewDate">
            <Form.Label>Date of Service</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>

        <Form.Group className="mb-3" as={Col} id="formGridCheckbox">
          <Form.Label>Select the services rendered</Form.Label>
            {services.map((service) => (
            <Form.Check type="checkbox" label={service} isValid />
            ))}
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formReviewCity">
          <Form.Label>City where services were provided</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formReviewState">
          <Form.Label>State where services were provided</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            {states.map(state =>
            <option>{state}</option>)}
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Write your review here</Form.Label>
        <Form.Control type="textarea"/>
        <Form.Text>Min. 20 Characters</Form.Text>
      </Form.Group>

      <Button variant="success">
        + &nbsp;Add Image/Video
      </Button>
    </Form>
  )
}