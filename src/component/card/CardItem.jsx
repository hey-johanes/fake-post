import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from 'react-bootstrap';

export default function CardItem({ username, post }) {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <CardHeader>
          <CardTitle>{username}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>{post}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
