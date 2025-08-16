import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';

export default function ModalsEditPost({ show, setShowModalEdit, id }) {
  const { user } = useAuthContext();

  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id="formAdd">
            <FormGroup>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={user.username}
                placeholder="Input username"
                maxLength={20}
                disabled
              ></Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Post</Form.Label>
              <Form.Control
                type="text"
                name="post"
                // value={user.post}
                placeholder="Post ..."
                maxLength={50}
                // onChange={handleChange}
                required
              ></Form.Control>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" form="formAdd">
            Edit
          </Button>
          <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
