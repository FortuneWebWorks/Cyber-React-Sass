import useFetcher from 'hooks/useFetcher';
import 'styles/collections/mainCollection.scss';
import InfoBox from 'components/collections/InfoBox';
import CollectionTrendingDashboard from 'components/collections/CollectionTrendingDashboard';
import RevealStatus from 'components/RevealStatus';
import Search from 'components/Search';
import { ReactComponent as WorldIcon } from 'assets/images/table-world.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/table-twitter.svg';
import { ReactComponent as DiscordIcon } from 'assets/images/discordNoBackground.svg';
import { ReactComponent as OpenSeaIcon } from 'assets/images/openSeaNoBackground.svg';
import { ReactComponent as EtherScanIcon } from 'assets/images/etherscan-logo-circle.svg';
import { ReactComponent as LooksrareIcon } from 'assets/images/looksrare.svg';
import { ReactComponent as CopyIcon } from 'assets/images/copy.svg';
import { ReactComponent as ExternalLinkIcon } from 'assets/images/external-link.svg';
import { ReactComponent as BluetickIcon } from 'assets/images/bluebg-check.svg';
import { ReactComponent as TrendingIcon } from 'assets/images/Trending.svg';
import { ReactComponent as AnalyticalIcon } from 'assets/images/Analytical.svg';
import CollectionsList from 'components/collections/CollectionsList';
import DropDown from 'components/DropDown';
import DropDownFloorVar from 'components/charts/FloorVar/FloorVarDropdown';
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import ETHPrice from 'components/charts/ETHPrice/ETHPrice';
import SwitchJs from 'components/SwitchJs';
import { CollectionContextProvider } from 'contexts/collectionContext';
import FloorVarChart from 'components/charts/FloorVar/FloorVarChart';
import ButtonGroup from 'components/ButtonGroup';

const Collection = () => {
  const params = useParams();
  const slug = params.slug;
  const [activeChart, setActiveChart] = useState('list');
  const [outliers, setOutliers] = useState(false);
  const [timeFrame, setTimeFrame] = useState('4 Hours');
  const [floorTimeFrame, setFloorTimeFrame] = useState('4 Hours');
  const [listingsSort, setListingsSort] = useState('null');
  const [floorVar, setFloorVar] = useState('null');

  const [metaData, metaLoading] = useFetcher(
    `https://api.cyberdash.app/v1/collections/${slug}`
  );

  return (
    <CollectionContextProvider>
      <div className='collection__container'>
        <div className='collection__head_header'>
          <img
            src={metaData?.banner_image_url}
            className='collection__head_header'
            alt=''
          />
          <img
            src={metaData?.image_url}
            className='hader__cricle_image'
            alt=''
          />
        </div>

        <div className='collection__head_content'>
          <div className='collection__reveal_container'>
            <span>REVEAL STATUS</span>
            <RevealStatus />
          </div>

          <div className='collection__center_box'>
            <h1 className='collection__title'>
              {metaData?.collection_name} <BluetickIcon className='blue_tick' />
            </h1>
            <span className='collection__id'>
              {metaData?.contract_address} <CopyIcon />
              <ExternalLinkIcon className='external_link_svg' />
            </span>
            {metaData && <InfoBox data={metaData} />}
          </div>

          <div className='collection__search'>
            <div>
              <a href={metaData?.website_url}>
                <WorldIcon />
              </a>
              <a href={metaData?.twitter_url}>
                <TwitterIcon />
              </a>
              <a
                href={metaData?.discord_url}
                style={{ transform: 'scale(1.5)' }}>
                <DiscordIcon />
              </a>
              <a href={metaData?.opensea_url}>
                <OpenSeaIcon />
              </a>
              <a href={metaData?.website_url}>
                <LooksrareIcon />
              </a>
              <a href={metaData?.website_url}>
                <EtherScanIcon />
              </a>
            </div>
            <Search />
          </div>
        </div>

        <div className='collection__views'>
          <div className='active'>
            <TrendingIcon />
            <span>Trending Dashboard</span>
          </div>

          <div>
            <AnalyticalIcon />
            <span>Analytical Charts</span>
          </div>
        </div>

        <div style={{ marginBottom: '67px' }}>
          <CollectionTrendingDashboard />
        </div>

        <div className='collection__lists__cahrts_conatiner'>
          <div className='collection__list_container'>
            <div className='collection__list__header'>
              <h2>Listings</h2>

              <div className='collection__list__header_dropdown'>
                <DropDown
                  fontSize='3rem'
                  innerColor='#244677'
                  minWidth='111px'
                  items={[
                    { name: 'Date' },
                    { name: 'Price' },
                    { name: 'Rank' },
                  ]}
                  placeholder={'Sorting'}
                  callBack={(val) => setListingsSort(val)}
                />
              </div>
            </div>
            <CollectionsList
              slug={slug}
              type={'listings'}
              sort={listingsSort}
            />
          </div>

          <div className='collection__charts_container'>
            <div className='collection__charts'>
              {/* Titles */}
              <span className='list-sails_title_x'>Time</span>
              <span className='list-sails_title_y'>ETH Price</span>

              <div className='collection__chart_header'>
                <button
                  className={activeChart === 'list' ? 'active' : ''}
                  onClick={() => setActiveChart('list')}>
                  List
                </button>
                <button
                  className={activeChart === 'orders' ? 'active' : ''}
                  onClick={() => setActiveChart('orders')}>
                  Sails
                </button>
              </div>

              <div className='collection__filters'>
                <div className='collection__filters_dropdown'>
                  <span className='dropdown_title'>Time Frame</span>
                  <DropDown
                    fontSize='3rem'
                    innerColor='#244677'
                    minWidth='111px'
                    items={[
                      { name: '4 Hours' },
                      { name: '7 Hours' },
                      { name: '2 Hours' },
                    ]}
                    placeholder={'4 Hours'}
                    callBack={(value) => setTimeFrame(value)}
                  />
                </div>

                <div className='collection__filters_toggle'>
                  <span>LOG Scale</span>
                  <SwitchJs style={{ backgroundColor: '#24467750' }} />
                </div>

                <div className='collection__filters_toggle'>
                  <span>OUTLIERS</span>
                  <SwitchJs
                    style={{ backgroundColor: '#24467750' }}
                    onClick={(e) => {
                      setOutliers((prev) => !prev);
                    }}
                  />
                </div>
              </div>

              <div className='collection__charts_mode'>
                <div>
                  <div className='collection__charts_mode_point'></div>
                  <span>LEGENDARY</span>
                </div>
                <div>
                  <div className='collection__charts_mode_point'></div>
                  <span>SUPER RARE</span>
                </div>
                <div>
                  <div className='collection__charts_mode_point'></div>
                  <span>RARE</span>
                </div>
                <div>
                  <div className='collection__charts_mode_point'></div>
                  <span>COMMON</span>
                </div>
              </div>

              <div className='ETHPrice_chart'>
                <ETHPrice
                  type={activeChart}
                  isOutliers={outliers}
                  timeFrame={timeFrame}
                />
              </div>
            </div>

            {/*  */}
            <div className='collection__charts collection__second_chart_container'>
              {/* Titles */}
              <span
                className='list-sails_title_x'
                style={{ transform: 'translateX(-50%)' }}>
                Time Period
              </span>
              <span className='list-sails_title_y'>Count</span>

              <div className='collection__chart_header'>
                <button
                  className={activeChart === 'list' ? 'active' : ''}
                  onClick={() => setActiveChart('list')}>
                  List
                </button>
                <button
                  className={activeChart === 'orders' ? 'active' : ''}
                  onClick={() => setActiveChart('orders')}>
                  Delist
                </button>
              </div>

              <div className='collection__filters second__chart'>
                <div className='collection__filters_dropdown'>
                  <span className='dropdown_title'>Floor Var</span>
                  {/* {console.log(metaData)} */}
                  <DropDownFloorVar
                    fontSize='3rem'
                    innerColor='#244677'
                    minWidth='111px'
                    callBack={(value) => setFloorVar(value)}
                  />
                </div>

                <div className='collection__filters_dropdown'>
                  <span className='dropdown_title'>Time Frame</span>
                  <DropDown
                    fontSize='3rem'
                    innerColor='#244677'
                    minWidth='111px'
                    items={[
                      { name: '4 Hours' },
                      { name: '7 Hours' },
                      { name: '2 Hours' },
                    ]}
                    placeholder={'4 Hours'}
                    callBack={(value) => setFloorTimeFrame(value)}
                  />
                </div>
              </div>

              <div className='collection__charts_mode'>
                <div>
                  <div
                    className='collection__charts_mode_point'
                    style={{ backgroundColor: '#27AF52' }}></div>
                  <span>ABOVE FLOOR</span>
                </div>
                <div>
                  <div
                    className='collection__charts_mode_point'
                    style={{ backgroundColor: '#FD2F7A' }}></div>
                  <span>BELOW FLOOR</span>
                </div>
                <div>
                  <div
                    className='collection__charts_mode_point'
                    style={{ backgroundColor: '#FD8F25' }}></div>
                  <span>SALES</span>
                </div>
              </div>

              <div className='ETHPrice_chart'>
                {metaData && (
                  <FloorVarChart
                    type={activeChart}
                    isOutliers={outliers}
                    timeFrame={floorTimeFrame}
                    floorPrice={metaData.floor_price}
                    floorVar={floorVar}
                  />
                )}
              </div>
            </div>
          </div>

          <div className='collection__list_container'>
            <div className='collection__list__header'>
              <h2>Sales</h2>
            </div>
            <CollectionsList slug={slug} type={'orders'} />
          </div>
        </div>

        <div className='collection__large_chart collection__charts_container'>
          <div className='collection__filters price_range'>
            <div className='collection__filters_dropdown'>
              <span
                className='dropdown_title'
                style={{ font: 'normal normal bold 12px/14px Roboto' }}>
                Price Range
              </span>
              <DropDown
                fontSize='3rem'
                innerColor='#244677'
                minWidth='60px'
                items={[{ name: '10%' }, { name: '20%' }, { name: '30%' }]}
                placeholder={'10%'}
                callBack={(value) => setTimeFrame(value)}
              />
            </div>

            <div className='collection__filters_toggle'>
              <ButtonGroup items={['%', '#']} />
            </div>

            <div className='collection__filters_toggle'>
              <span
                style={{
                  color: '#D1D1D1',
                  font: 'normal normal normal 11px/13px Roboto',
                }}>
                OUTLIERS
              </span>
              <SwitchJs
                style={{ backgroundColor: '#24467750' }}
                onClick={(e) => {
                  setOutliers((prev) => !prev);
                }}
              />
            </div>

            <div className='collection__filters_dropdown large_chart_time_frame'>
              <span className='dropdown_title'>Time Frame</span>
              <DropDown
                fontSize='3rem'
                innerColor='#244677'
                minWidth='111px'
                items={[
                  { name: '4 Hours' },
                  { name: '7 Hours' },
                  { name: '2 Hours' },
                ]}
                placeholder={'4 Hours'}
                callBack={(value) => setTimeFrame(value)}
              />
            </div>

            <div className='collection__filters_dropdown'>
              <span className='dropdown_title'>Threshold</span>
              <input
                type='number'
                name='threshold'
                id='threshold'
                className='threshold__input'
              />
            </div>

            <div className='collection__charts_mode'>
              <div>
                <div className='collection__charts_mode_point'></div>
                <span>LEGENDARY</span>
              </div>
              <div>
                <div className='collection__charts_mode_point'></div>
                <span>SUPER RARE</span>
              </div>
              <div>
                <div className='collection__charts_mode_point'></div>
                <span>RARE</span>
              </div>
              <div>
                <div className='collection__charts_mode_point'></div>
                <span>COMMON</span>
              </div>
            </div>
          </div>

          <div className='charts'>
            <div className='collection__charts'>
              {/* Titles */}
              <span className='list-sails_title_x'>Price</span>
              <span className='list-sails_title_y'>Count</span>

              <div className='ETHPrice_chart'>
                <ETHPrice
                  type={activeChart}
                  isOutliers={outliers}
                  timeFrame={timeFrame}
                />
              </div>
            </div>

            {/*  */}
            <div className='collection__charts'>
              {/* Titles */}
              <span className='list-sails_title_x'>Rarity Rank</span>
              <span className='list-sails_title_y'>Price in ETH</span>

              <div className='ETHPrice_chart'>
                <ETHPrice
                  type={activeChart}
                  isOutliers={outliers}
                  timeFrame={timeFrame}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollectionContextProvider>
  );
};

export default Collection;
