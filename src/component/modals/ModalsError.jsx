import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalsError({ messageError, setShow, show }) {
  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Body>{messageError}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalsError;
