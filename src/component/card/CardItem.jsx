import { Heart, Pencil, Trash } from 'lucide-react';
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

export default function CardItem({
  id,
  username,
  post,
  like,
  showAction,
  onEdit,
  onDelete,
  refreshFn,
}) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [likes, setLikes] = useState(like);

  const { likePost } = useCardContext();

  const handleClickLike = () => {
    const newLikesCount = likes + 1;
    setLikes(newLikesCount);
    const data = {
      id: id,
      username: username,
      post: post,
      likes: newLikesCount,
    };
    likePost(id, data);
  };

  return (
    <div className="col-md-4 mb-4">
      {showModalDelete ? (
        <ModalsDeletePost
          show={showModalDelete}
          handleClose={setShowModalDelete}
          id={id}
          refreshFn={refreshFn}
          deletebyId={onDelete}
        />
      ) : (
        <></>
      )}
      {showModalEdit ? (
        <ModalsEditPost
          show={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          refreshFn={refreshFn}
          editData={onEdit}
          id={id}
          postValue={post}
        />
      ) : (
        <></>
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
        <CardBody>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ height: '40px' }}
          >
            <CardText style={{ margin: '0px' }}>{post}</CardText>
            {showAction ? (
              <Pencil size={20} onClick={() => setShowModalEdit(true)} />
            ) : (
              <></>
            )}
          </div>
          <div className="d-flex justify-content-start">
            <p style={{ fontSize: '15px', margin: '0px' }}>{likes}</p>
            <Heart size={20} onClick={handleClickLike} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
