import 'styles/collections/collectionFilter.scss';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow_down.svg';
import { useState } from 'react';
import CollectionFilterDropDown from './CollectionFilterDropDown';

const menuItems = ['Price', 'Rank', 'Token', 'Trait'];

const CollectionFilter = () => {
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
    <div className='collection__filter'>
      <div className='collection__filter__content'>
        <div className='collection__filter__menu' onClick={menuHandler}>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`${item === activeMenu ? 'active' : ''}`}>
              {item}
            </button>
          ))}

          <button className='collection__filter__menu_resetall delete'>
            Reset All
          </button>
          <button className='collection__filter__menu_reset delete'>
            Reset
          </button>
        </div>

        <div className='collection__filter__content_content'>
          {activeMenu !== 'Trait' ? (
            <>
              <span className='collection__filter__content_content_first_text'>
                Show the {activeMenu.toLowerCase()} between
              </span>

              <div className='collection__filter_legend_input'>
                <input type='text' />
                <label>Min</label>
              </div>

              <span>and</span>

              <div className='collection__filter_legend_input'>
                <input type='text' />
                <label>Max</label>
              </div>
            </>
          ) : (
            <>
              <span>Select Trait</span>

              <div className='collection__filter_legend_input'>
                <input type='text' />
                <label>Min</label>
              </div>

              <span>Select Type</span>
              <CollectionFilterDropDown />
            </>
          )}

          <button>Save</button>
        </div>
      </div>

      <div
        className={`collection__filter__sideMenu ${
          sideMenu ? 'open' : 'close'
        }`}
        onClick={() => setSideMenu((prev) => !prev)}>
        <div>
          <span className=''>Ranking Method</span>
          <ArrowIcon />
          <button>Simple</button>
          <button className='active'>Normalization</button>
          <button>Weighting</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionFilter;
