import { Button, Modal } from 'react-bootstrap';

export default function ModalsDeletePost({
  show,
  handleClose,
  id,
  deletebyId,
}) {
  return (
    <>
      <Modal show={show} onHide={show} backdrop="static" keyboard={false}>
        <Modal.Body>Apakah anda yakin menghapus postingan ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => deletebyId(id)}>
            Ya
          </Button>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
