import '../styles/expectedPnlCard.scss';
import { ReactComponent as DiscordIcon } from '../assets/images/discordNoBackground.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/twitterNoBackground.svg';
import { ReactComponent as OpenSeaIcon } from '../assets/images/openSeaNoBackground.svg';

const ExpectedPnlCard = () => {
  return (
    <div className="expectedPnlCard">
      <div className="exp__header">
        <span className="exp__title">Bijan Shmas</span>

        <TwitterIcon />
        <DiscordIcon />
        <OpenSeaIcon />
      </div>

      <div className="exp__items">
        <div>
          <span className="exp__item_title">Status</span>
          <div className="exp__item_value exp__item_status_value">
            <span className="status_green_circle">🟢</span> Presale
          </div>
        </div>
        <div>
          <span className="exp__item_title">Mint Price</span>
          <span className="exp__item_value">0.03 ETH</span>
        </div>
        <div>
          <span className="exp__item_title">Floor</span>
          <span className="exp__item_value">500</span>
        </div>
        <div>
          <span className="exp__item_title">OS Royalty</span>
          <span className="exp__item_value">2.5%</span>
        </div>
        <div>
          <span className="exp__item_title">NFT Royalty</span>
          <span className="exp__item_value">asd</span>
        </div>
        <div>
          <span className="exp__item_title">Listing</span>
          <span className="exp__item_value">5%</span>
        </div>
        <div>
          <span className="exp__item_title">Gas Fee</span>
          <span className="exp__item_value">Set</span>
        </div>
        <div>
          <span className="exp__item_title">Presale In</span>
          <span className="exp__item_value exp__item_value_presale">0S</span>
        </div>
      </div>

      <p className="exp__footer">December 3, 15:17</p>
    </div>
  );
};

export default ExpectedPnlCard;
