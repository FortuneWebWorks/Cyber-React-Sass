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

const MTable = ({ data = [], sort, info }) => {
  return (
    <div className="m__table__container  trending__table">
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
                    <span className="table__details_nftName">
                      {item.user.nftName}
                    </span>
                    <span className="table__details_time">
                      {item.user.time}
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${data.spaces[1]}%` }}>
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
              <div className="col" style={{ flexBasis: `${data.spaces[2]}%` }}>
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
              <div className="col" style={{ flexBasis: `${data.spaces[3]}%` }}>
                <div className="table__changes">
                  {sort === 'High/Low' ? (
                    <>
                      <span>{item.listings.change}</span>
                      <span className={item.listings.hl > 0 ? 'green' : 'red'}>
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
                      <span className={item.listings.hl > 0 ? 'green' : 'red'}>
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
              <div className="col" style={{ flexBasis: `${data.spaces[4]}%` }}>
                <div className="table__changes single">
                  <span>{item.volume}</span>
                </div>
              </div>

              {/*  */}
              <div className="col" style={{ flexBasis: `${data.spaces[5]}%` }}>
                <div className="table__changes single">
                  <span>{item.marketCap}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MTable;
