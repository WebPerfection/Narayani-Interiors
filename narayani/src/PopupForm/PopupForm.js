import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './PopupForm.css'; // import the CSS file

const PopupForm = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Get A Free Consultation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formHomeType">
            <Form.Label>Tell us about your home</Form.Label>
            <Form.Control as="select">
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK / Duplex</option>
              <option>Independent Home / Villa</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formHomeInteriors">
            <Form.Label>Home Type For Interiors</Form.Label>
            <Form.Control as="select">
              <option>We've got smart designs for your 2 bedroom home</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>Which city is this home in?</Form.Label>
            <Form.Control as="select">
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Navi Mumbai</option>
              <option>Thane</option>
              <option>Mysore</option>
              <option>Pune</option>
              <option>Coimbatore</option>
              <option>Vizag</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>What is your name?</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>Tell us your mobile number, so we can fix your appointment</Form.Label>
            <Form.Control type="tel" placeholder="+91 Mobile Number" />
          </Form.Group>
          <Form.Group controlId="formUpdates">
            <Form.Check type="checkbox" label="Send me updates on WhatsApp" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Book Free Consultation</Button>
      </Modal.Footer>
    </Modal>
  );
};

// To show the popup form after 3 seconds
setTimeout(() => {
  ReactDOM.render(<PopupForm />, document.getElementById('popup'));
}, 3000);

// To show the popup form on button click
const handleButtonClick = () => {
  ReactDOM.render(<PopupForm />, document.getElementById('popup'));
};

// To render the button that triggers the popup form
ReactDOM.render(
  <div className="button-container">
    <Button variant="primary" onClick={handleButtonClick}>Get Estimate</Button>
  </div>,
  document.getElementById('button')
);
