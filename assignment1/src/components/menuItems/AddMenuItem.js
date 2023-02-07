import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const AddMenuItem = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      navigate("/menu");
    }
    setValidated(true);
  };

  const onCancel = () => {
    navigate("/menu");
  }

  return(
    <div className='m-3 containerBody'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h4>Add Menu Item</h4>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationItemName">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
            />
            <Form.Control.Feedback type="invalid">Please enter item name</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCuisine">
              <Form.Label>Cuisine</Form.Label>
              <Form.Control as='select' required>
                <option value="">Select</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="mexican">Mexican</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">Please select cuisine</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationSpicyLevel">
              <Form.Label>Spicy Level</Form.Label>
              <Form.Control as='select' required>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">2</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">Please select spicy level</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md="4" controlId="validationIngredients">
              <Form.Label>Main Ingredients</Form.Label>
              <Form.Control
                required
                as="textarea" 
                rows={3}
                placeholder="Ingredients"
              />
              <Form.Control.Feedback type="invalid">Please specify main ingredients</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationPrice">
              <Form.Label>Price</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="0"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the price.
                </Form.Control.Feedback>
              </InputGroup>
          </Form.Group>
        </Row>
        <div className='addBtn'>
          <Button variant="light" className='cancelBtn' onClick={onCancel}>Cancel</Button>
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </div>
    
  )
}

export default AddMenuItem