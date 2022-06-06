import '../styles/mainApiens.scss';
import ApiensBox from '../components/ApiensBox';
import ApiensTrendingDashboard from '../components/ApiensTrendingDashboard';
import RevealStatus from '../components/RevealStatus';
import Search from '../components/Search';
import { ReactComponent as WorldIcon } from '../assets/images/table-world.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/table-twitter.svg';
import { ReactComponent as DiscordIcon } from '../assets/images/discordNoBackground.svg';
import { ReactComponent as OpenSeaIcon } from '../assets/images/openSeaNoBackground.svg';
import ApiensList from '../components/ApiensList';
import HeaderMenu from '../components/HeaderMenu';
import DropDown from '../components/DropDown';

const Apiens = () => {
  return (
    <div className="apiens__container">
      <div className="apiens__head_header">
        <div className="hader__cricle_image"></div>
      </div>

      <div className="apiens__head_content">
        <div className="apiens__reveal_container">
          <span>REVEAL STATUS</span>
          <RevealStatus />
        </div>

        <div className="apiens__center_box">
          <h1 className="apiens__title">APIENS OFFICIALS</h1>
          <span className="apiens__id">
            sdfasdfdfsdsadfsdfsdfsdsfadfsaadfsdafsdfs
          </span>
          <ApiensBox />
        </div>

        <div className="apiens__search">
          <div>
            <WorldIcon />
            <TwitterIcon />
            <DiscordIcon />
            <OpenSeaIcon />
          </div>
          <Search />
        </div>
      </div>

      <div style={{ marginBottom: '67px' }}>
        <ApiensTrendingDashboard />
      </div>

      <div className="apiens__lists__cahrts_conatiner">
        <div className="apies__list_container">
          <div className="apies__list__header">
            <h2>Listings</h2>

            <div className="apies__list__header_dropdown">
              <DropDown
                fontSize="3rem"
                innerColor="#244677"
                minWidth="111px"
                items={[{ name: 'Date' }, { name: 'Price' }, { name: 'Rank' }]}
                placeholder={'Sorting'}
              />
            </div>
          </div>
          <ApiensList />
        </div>

        <div className="apiens__charts_container">
          <div className="apiens__charts">
            <div className="apiens__chart_header">
              <button className="active">List</button>
              <button>Delist</button>
            </div>
          </div>

          <div className="apiens__second_chart_container">
            <h2>Momentum Index</h2>
            <div className="apiens__charts">
              <div className="apiens__chart_header">
                <button className="active">List</button>
                <button>Delist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="apies__list_container">
          <div className="apies__list__header">
            <h2>Listings</h2>

            <div className="apies__list__header_dropdown">
              <DropDown
                fontSize="3rem"
                innerColor="#244677"
                minWidth="111px"
                items={[{ name: 'Date' }, { name: 'Price' }, { name: 'Rank' }]}
                placeholder={'Sorting'}
              />
            </div>
          </div>
          <ApiensList />
        </div>
      </div>
    </div>
  );
};

export default Apiens;
