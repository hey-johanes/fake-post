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
import ModalsEditPost from '../modals/ModalsEditPost';
import { useCardContext } from '../../context/CardContext';

export default function CardItem({ id, username, post, showAction, ishome }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const {
    deletebyId,
    editDatasById,
    deleteDataSocialById,
    editDataSocialById,
  } = useCardContext();

  return (
    <div className="col-md-4 mb-4">
      {showModalDelete && ishome ? (
        <ModalsDeletePost
          show={showModalDelete}
          handleClose={setShowModalDelete}
          id={id}
          deletebyId={deletebyId}
        />
      ) : (
        <ModalsDeletePost
          show={showModalDelete}
          handleClose={setShowModalDelete}
          id={id}
          deletebyId={deleteDataSocialById}
        />
      )}
      {showModalDelete && ishome ? (
        <ModalsEditPost
          show={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          editData={editDatasById}
          id={id}
          postValue={post}
        />
      ) : (
        <ModalsEditPost
          show={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          editData={editDataSocialById}
          id={id}
          postValue={post}
        />
      )}
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between">
          <CardTitle>{username}</CardTitle>
          {showAction ? (
            <Trash onClick={() => setShowModalDelete(true)} />
          ) : (
            <></>
          )}
        </CardHeader>
        <CardBody className="d-flex align-items-center justify-content-between">
          <CardText>{post}</CardText>
          {showAction ? (
            <Pencil onClick={() => setShowModalEdit(true)} />
          ) : (
            <></>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
