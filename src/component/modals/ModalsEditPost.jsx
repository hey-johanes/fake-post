import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';

export default function ModalsEditPost({
  show,
  setShowModalEdit,
  id,
  editData,
  postValue,
}) {
  const { user } = useAuthContext();

  const [field, setField] = useState({
    post: postValue,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({
      ...field,
      [name]: value,
      userId: user.id,
      username: user.username,
    });
  };

  const handleEditCard = (e) => {
    e.preventDefault();
    editData(id, field);
    setShowModalEdit(false);
  };

  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id="formEdit" onSubmit={handleEditCard}>
            <FormGroup>
              <Form.Label>Username</Form.Label>
              <Form.Control value={user.username} disabled></Form.Control>
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
          <Button variant="success" type="submit" form="formEdit">
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
