import { useNavigate } from "react-router-dom";
import "styles/customTable/customTable.scss";
import "styles/trending/trendingTable.scss";
import { ReactComponent as InfoIcon } from "assets/images/information.svg";
import { ReactComponent as FlashDownIcon } from "assets/images/flash-down.svg";
import { ReactComponent as FlashUpIcon } from "assets/images/flash_up.svg";

import Tooltip from "components/Tooltip";

const headerItemsInof = [
  "The collections with the highest number of sales in the selected timeframe",
  "Floor price on Opensea",
  "The number of sales",
  "The number of listings",
  "The trading volume of Collections in the selected timeframe",
  "The total volume of collections from the beginning until now",
];

let headers = [
  "Collection",
  "Floor",
  "Saies",
  "Listings",
  "Volume",
  "Market Cap",
];
const spaces = [40, 20, 20, 20, 20, 13];

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.getDay() + " days ago";
};

const TrendingTable = ({ data = [], sort, info }) => {
  const navigator = useNavigate();

  const redirectCargo = (item) => {
    navigator(`/collection/${item.collection_slug}`);
  };

  return (
    <div className={`m__table__container trending__table`}>
      <ul className="m__table">
        <li className="table__header">
          {headers.map((item, index) => (
            <div
              key={index}
              className="col head_items"
              style={{ flexBasis: `${spaces[index]}%` }}
            >
              {item} {info && <InfoIcon />}
              <Tooltip title="What is it?" message={headerItemsInof[index]} />
              {/* <p className="info__details">{headerItemsInof[index]}</p> */}
            </div>
          ))}
        </li>
        {data &&
          data.map((item, index) => (
            <li
              key={index}
              className={`table__row`}
              onClick={redirectCargo.bind(null, item)}
            >
              <div className="col" style={{ flexBasis: `${spaces[0]}%` }}>
                <div className="table__details">
                  <img src={item.image_url} alt="" />
                  <div>
                    <span className="table__details_nftName">
                      <span>{item.collection_name}</span>
                    </span>
                    <span className="table__details_time">
                      <span>{timestampToDate(item.created_date)}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${spaces[1]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.floor_price}</span>
                      <span
                        className={
                          +item.floor_price_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.floor_price_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.floor_price_change_percent.replace("-", "")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={
                          +item.floor_price_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.floor_price_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.floor_price_change_percent.replace("-", "")}
                      </span>
                      <span>{item.floor_price}</span>
                    </>
                  )}
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${spaces[2]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.sales}</span>
                      <span
                        className={
                          +item.sales_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.sales_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.sales_change_percent.replace("-", "")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={
                          +item.sales_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.sales_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.sales_change_percent.replace("-", "")}
                      </span>
                      <span>{item.sales}</span>
                    </>
                  )}
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${spaces[3]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.listings}</span>
                      <span
                        className={
                          +item.listings_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.listings_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.listings_change_percent.replace("-", "")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={
                          +item.listings_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.listings_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.listings_change_percent.replace("-", "")}
                      </span>
                      <span>{item.listings}</span>
                    </>
                  )}
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${spaces[4]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.volume}</span>
                      <span
                        className={
                          +item.volume_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.volume_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.volume_change_percent.replace("-", "")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={
                          +item.volume_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.volume_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.volume_change_percent.replace("-", "")}
                      </span>
                      <span>{item.volume}</span>
                    </>
                  )}
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${spaces[5]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.market_cap}</span>
                      <span
                        className={
                          +item.market_cap_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.market_cap_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.market_cap_change_percent.replace("-", "")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={
                          +item.market_cap_change_percent.split(" ")[0] > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {+item.market_cap_change_percent.split(" ")[0] > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.market_cap_change_percent.replace("-", "")}
                      </span>
                      <span>{item.market_cap}</span>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TrendingTable;
