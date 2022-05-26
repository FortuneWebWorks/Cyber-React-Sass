import { Fragment } from 'react';
import '../styles/traitsList.scss';

const TraitsList = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__head__row">
          <th>Collection</th>
          <th>Floor</th>
          <th>Saies</th>
          <th>Listings</th>
          <th>Volume</th>
          <th>Market Cap</th>
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
                  <span>{item.floor.hl}</span>
                  <span>{item.floor.change}</span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.saies.hl}</span>
                  <span>{item.saies.change}</span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.listings.hl}</span>
                  <span>{item.listings.change}</span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.volume.hl}</span>
                  <span>{item.volume.change}</span>
                </div>
              </td>
              <td>
                <div className="table__changes">
                  <span>{item.marketCap.hl}</span>
                  <span>{item.marketCap.change}</span>
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
