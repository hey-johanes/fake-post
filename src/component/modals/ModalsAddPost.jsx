import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup } from 'react-bootstrap';

const initialField = {
  username: '',
  post: '',
};

export default function ModalsAddPost({ show, setShow }) {
  const [field, setField] = useState(initialField);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:1234/post', field);
      setField(initialField);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id="formAdd" onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={field.username}
                placeholder="Input username"
                maxLength={20}
                onChange={handleChange}
                required
              ></Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Post</Form.Label>
              <Form.Control
                type="text"
                name="post"
                value={field.post}
                placeholder="Post ..."
                maxLength={50}
                onChange={handleChange}
                required
              ></Form.Control>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" form="formAdd">
            Add Post
          </Button>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
