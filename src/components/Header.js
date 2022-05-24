import '../styles/header.scss';
import logo from '../assets/images/Group 989.png';
import { ReactComponent as DiscordIcon } from '../assets/images/discord.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkdin.svg';
import { ReactComponent as GasIcon } from '../assets/images/gas.svg';
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <div className="header__menu-item">
        <span>Pricing</span>
        <span>Resources</span>
        <span>Cyberdash Alpha</span>
        <span>Institutions</span>
        <span>About us</span>
      </div>

      <div className="header__contact">
        <div className="header__contact__gas">
          <GasIcon />
          <span>20 gwei</span>
        </div>

        <div className="header__contact__contact-icons">
          <TwitterIcon />
          <DiscordIcon />
          <LinkedinIcon />
        </div>

        <button className="header__connect-wallet">Connect Wallet</button>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
