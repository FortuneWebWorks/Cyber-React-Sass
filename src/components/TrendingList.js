import { Fragment, useState } from 'react';
import '../styles/traitsList.scss';
import { ReactComponent as InfoIcon } from '../assets/images/information.svg';
import { ReactComponent as FlashDownIcon } from '../assets/images/flash-down.svg';
import { ReactComponent as FlashUpIcon } from '../assets/images/flash_up.svg';

const headerItems = [
  'Collection',
  'Floor',
  'Saies',
  'Listings',
  'Volume',
  'Market Cap',
];

const TraitsList = ({ items }) => {
  const [showDetail, setShowDetail] = useState('');

  const showDetails = (item) => {
    setShowDetail((prev) => (item === prev ? '' : item));
  };

  return (
    <table className="table">
      <thead>
        <tr className="table__head__row">
          {headerItems.map((item) => (
            <th key={item}>
              <div
                onClick={showDetails.bind(null, item)}
                className={`head_items ${item === showDetail ? 'det' : ''}`}
              >
                {item} <InfoIcon />
                {showDetail === item && (
                  <p className="info__details">
                    The Nansen NFT indexes present a reliable way of navigating
                    the NFT markets. This update raises the bar for quality
                    financial infrastructure that supports the growing depth of
                    the NFT industry
                  </p>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Fragment key={item.id}>
            <tr className="table__body__row">
              <td className="table__user-container">
                <div className="table__details">
                  <img src={item.user.userImage} alt="" />
                  <div>
                    <span>{item.user.nftName}</span>
                    <span>{item.user.time}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.floor.change}</span>
                  <span className={item.floor.hl > 0 ? 'green' : 'red'}>
                    {+item.floor.hl > 0 ? <FlashUpIcon /> : <FlashDownIcon />}
                    {item.floor.hl.replace('-', '')}%
                  </span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.saies.change}</span>
                  <span className={item.saies.hl > 0 ? 'green' : 'red'}>
                    {+item.saies.hl > 0 ? <FlashUpIcon /> : <FlashDownIcon />}
                    {item.saies.hl.replace('-', '')}%
                  </span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.listings.change}</span>
                  <span className={item.listings.hl > 0 ? 'green' : 'red'}>
                    {+item.listings.hl > 0 ? (
                      <FlashUpIcon />
                    ) : (
                      <FlashDownIcon />
                    )}
                    {item.listings.hl.replace('-', '')}%
                  </span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.volume}</span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.marketCap}</span>
                </div>
              </td>
            </tr>
            <tr className="table__space"></tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TraitsList;
