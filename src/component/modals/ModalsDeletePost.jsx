import { Button, Modal } from 'react-bootstrap';
import { useCardContext } from '../../context/CardContext';

export default function ModalsDeletePost({ show, handleClose, id }) {
  const { deletebyId } = useCardContext();
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
