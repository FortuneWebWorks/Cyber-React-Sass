import { useEffect, useState } from 'react';
import '../styles/drops.scss';
import ButtonGroup from '../components/ButtonGroup';
import Navigator from '../components/Navigator';
import TraitsList from '../components/TrendingList';
import { ReactComponent as FilterIcon } from '../assets/icons/filtr.svg';
import Footer from '../components/Footer2';
import Filter from '../components/Filter';
import Search from '../components/Search';

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

const headerItems = [
  'Collection',
  'Supply',
  'Twitter Member',
  'Discord Member',
  'Presale Price',
  'Public Sale Price',
  'Max Mint',
  'Presale Mint Time',
  'Public Sale Mint Time',
  'Category',
  'Social Media',
];

const Drops = () => {
  const [openFilter, setOpenFiter] = useState(false);
  const [reveal, setReveal] = useState('Reveal');

  const onClick = (e) => {
    setOpenFiter((prev) => !prev);
  };

  const activeButtonsChange = (value) => {
    setReveal(value);
    if (value === 'Reveal') {
      // headerItems.push('Reveal');
    } else {
    }
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

      <div className="drops__title drops__title2">
        <h2>Upcomming Calendar</h2>
        <p>In this table you can find upcoming NFT Projects</p>
      </div>

      <div className="drops__sort_timer">
        <div className="drops__sort-details">
          <span>Sorted By: </span>
          <ButtonGroup
            items={['Upcoming', 'Reveal']}
            activeDefault="Reveal"
            font="normal normal bold 12px/14px Roboto"
            containerStyles={{
              border: '1px solid #1956E2',
              height: '30px',
              width: '20rem',
            }}
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

      <div className="drops__table__container">
        <TraitsList
          items={tableItems}
          headerItems={headerItems}
          sort={false}
          info={false}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Drops;
