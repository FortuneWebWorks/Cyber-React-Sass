import { useState } from 'react';
import '../styles/headerMenu.scss';

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="headermenu__container">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        width="25"
        height="30"
        onClick={() => setOpen((prev) => !prev)}
      >
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="#fff"
        ></path>
      </svg>

      {open && (
        <ul className="headermenu__items">
          <li>Pricing</li>
          <li>Resources</li>
          <li>Cyberdash Alpha</li>
          <li>Institutions</li>
          <li>About us</li>
        </ul>
      )}
    </div>
  );
};

export default HeaderMenu;
