import '../styles/traits.scss';
import ButtonGroup from '../components/ButtonGroup';
import Timer from '../components/Timer';

const timings = ['1d', '7d', '30d', '90d', '1y'];
const timings2 = ['5m', '30m', '1h', '6h'];

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

      <div></div>
    </div>
  );
};

export default Traits;
