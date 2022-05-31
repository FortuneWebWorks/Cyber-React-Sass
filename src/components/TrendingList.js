import { Fragment, useState, useEffect } from 'react';
import '../styles/trendingList.scss';
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

const TraitsList = ({ items, sort }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__head__row">
          {headerItems.map((item) => (
            <th key={item}>
              <div className={`head_items`}>
                {item} <InfoIcon />
                <p className="info__details">
                  The Nansen NFT indexes present a reliable way of navigating
                  the NFT markets. This update raises the bar for quality
                  financial infrastructure that supports the growing depth of
                  the NFT industry
                </p>
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
                    <span className="table__details_nftName">
                      {item.user.nftName}
                    </span>
                    <span className="table__details_time">
                      {item.user.time}
                    </span>
                  </div>
                </div>
              </td>
              <td>
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
              </td>
              <td>
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
              </td>
              <td>
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
              </td>
              <td>
                <div className="table__changes single">
                  <span>{item.volume}</span>
                </div>
              </td>
              <td>
                <div className="table__changes single">
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
