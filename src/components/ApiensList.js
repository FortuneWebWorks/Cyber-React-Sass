import '../styles/apinesList.scss';
import useFetcher from '../hooks/useFetcher';
import ApiensModal from './ApiensModal';
import { useState } from 'react';

const ApiensList = () => {
  const [modal, setModal] = useState(null);

  const [data, loading] = useFetcher(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30'
  );

  const showModal = (item) => {
    setModal(item);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="apiens__list_scroll_container">
      {modal && <ApiensModal data={modal} callBack={() => setModal(null)} />}

      <div className="apiens__list">
        {data.map((item) => (
          <div
            key={item.id}
            className="apiens__list_item"
            onClick={showModal.bind(null, item)}
          >
            <img src={item.thumbnailUrl} alt="" />

            <div className="Rank_Id__container">
              <span className="Rank">
                Rank: <span>{item.id}54</span>
              </span>
              <span className="Id">#{item.id}213</span>
            </div>

            <div className="Price_Time__container">
              <span className="Price">
                Price: <span>{item.id}.280</span>{' '}
                <span className="Price__icons">
                  <div></div>
                  <div></div>
                </span>
              </span>
              <span className="Time">
                Time: <span>{item.id}7 Minutes ago</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiensList;
