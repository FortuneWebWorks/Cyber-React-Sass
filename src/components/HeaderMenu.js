import { useEffect, useState } from 'react';
import '../styles/headerMenu.scss';

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window &&
      window.addEventListener('pointerdown', (e) => {
        if (e.target.getAttribute('istarget')) {
          e.target.classList.contains('headermenu__toggler')
            ? setOpen((prev) => !prev)
            : setOpen(true);
        } else {
          setOpen(false);
        }
      });
  }, []);

  return (
    <div className="headermenu__container" istarget="true">
      <svg
        className="headermenu__toggler"
        istarget="true"
        viewBox="0 0 24 24"
        aria-hidden="true"
        width="25"
        height="30"
      >
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="#fff"
        ></path>
      </svg>

      {open && (
        <ul className="headermenu__items" istarget="true">
          <li istarget="true">Pricing</li>
          <li istarget="true">Resources</li>
          <li istarget="true">Cyberdash Alpha</li>
          <li istarget="true">Institutions</li>
          <li istarget="true">About us</li>
        </ul>
      )}
    </div>
  );
};

export default HeaderMenu;
