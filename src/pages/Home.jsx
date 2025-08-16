import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CardItem from '../component/card/CardItem';
import ModalsAddPost from '../component/modals/ModalsAddPost';
import { useCardContext } from '../context/CardContext';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { datas, getDataById } = useCardContext();

  useEffect(() => {
    getDataById();
  }, [getDataById]);

  return (
    <div>
      {showModal ? (
        <ModalsAddPost
          show={showModal}
          setShow={setShowModal}
          onsuccessAddData={getDataById}
        />
      ) : (
        <></>
      )}
      <div style={{ marginTop: '80px', minHeight: '80vh' }}>
        <div className="d-flex justify-content-center">
          <Button variant="info" size="lg" onClick={() => setShowModal(true)}>
            Add Post
          </Button>
        </div>
        <div className="m-5 container">
          <div className="row">
            {datas.map((data) => (
              <CardItem
                key={data.id}
                id={data.id}
                username={data.username}
                post={data.post}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
