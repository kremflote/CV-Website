import type { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  header,
  iconMobile,
  logoLink,
  navContainer,
  navLinkActive,
  navLinkInactive,
  navRow,
  navRowItem,
  primaryColor,
  textDesktop,
} from "../../styles/styles";

const Header: FC = () => {
  return (
    <header className={`${header} ${primaryColor}`}>
      <nav className={navContainer}>
        <NavLink to="/" className={logoLink}>
          <span className=" text-6xl font-nunito">Marius</span>
          <span className="block text-4xl ml-16 font-nunito -mt-3">
            Kristensen
          </span>
        </NavLink>

        <ul className={navRow}>
          <li className={navRowItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-user-shield ${iconMobile}`}></i>
              <span className={textDesktop}>Hjem</span>
            </NavLink>
          </li>

          <li className={navRowItem}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-user-plus ${iconMobile}`}></i>
              <span className={textDesktop}>Portfolio</span>
            </NavLink>
          </li>

          <li className={navRowItem}>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-coins ${iconMobile}`}></i>
              <span className={textDesktop}>CV</span>
            </NavLink>
          </li>

          <li className={navRowItem}>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-envelope ${iconMobile}`}></i>
              <span className={textDesktop}>Kontakt</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
