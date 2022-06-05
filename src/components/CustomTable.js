import { useEffect, useState } from 'react';
import '../styles/customTable.scss';
import '../styles/customTableTrending.scss';
import { ReactComponent as InfoIcon } from '../assets/images/information.svg';
import { ReactComponent as FlashDownIcon } from '../assets/images/flash-down.svg';
import { ReactComponent as FlashUpIcon } from '../assets/images/flash_up.svg';
import { ReactComponent as DiscordIcon } from '../assets/images/table-discord.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/table-twitter.svg';
import { ReactComponent as WorldIcon } from '../assets/images/table-world.svg';
import Tooltip from './Tooltip';

const headerItemsInof = [
  'The collections with the highest number of sales in the selected timeframe',
  'Floor price on Opensea',
  'The number of sales',
  'The number of listings',
  'The trading volume of Collections in the selected timeframe',
  'The total volume of collections from the beginning until now',
];

const headers = [
  'Collection',
  'Supply',
  'Twitter Member',
  'Discord Member',
  'Presale Price',
  'Public Sale Price',
  'Max Mint',
  'Presale Mint Time',
  'Public Sale Mint Time',
  'Category',
  'Social Media',
];
const spaces = [60, 15, 15, 15, 13, 13, 20, 13, 20, 20, 20, 20];

const CustomTable = ({ data = [], sort, info, area, reveal }) => {
  const [open, setOpen] = useState('');
  const [category, setCategory] = useState('');
  const [maxMint, setMaxMint] = useState('');

  if (reveal) {
    if (!headers.includes('Reveal')) headers.push('Reveal');
  } else {
    if (headers.includes('Reveal')) headers.splice(headers.length - 1, 1);
  }

  const GetTime = ({ timeStamp }) => {
    const date = new Date(timeStamp * 1000);
    const today = new Date();

    // console.log(today.getFullYear());
    // console.log(date.getFullYear());

    const year = date.getFullYear() - today.getFullYear();
    const month = today.getMonth() - date.getMonth();
    const hours = today.getHours() - date.getHours();
    const minutes = today.getMinutes() - date.getMinutes();
    console.log(today.getFullYear());

    // let timestamp = timeStamp;

    // timestamp /= 1000; // from ms to seconds

    // function component(x, v) {
    //   return Math.floor(x / v);
    // }

    // setInterval(function () {
    //   timestamp--;

    //   const days = component(timestamp, 24 * 60 * 60),
    //     hours = component(timestamp, 60 * 60) % 24,
    //     minutes = component(timestamp, 60) % 60,
    //     seconds = component(timestamp, 1) % 60;

    //   console.log(days + ' days, ' + hours + ':' + minutes + ':' + seconds);
    // }, 1000);

    return <span></span>;
  };

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
            <li
              key={index}
              className={`table__row`}
              // className={`table__row ${
              //   category === item.id ||
              //   item.user.nftName ||
              //   maxMint === item.id ||
              //   item.user.nftName
              //     ? 'open'
              //     : ''
              // }`}
            >
              <div className="col" style={{ flexBasis: `${spaces[0]}%` }}>
                <div className="table__details">
                  <img src="https://picsum.photos/500" alt="" />
                  <div>
                    <span
                      className="table__details_nftName"
                      // className={`table__details_nftName ${
                      //   item.user.nftName.length > 22 ? 'over' : ''
                      // }`}
                    >
                      <span>{item.collection_name}</span>
                    </span>
                    {area === 'trending__table' && (
                      <span className="table__details_time">
                        {item.user.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {area === 'trending__table' ? (
                <>
                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[1]}%` }}
                  >
                    <div className="table__changes">
                      {sort === 'High/Low' ? (
                        <>
                          <span>{item.floor.change}</span>
                          <span className={item.floor.hl > 0 ? 'green' : 'red'}>
                            {+item.floor.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.floor.hl.replace('-', '')}%
                          </span>
                        </>
                      ) : (
                        <>
                          <span className={item.floor.hl > 0 ? 'green' : 'red'}>
                            {+item.floor.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.floor.hl.replace('-', '')}%
                          </span>
                          <span>{item.floor.change}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[2]}%` }}
                  >
                    <div className="table__changes">
                      {sort === 'High/Low' ? (
                        <>
                          <span>{item.saies.change}</span>
                          <span className={item.saies.hl > 0 ? 'green' : 'red'}>
                            {+item.saies.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.saies.hl.replace('-', '')}%
                          </span>
                        </>
                      ) : (
                        <>
                          <span className={item.saies.hl > 0 ? 'green' : 'red'}>
                            {+item.saies.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.saies.hl.replace('-', '')}%
                          </span>
                          <span>{item.saies.change}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[3]}%` }}
                  >
                    <div className="table__changes">
                      {sort === 'High/Low' ? (
                        <>
                          <span>{item.listings.change}</span>
                          <span
                            className={item.listings.hl > 0 ? 'green' : 'red'}
                          >
                            {+item.listings.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.listings.hl.replace('-', '')}%
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            className={item.listings.hl > 0 ? 'green' : 'red'}
                          >
                            {+item.listings.hl > 0 ? (
                              <FlashUpIcon />
                            ) : (
                              <FlashDownIcon />
                            )}
                            {item.listings.hl.replace('-', '')}%
                          </span>
                          <span>{item.listings.change}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[4]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.volume}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[5]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.marketCap}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col" style={{ flexBasis: `${spaces[1]}%` }}>
                    <div className="table__changes single">
                      <span>{item.quantity}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[2]}%` }}>
                    <div className="table__changes single">
                      <span>{item.twitter_member}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[3]}%` }}>
                    <div className="table__changes single">
                      <span>{item.discord_member}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[4]}%` }}>
                    <div className="table__changes single">
                      <span>{item.presale_price}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[5]}%` }}>
                    <div className="table__changes single">
                      <span>{item.publicsale_price}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    // className={`col col__mint ${
                    //   maxMint === item.user.nftName ? 'open' : ''
                    // }`}
                    style={{ flexBasis: `${spaces[6]}%` }}
                  >
                    <div
                      className="table__changes single"
                      // onClick={() => {
                      //   setMaxMint((prev) =>
                      //     prev === item.user.nftName ? '' : item.user.nftName
                      //   );
                      //   setCategory('');
                      // }}
                    >
                      <span>{item.max_mint}</span>
                      {/* {item.maxMint.map((mint, index) => (
                        <span key={index} className="table__changes_mint">
                          {mint}
                        </span>
                      ))} */}
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[7]}%` }}>
                    <div className="table__changes">
                      {/* <span>{item.presale_mint_timestamp}</span> */}
                      <span className="table__changes_date">
                        <GetTime timeStamp={item.presale_mint_timestamp} />
                      </span>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col" style={{ flexBasis: `${spaces[8]}%` }}>
                    <div className="table__changes">
                      {/* <span>{item.publicsale_mint_timestamp}</span> */}
                      <span className="table__changes_date">
                        <GetTime timeStamp={item.publicsale_mint_timestamp} />
                      </span>
                    </div>
                  </div>

                  {/* category */}
                  <div
                    className={`col col__category`}
                    // className={`col col__category ${
                    //   category === item.user.nftName ? 'open' : ''
                    // }`}
                    // onClick={() => {
                    //   setCategory((prev) =>
                    //     prev === item.user.nftName ? '' : item.user.nftName
                    //   );
                    //   setMaxMint('');
                    // }}
                    style={{ flexBasis: `${spaces[10]}%` }}
                  >
                    <div className="table__changes table__changes_category_container">
                      {item.categories.map((cat) => (
                        <span
                          key={cat.id}
                          className="table__changes_category"
                          style={{ borderColor: cat.color, color: cat.color }}
                        >
                          {cat.title}
                          <Tooltip title="What is it?" message={cat.tooltip} />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* social */}
                  <div className="col" style={{ flexBasis: `${spaces[11]}%` }}>
                    <div className="table__changes table__changes_social">
                      <a href={item.discord_link}>
                        <DiscordIcon />
                      </a>
                      <a href={item.twitter_link}>
                        <TwitterIcon />
                      </a>
                      <a href={item.website_link}>
                        <WorldIcon />
                      </a>
                    </div>
                  </div>

                  {/* reveal */}
                  {reveal && (
                    <div className="col" style={{ flexBasis: `${spaces[9]}%` }}>
                      <div className="table__changes">
                        <span className="table__changes_date">
                          <GetTime timeStamp={item.reveal_timestamp} />
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomTable;
