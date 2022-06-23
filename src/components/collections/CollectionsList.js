import "styles/collections/collectionList.scss";
import useFetcher from "hooks/useFetcher";
import ApiensModal from "./CollectionModal";
import { ReactComponent as OpenSeaIcon } from "assets/images/openSea-logo-circle-collections.svg";
import { ReactComponent as EtherScanIcon } from "assets/images/etherscan-logo-circle-orders.svg";
import { ReactComponent as EthIcon } from "assets/images/eth-icon.svg";
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
                Rank: <span>1234</span>
              </span>
              <span className="Id">#{item.token_id}</span>
            </div>

            <div className="cards-right-side__container">
              <div
                className={
                  type === "listings" ? "listings-specific" : "orders-specific"
                }
              >
                <div className="top-side-container">
                  <span className="price__container">
                    <span className="price-title__container">Price: </span>
                    <span className="price-amount-svg__container">
                      <EthIcon />
                      {item.price}
                    </span>
                  </span>

                  <div className="svg-button__container">
                    <button>Buy</button>

                    <a href={item.opensea_url} className="opensea__svg">
                      <OpenSeaIcon />
                    </a>
                    <a href="https://google.com" className="ethscan__svg">
                      <EtherScanIcon />
                    </a>
                  </div>
                </div>

                <span className="Time">
                  <span className="time-title__container">Time: </span>
                  <span className="time-amount__container">
                    {timestampToDate(item.timestamp)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsList;
