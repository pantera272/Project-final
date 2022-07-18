import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div>
      <h4>Wyślij zapytanie</h4>
      <Form>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adres email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tytuł</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Wiadomość</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default ContactForm;