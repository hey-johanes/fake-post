import { Pencil, Trash } from 'lucide-react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';
import ModalsDeletePost from '../modals/ModalsDeletePost';
import { useState } from 'react';
import ModalsEditPost from '../modals/ModalsEditPost';

export default function CardItemSocial({ id, username, post, deleteData }) {
  const { user } = useAuthContext();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
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
          handleClose={setShowModalEdit}
          // editData={editData}
          id={id}
        />
      ) : (
        <></>
      )}
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between">
          <CardTitle>{username}</CardTitle>
          {user.username === username ? (
            <Trash onClick={() => setShowModalDelete(true)} />
          ) : (
            <></>
          )}
        </CardHeader>
        <CardBody className="d-flex align-items-center justify-content-between">
          <CardText>{post}</CardText>
          {user.username === username ? (
            <Pencil onClick={() => setShowModalEdit(true)} />
          ) : (
            <></>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
