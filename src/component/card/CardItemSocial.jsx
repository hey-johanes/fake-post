import { Trash } from 'lucide-react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import { useAuthContext } from '../../context/AuthContext';

export default function CardItemSocial({ id, username, post, deleteData }) {
  const { user } = useAuthContext();
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <CardHeader className="row">
          <CardTitle className="col-10">{username}</CardTitle>
          {user.username === username ? (
            <Trash className="col" onClick={() => deleteData(id)} />
          ) : (
            <></>
          )}
        </CardHeader>
        <CardBody>
          <CardText>{post}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
