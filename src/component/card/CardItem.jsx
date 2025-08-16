import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import ModalsDeletePost from '../modals/ModalsDeletePost';
import { useCardContext } from '../../context/CardContext';
import ModalsEditPost from '../modals/ModalsEditPost';

export default function CardItem({ id, username, post }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const { deleteData } = useCardContext();
  return (
    <div className="col-md-4 mb-4">
      {showModalDelete ? (
        <ModalsDeletePost
          show={showModalDelete}
          handleClose={setShowModalDelete}
          deleteData={deleteData}
          id={id}
        />
      ) : (
        <></>
      )}
      {showModalEdit ? (
        <ModalsEditPost
          show={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          // editData={editData}
          id={id}
        />
      ) : (
        <></>
      )}
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between">
          <CardTitle>{username}</CardTitle>
          <Trash onClick={() => setShowModalDelete(true)} />
        </CardHeader>
        <CardBody className="d-flex align-items-center justify-content-between">
          <CardText>{post}</CardText>
          <Pencil onClick={() => setShowModalEdit(true)} />
        </CardBody>
      </Card>
    </div>
  );
}
