import { useEffect, useState } from 'react';
import '../styles/drops.scss';
import ButtonGroup from '../components/ButtonGroup';
import Navigator from '../components/Navigator';
import TraitsList from '../components/TrendingList';
import { ReactComponent as FilterIcon } from '../assets/icons/filtr.svg';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Search from '../components/Search';

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

const Drops = () => {
  const [openFilter, setOpenFiter] = useState(false);
  const [sort, setSort] = useState('High/Low');

  const onClick = (e) => {
    setOpenFiter((prev) => !prev);
  };

  const activeButtonsChange = (value) => {
    setSort(value);
  };

  useEffect(() => {
    const closer = (e) => {
      if (!e.target.closest('.filter')) {
        setOpenFiter(false);
      }
    };

    window && window.addEventListener('mouseup', closer);

    return () => {
      window.removeEventListener('mouseup', closer);
    };
  }, []);

  const closer = () => {
    setOpenFiter(false);
  };

  return (
    <div className="drops">
      {openFilter && <Filter callBack={closer} />}
      <div className="drops__title">
        <h2>Drops</h2>
        <p>We only include the project that are worth mentioning</p>
      </div>

      <Navigator />

      <div className="drops__sort_timer">
        <div className="drops__sort-details">
          <span>Sorted By: </span>
          <ButtonGroup
            items={['High/Low', '%Change']}
            activeDefault="High/Low"
            font="normal normal bold 12px/14px Roboto"
            containerStyles={{ border: '1px solid #1956E2', height: '30px' }}
            callBack={activeButtonsChange}
          />
        </div>

        <div className="search__filter__container">
          <div className="">
            <Search />
          </div>

          <div className="drops__filter" id="filter" onClick={onClick}>
            <FilterIcon />
          </div>
        </div>
      </div>

      <div className="table__container">
        <TraitsList items={tableItems} sort={sort} />
      </div>

      <Footer />
    </div>
  );
};

export default Drops;
