import { Trash } from 'lucide-react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap';

export default function CardItem({ id, username, post, deleteData }) {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <CardHeader className="row">
          <CardTitle className="col-10">{username}</CardTitle>
          <Trash className="col" onClick={() => deleteData(id)} />
        </CardHeader>
        <CardBody>
          <CardText>{post}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
