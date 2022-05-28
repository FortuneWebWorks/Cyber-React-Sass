import { useState } from 'react';
import '../styles/trending.scss';
import ButtonGroup from '../components/ButtonGroup';
import Timer from '../components/Timer';
import TraitsList from '../components/TraitsList';
import { ReactComponent as FilterIcon } from '../assets/icons/filtr.svg';
import Footer from '../components/Footer2';
import Filter from '../components/Filter';

const timings = ['1d', '7d', '30d', '90d', '1y'];
const timings2 = ['5m', '30m', '1h', '6h'];

const tableItems = [
  {
    id: 1,
    user: {
      userImage: 'https://picsum.photos/51',
      nftName: 'NFT NAME',
      time: '35 days ago',
    },
    floor: {
      hl: '-10',
      change: '10',
    },
    saies: {
      hl: '10',
      change: '10',
    },
    listings: {
      hl: '10',
      change: '10',
    },
    volume: '15422',
    marketCap: '6356745',
  },
  {
    id: 2,
    user: {
      userImage: 'https://picsum.photos/50',
      nftName: 'NFT NAME',
      time: '35 days ago',
    },
    floor: {
      hl: '10',
      change: '10',
    },
    saies: {
      hl: '-10',
      change: '10',
    },
    listings: {
      hl: '10',
      change: '10',
    },
    volume: '15422',
    marketCap: '6356745',
  },
];

const Traits = () => {
  const [openFilter, setOpenFiter] = useState(false);

  const onClick = (e) => {
    setOpenFiter((prev) => !prev);
  };

  return (
    <div className="traits">
      {openFilter && <Filter />}
      <div className="traits__title">
        <h2>Trending NFT Collections</h2>
        <p>See what's selling and listing in real time!</p>
      </div>

      <div className="traist__sort_timer">
        <div className="traits__sort-details">
          <span>Sorted By: </span>
          <ButtonGroup
            items={['High/Low', '%Change']}
            activeDefault="High/Low"
            font="normal normal bold 12px/14px Roboto"
            containerStyles={{ border: '1px solid #1956E2', height: '30px' }}
          />
        </div>

        <div className="traits__timers">
          <Timer items={timings} defaultActive={timings[2]} />
          <Timer items={timings2} defaultActive={timings[2]} />
        </div>

        <div id="filter" onClick={onClick}>
          <FilterIcon />
        </div>
      </div>

      <div className="table__container">
        <TraitsList items={tableItems} />
      </div>

      <Footer />
    </div>
  );
};

export default Traits;
