import { useEffect } from 'react';
import { useCardContext } from '../context/CardContext';
import CardItem from '../component/card/CardItem';
import { useAuthContext } from '../context/AuthContext';

export default function Features() {
  const { fetchDataAll, datas, deletebyId, editDatasById } = useCardContext();

  const { user } = useAuthContext();
  useEffect(() => {
    fetchDataAll();
  }, [fetchDataAll]);

  return (
    <div style={{ marginTop: '80px', minHeight: '80vh' }}>
      <div className="container">
        <div className="row">
          {datas.map((data) => (
            <CardItem
              key={data.id}
              id={data.id}
              ishome={false}
              onDelete={deletebyId}
              onEdit={editDatasById}
              showAction={user.username === data.username}
              username={data.username}
              post={data.post}
              refreshFn={fetchDataAll}
              like={data.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
