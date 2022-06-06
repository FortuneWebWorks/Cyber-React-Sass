import '../styles/apiensFilter.scss';
import { ReactComponent as ArrowIcon } from '../assets/images/arrow_down.svg';
import { useState } from 'react';
import ApiensFilterDropDown from './ApiensFilterDropDown';

const menuItems = ['Price', 'Rank', 'Token', 'Trait'];

const ApiensFilter = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Price');

  const menuHandler = (e) => {
    if (
      e.target.tagName === 'BUTTON' &&
      !e.target.classList.contains('delete')
    ) {
      setActiveMenu(e.target.textContent);
    }
  };

  return (
    <div className="apiens__filter">
      <div className="apiens__filter__content">
        <div className="apiens__filter__menu" onClick={menuHandler}>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`${item === activeMenu ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}

          <button className="apiens__filter__menu_resetall delete">
            Reset All
          </button>
          <button className="apiens__filter__menu_reset delete">Reset</button>
        </div>

        <div className="apiens__filter__content_content">
          {activeMenu !== 'Trait' ? (
            <>
              <span className="apiens__filter__content_content_first_text">
                Show the {activeMenu.toLowerCase()} between
              </span>

              <input type="text" placeholder="Min" />

              <span>and</span>

              <div className="apiens__filter_legend_input">
                <label>Max</label>
                <input type="text" placeholder="20" />
              </div>
            </>
          ) : (
            <>
              <span>Select Trait</span>

              <input type="text" placeholder="Min" />

              <span>Select Type</span>
              <ApiensFilterDropDown />
            </>
          )}

          <button>Save</button>
        </div>
      </div>

      <div
        className={`apiens__filter__sideMenu ${sideMenu ? 'open' : 'close'}`}
        onClick={() => setSideMenu((prev) => !prev)}
      >
        <div>
          <span className="">Ranking Method</span>
          <ArrowIcon />
          <button>Simple</button>
          <button className="active">Normalization</button>
          <button>Weighting</button>
        </div>
      </div>
    </div>
  );
};

export default ApiensFilter;
