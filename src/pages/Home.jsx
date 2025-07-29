import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CardItem from '../component/card/CardItem';
import ModalsAddPost from '../component/modals/ModalsAddPost';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1234/post');
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:1234/post/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {showModal ? (
        <ModalsAddPost
          show={showModal}
          setShow={setShowModal}
          onsuccessAddData={fetchData}
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
                deleteData={deleteData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
