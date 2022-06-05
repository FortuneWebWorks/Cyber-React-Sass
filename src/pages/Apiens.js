import '../styles/mainApiens.scss';
import ApiensBox from '../components/ApiensBox';
import RevealStatus from '../components/RevealStatus';
import Search from '../components/Search';
import { ReactComponent as WorldIcon } from '../assets/images/table-world.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/table-twitter.svg';
import { ReactComponent as DiscordIcon } from '../assets/images/discordNoBackground.svg';
import { ReactComponent as OpenSeaIcon } from '../assets/images/openSeaNoBackground.svg';

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
    </div>
  );
};

export default Apiens;
