import { Fragment, useState } from "react";
import "styles/customTable/customTable.scss";
import "styles/customTable/customTableTrending.scss";
import { ReactComponent as InfoIcon } from "assets/images/information.svg";
import { ReactComponent as FlashDownIcon } from "assets/images/flash-down.svg";
import { ReactComponent as FlashUpIcon } from "assets/images/flash_up.svg";
import { ReactComponent as DiscordIcon } from "assets/images/table-discord.svg";
import { ReactComponent as TwitterIcon } from "assets/images/table-twitter.svg";
import { ReactComponent as WorldIcon } from "assets/images/table-world.svg";
import { ReactComponent as ArrowIcon } from "assets/images/table-arrow.svg";
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
  "Supply",
  "Twitter Member",
  "Discord Member",
  "Presale Price",
  "Public Sale Price",
  "Max Mint",
  "Presale Mint Time",
  "Public Sale Mint Time",
  "Category",
  "Social Media",
];
const spaces = [60, 15, 15, 15, 13, 13, 20, 13, 20, 20, 20, 20];

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

const TrendingTable = ({ data = [], sort, info, area, reveal }) => {
  console.log(data);

  // const [open, setOpen] = useState('');
  const [category, setCategory] = useState(null);
  // const [maxMint, setMaxMint] = useState('');

  return (
    <div className={`m__table__container ${area}`}>
      <ul className="m__table">
        <li className="table__header">
          {headers.map((item, index) => (
            <div
              key={index}
              className="col head_items"
              style={{ flexBasis: `${spaces[index]}%` }}
            >
              {item} {info && <InfoIcon />}
              <p className="info__details">{headerItemsInof[index]}</p>
            </div>
          ))}
        </li>
        {data &&
          data.map((item, index) => (
            <li key={index} className={`table__row`}>
              <div className="col" style={{ flexBasis: `${spaces[0]}%` }}>
                <div className="table__details">
                  <img src="https://picsum.photos/500" alt="" />
                  <div>
                    <span className="table__details_nftName">
                      <span>{item.collection_name}</span>
                    </span>
                    {area === "trending__table" && (
                      <span className="table__details_time">
                        {item.user.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/*  */}
              {/* <div className="col" style={{ flexBasis: `${data.spaces[1]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.floor.change}</span>
                      <span className={item.floor.hl > 0 ? "green" : "red"}>
                        {+item.floor.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.floor.hl.replace("-", "")}%
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={item.floor.hl > 0 ? "green" : "red"}>
                        {+item.floor.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.floor.hl.replace("-", "")}%
                      </span>
                      <span>{item.floor.change}</span>
                    </>
                  )}
                </div>
              </div> */}

              {/*  */}
              {/* <div className="col" style={{ flexBasis: `${data.spaces[2]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.saies.change}</span>
                      <span className={item.saies.hl > 0 ? "green" : "red"}>
                        {+item.saies.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.saies.hl.replace("-", "")}%
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={item.saies.hl > 0 ? "green" : "red"}>
                        {+item.saies.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.saies.hl.replace("-", "")}%
                      </span>
                      <span>{item.saies.change}</span>
                    </>
                  )}
                </div>
              </div> */}

              {/*  */}
              {/* <div className="col" style={{ flexBasis: `${data.spaces[3]}%` }}>
                <div className="table__changes">
                  {sort === "High/Low" ? (
                    <>
                      <span>{item.listings.change}</span>
                      <span className={item.listings.hl > 0 ? "green" : "red"}>
                        {+item.listings.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.listings.hl.replace("-", "")}%
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={item.listings.hl > 0 ? "green" : "red"}>
                        {+item.listings.hl > 0 ? (
                          <FlashUpIcon />
                        ) : (
                          <FlashDownIcon />
                        )}
                        {item.listings.hl.replace("-", "")}%
                      </span>
                      <span>{item.listings.change}</span>
                    </>
                  )}
                </div>
              </div> */}

              {/*  */}
              {/* <div className="col" style={{ flexBasis: `${data.spaces[4]}%` }}>
                <div className="table__changes single">
                  <span>{item.volume}</span>
                </div>
              </div> */}

              {/*  */}
              {/* <div className="col" style={{ flexBasis: `${data.spaces[5]}%` }}>
                <div className="table__changes single">
                  <span>{item.marketCap}</span>
                </div>
              </div> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TrendingTable;
