import '../styles/apiensFilter.scss';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow_down.svg';

const ApiensFilter = () => {
  return (
    <div className="apiens__filter">
      <div className="apiens__filter__content">
        <div className="apiens__filter__menu">
          <button className="active">Price</button>
          <button>Rank</button>
          <button>Token</button>
          <button>Trait</button>

          <button className="apiens__filter__menu_resetall">Reset All</button>
          <button className="apiens__filter__menu_reset">Reset</button>
        </div>

        <div className="apiens__filter__content_content">
          <span>Show the price between</span>

          <input type="text" placeholder="Min" />

          <span>and</span>

          <div class="apiens__filter_legend_input">
            <label>Max</label>
            <input type="text" placeholder="20" />
          </div>

          <button>Save</button>
        </div>
      </div>

      <div className="apiens__filter__sideMenu">
        <div>
          <span className="">Ranking Method</span>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ApiensFilter;
