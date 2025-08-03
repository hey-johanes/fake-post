import { useEffect } from 'react';
import CardItem from '../component/card/CardItem';
import { useCardContext } from '../context/CardContext';

export default function Features() {
  const { fetchDataAll, datas, deleteData } = useCardContext();

  useEffect(() => {
    fetchDataAll();
  }, [fetchDataAll]);

  return (
    <div style={{ marginTop: '80px', minHeight: '80vh' }}>
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
  );
}
