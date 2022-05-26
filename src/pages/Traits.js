import '../styles/traits.scss';
import ButtonGroup from '../components/ButtonGroup';
import Timer from '../components/Timer';
import TraitsList from '../components/TraitsList';

const timings = ['1d', '7d', '30d', '90d', '1y'];
const timings2 = ['5m', '30m', '1h', '6h'];

const tableItems = [
  {
    id: 1,
    user: {
      userImage: 'https://picsum.photos/50',
      nftName: 'NFT NAME',
      time: '35 days ago',
    },
    floor: ['10', '10%'],
    saies: ['10', '10%'],
    listings: ['10', '10%'],
    volume: ['10', '10%'],
    marketCap: ['10', '10%'],
  },
  {
    id: 2,
    user: {
      userImage: 'https://picsum.photos/50',
      nftName: 'NFT NAME',
      time: '35 days ago',
    },
    floor: ['10', '10%'],
    saies: ['10', '10%'],
    listings: ['10', '10%'],
    volume: ['10', '10%'],
    marketCap: ['10', '10%'],
  },
];

const Traits = () => {
  return (
    <div className="traits">
      <div className="traits__title">
        <h2>Trending NFT Collections</h2>
        <p>See what's selling and listing in real time!</p>
      </div>

      <div className="traist__sort_timer">
        <div className="traits__sort-details">
          <span>Sorted By: </span>
          <ButtonGroup
            items={['High/Low', '%Change']}
            font="normal normal bold 12px/14px Roboto"
            containerStyles={{ border: '1px solid #1956E2', height: '30px' }}
          />
        </div>

        <div className="traits__timers">
          <Timer items={timings} defaultActive={timings[2]} />
          <Timer items={timings2} defaultActive={timings[2]} />
        </div>

        <img
          style={{ marginLeft: '5.1rem' }}
          src="https://picsum.photos/22/20"
          alt=""
        />
      </div>

      <div>
        <TraitsList items={tableItems} />
      </div>
    </div>
  );
};

export default Traits;
