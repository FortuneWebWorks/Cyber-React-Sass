import { useEffect, useState } from 'react';
import '../styles/trending.scss';
import ButtonGroup from '../components/ButtonGroup';
import Timer from '../components/Timer';
import TraitsList from '../components/TrendingList';
import { ReactComponent as FilterIcon } from '../assets/icons/filtr.svg';
import Footer from '../components/Footer2';
import Filter from '../components/Filter';
import MyTable from '../components/MTable';

const timings = ['1d', '7d', '30d', '90d', '1y'];
const timings2 = ['5m', '30m', '1h', '6h'];

const tableData = {
  headers: ['Collection', 'Floor', 'Saies', 'Listings', 'Volume', 'Market Cap'],
  items: [
    {
      id: 1,
      user: {
        userImage: 'https://picsum.photos/51',
        nftName: 'NFT Name',
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
      volume: '1555',
      marketCap: '1555',
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
      volume: '1555',
      marketCap: '1555',
    },
    {
      id: 2,
      user: {
        userImage: 'https://picsum.photos/49',
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
      volume: '1555',
      marketCap: '1555',
    },
  ],
  spaces: [40, 20, 20, 20, 20, 13],
};

const Traits = () => {
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
    <div className="traits">
      {openFilter && <Filter callBack={closer} />}
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
            containerStyles={{
              border: '1px solid #1956E2',
              height: '30px',
              minWidth: '23rem',
            }}
            callBack={activeButtonsChange}
          />
        </div>

        <div className="timers__filter__container">
          <div className="traits__timers">
            <Timer items={timings} defaultActive={timings[4]} />
            <Timer items={timings2} defaultActive={timings2[2]} />
          </div>

          <div id="filter" onClick={onClick}>
            <FilterIcon />
          </div>
        </div>
      </div>

      <div className="table__container">
        {/* <TraitsList
          items={tableItems}
          headerItems={headerItems}
          sort={sort}
          info={true}
        /> */}
        <MyTable data={tableData} sort={sort} info={true} />
      </div>

      <Footer />
    </div>
  );
};

export default Traits;
