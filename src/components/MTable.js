import React from 'react';
import '../styles/mTable.scss';

const tableData = {
  headers: ['Collection', 'Floor', 'Saies', 'Listings', 'Volume', 'Market Cap'],
  items: [
    ['NFT Name', '10', '10', '10', '12015', '54231'],
    ['dfdfsdfasdafs', '5', '100%', '-10', '120544515', '1'],
  ],
  spaces: [20, 20, 20, 20, 20, 10],
};

const MTable = ({ data = tableData }) => {
  return (
    <div class="m__table__container">
      <ul class="m__table">
        <li class="table__header">
          {data.headers.map((item, index) => (
            <div class="col" style={{ flexBasis: `${data.spaces[index]}%` }}>
              {item}
            </div>
          ))}
        </li>
        {data.items.map((item) => (
          <li class="table__row">
            {item.map((content, index) => (
              <div class="col" style={{ flexBasis: `${data.spaces[index]}%` }}>
                {content}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MTable;
