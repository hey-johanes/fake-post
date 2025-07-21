import { Button } from 'react-bootstrap';
import Footer from '../component/footer/Footer';
import Header from '../component/navbar/Navbar';
import { useEffect, useState } from 'react';
import ModalsAddPost from '../component/modals/ModalsAddPost';
import axios from 'axios';
import CardItem from '../component/card/CardItem';

function DashBoard() {
  const [showModal, SetShowModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1234/post');
      setDatas(response.data);
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
          setShow={SetShowModal}
          onsuccessAddData={fetchData}
        />
      ) : (
        <></>
      )}
      <Header />
      <div style={{ marginTop: '80px', minHeight: '80vh' }}>
        <div className="d-flex justify-content-center">
          <Button variant="info" size="lg" onClick={() => SetShowModal(true)}>
            Add Post
          </Button>
        </div>
        <div className="m-5 container">
          <div className="row">
            {datas.map((data) => (
              <CardItem
                key={data.id}
                username={data.username}
                post={data.post}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
