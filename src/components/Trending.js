import { Fragment } from 'react';
import '../styles/traitsList.scss';
import { ReactComponent as InfoIcon } from '../assets/images/information.svg';
import { ReactComponent as FlashDownIcon } from '../assets/images/flash-down.svg';
import { ReactComponent as FlashUpIcon } from '../assets/images/flash_up.svg';

const TraitsList = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__head__row">
          <th>
            <div>
              Collection <InfoIcon />
            </div>
          </th>
          <th>
            <div>
              Floor <InfoIcon />
            </div>
          </th>
          <th>
            <div>
              Saies <InfoIcon />
            </div>
          </th>
          <th>
            <div>
              Listings <InfoIcon />
            </div>
          </th>
          <th>
            <div>
              Volume <InfoIcon />
            </div>
          </th>
          <th>
            <div>
              Market Cap <InfoIcon />
            </div>
          </th>
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
