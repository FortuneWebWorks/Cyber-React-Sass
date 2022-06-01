import { useEffect, useState } from 'react';
import '../styles/drops.scss';
import '../styles/mTableDrops.scss';
import ButtonGroup from '../components/ButtonGroup';
import Navigator from '../components/Navigator';
import { ReactComponent as FilterIcon } from '../assets/icons/filtr.svg';
import Filter from '../components/Filter';
import Search from '../components/Search';
import MTable from '../components/MTable';

const tableData = {
  headers: [
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
  ],
  items: [
    {
      id: 1,
      user: {
        userImage: 'https://picsum.photos/50',
        nftName: 'NFT Name',
        time: '35 days ago',
      },
      supply: '11221',
      twitterrMember: '12',
      discordMember: '420',
      presalePrice: '420',
      publicSalePrice: '420',
      maxMint: ['WL:1', 'PUB:2'],
      presaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      publicSaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      category: ['Cat1', 'Cat2', 'category 3', 'Cat2', 'category 3'],
      socialMedia: ['discord', 'twitter', 'discord'],
    },
    {
      id: 1,
      user: {
        userImage: 'https://picsum.photos/51',
        nftName: 'NFT Name2',
        time: '35 days ago',
      },
      supply: '11221',
      twitterrMember: '12',
      discordMember: '420',
      presalePrice: '420',
      publicSalePrice: '420',
      maxMint: ['WL:1', 'PUB:2'],
      presaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      publicSaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      category: ['Cat1', 'Cat2', 'category 3', 'Cat2', 'category 3'],
      socialMedia: ['discord', 'twitter', 'discord'],
    },
    {
      id: 1,
      user: {
        userImage: 'https://picsum.photos/49',
        nftName: 'NFT Name3',
        time: '35 days ago',
      },
      supply: '11221',
      twitterrMember: '12',
      discordMember: '420',
      presalePrice: '420',
      publicSalePrice: '420',
      maxMint: ['WL:1', 'PUB:2'],
      presaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      publicSaleMintTime: {
        time: '0s',
        date: 'Apr 4, 12:45',
      },
      category: ['Cat1', 'Cat2', 'category 3', 'Cat2', 'category 3'],
      socialMedia: ['discord', 'twitter', 'discord'],
    },
  ],
  spaces: [60, 15, 15, 15, 13, 13, 20, 13, 20, 20, 20, 20],
};

const Drops = () => {
  const [openFilter, setOpenFiter] = useState(false);
  const [reveal, setReveal] = useState('Reveal');

  const onClick = (e) => {
    setOpenFiter((prev) => !prev);
  };

  const activeButtonsChange = (value) => {
    setReveal(value);
    if (value === 'Reveal') {
      // tableData.headers.push('reveal');
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
            height="30px"
            paddingTop="1rem"
            containerStyles={{
              border: '1px solid #1956E2',
              minWidth: '21.555rem',
              height: '30px',
            }}
            callBack={activeButtonsChange}
          />
        </div>

        <div className="search__filter__container">
          <div className="">
            <Search
              className="other-placeholder"
              styles={{
                width: '194px',
                height: '30px',
                border: '1px solid #1956E2',
                background: '#0B1E39 0% 0% no-repeat padding-box',
                color: '#244677',
              }}
            />
          </div>

          <div className="drops__filter" id="filter" onClick={onClick}>
            <FilterIcon />
          </div>
        </div>
      </div>

      <div className="drops__table__container">
        <MTable data={tableData} sort={false} info={false} area="mTableDrops" />
      </div>
    </div>
  );
};

export default Drops;
