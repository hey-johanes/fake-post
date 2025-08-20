import { useEffect } from 'react';
import { useCardContext } from '../context/CardContext';
import CardItem from '../component/card/CardItem';
import { useAuthContext } from '../context/AuthContext';

export default function Features() {
  const { fetchDataAll, datas, deleteDataSocialById, editDataSocialById } =
    useCardContext();

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
              onDelete={deleteDataSocialById}
              onEdit={editDataSocialById}
              showAction={user.username === data.username}
              username={data.username}
              post={data.post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
