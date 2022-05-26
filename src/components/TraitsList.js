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
              <td className='table__user-container'>
                <div className="table__details">
                  <img src={item.user.userImage} alt="" />
                  <div>
                    <span>{item.user.nftName}</span>
                    <span>{item.user.time}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="">{item.floor}</div>
              </td>
              <td>{item.saies}</td>
              <td>{item.listings}</td>
              <td>{item.volume}</td>
              <td>{item.marketCap}</td>
            </tr>
            <tr className="table__space"></tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TraitsList;
