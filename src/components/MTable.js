import '../styles/mTable.scss';
import '../styles/mTableTrending.scss';
import { ReactComponent as InfoIcon } from '../assets/images/information.svg';
import { ReactComponent as FlashDownIcon } from '../assets/images/flash-down.svg';
import { ReactComponent as FlashUpIcon } from '../assets/images/flash_up.svg';

const headerItemsInof = [
  'The collections with the highest number of sales in the selected timeframe',
  'Floor price on Opensea',
  'The number of sales',
  'The number of listings',
  'The trading volume of Collections in the selected timeframe',
  'The total volume of collections from the beginning until now',
];

const MTable = ({ data = [], sort, info, area }) => {
  return (
    <div className={`m__table__container ${area}`}>
      <ul className="m__table">
        <li className="table__header">
          {data &&
            data.headers.map((item, index) => (
              <div
                key={index}
                className="col head_items"
                style={{ flexBasis: `${data.spaces[index]}%` }}
              >
                {item} {info && <InfoIcon />}
                <p className="info__details">{headerItemsInof[index]}</p>
              </div>
            ))}
        </li>
        {data &&
          data.items.map((item, index) => (
            <li key={index} className="table__row">
              <div className="col" style={{ flexBasis: `${data.spaces[0]}%` }}>
                <div className="table__details">
                  <img src={item.user.userImage} alt="" />
                  <div>
                    <span
                      className={`table__details_nftName ${
                        item.user.nftName.length > 22 ? 'over' : ''
                      }`}
                    >
                      <span>{item.user.nftName}</span>
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
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[1]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.supply}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[2]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.twitterrMember}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[3]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.discordMember}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[4]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.presalePrice}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[5]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.publicSalePrice}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[6]}%` }}
                  >
                    <div className="table__changes single">
                      <span>{item.maxMint}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[7]}%` }}
                  >
                    <div className="table__changes">
                      <span>{item.presaleMintTime.time}</span>
                      <span>{item.presaleMintTime.date}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[8]}%` }}
                  >
                    <div className="table__changes">
                      <span>{item.publicSaleMintTime.time}</span>
                      <span>{item.publicSaleMintTime.date}</span>
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[9]}%` }}
                  >
                    <div className="table__changes table__changes_category_container">
                      {item.category.map((cat) => (
                        <span className="table__changes_category">{cat}</span>
                      ))}
                    </div>
                  </div>

                  {/* social */}
                  <div
                    className="col"
                    style={{ flexBasis: `${data.spaces[10]}%` }}
                  >
                    <div className="table__changes">
                      <span>social</span>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MTable;
