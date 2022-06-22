import "styles/apiens/apinesList.scss";
import useFetcher from "hooks/useFetcher";
import ApiensModal from "./ApiensModal";
import { ReactComponent as OpenSeaIcon } from "assets/images/openSea-logo-circle-collections.svg";
import { useState } from "react";

const CollectionsList = ({ slug, type }) => {
  const [modal, setModal] = useState(null);

  const showModal = (item) => {
    setModal(item);
  };

  const [listingsData, listingsLoading] = useFetcher(
    `https://api.cyberdash.app/v1/collections/${slug}/${type}`
  );

  const timestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getMinutes() + " minutes ago";
  };

  if (!slug || listingsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="apiens__list_scroll_container">
      {modal && <ApiensModal data={modal} callBack={() => setModal(null)} />}

      <div className="apiens__list">
        {listingsData.rows.map((item) => (
          <div
            key={item.id}
            //ask if you should change it ^
            className="apiens__list_item"
            onClick={showModal.bind(null, item)}
          >
            <img src={item.image_url} alt="" />

            <div className="Rank_Id__container">
              <span className="Rank">
                Rank: <span>{item.token_rank}</span>
              </span>
              <span className="Id">#{item.token_id}</span>
            </div>

            <div className="Price_Time__container">
              <div className="Price">
                <span>
                  Price: <span>{item.price}</span>
                </span>
                <span className="opensea__icon">
                  <a href={item.opensea_url}>
                    <OpenSeaIcon />
                  </a>
                </span>
              </div>

              <span className="Time">
                Time: <span>{timestampToDate(item.timestamp)}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsList;
