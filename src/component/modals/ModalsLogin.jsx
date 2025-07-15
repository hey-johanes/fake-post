import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalsLogin({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Body>Sorry Username or Password you inputted wrong!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
