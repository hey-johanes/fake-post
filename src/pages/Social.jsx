import { useEffect } from 'react';
import { useCardContext } from '../context/CardContext';
import CardItemSocial from '../component/card/CardItemSocial';

export default function Features() {
  const { fetchDataAll, datas } = useCardContext();

  useEffect(() => {
    fetchDataAll();
  }, [fetchDataAll]);

  return (
    <div style={{ marginTop: '80px', minHeight: '80vh' }}>
      <div className="container">
        <div className="row">
          {datas.map((data) => (
            <CardItemSocial
              key={data.id}
              id={data.id}
              username={data.username}
              post={data.post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
