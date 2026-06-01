import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { headerStyles } from "../../styles/styles";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${headerStyles.navLinkBase} ${isActive ? headerStyles.navLinkActive : ""}`;

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        <NavLink to="/" className={headerStyles.logo}>
          <span className={headerStyles.logoFirstName}>Marius</span>
          <span className={headerStyles.logoLastName}>
            Kristensen
          </span>
        </NavLink>

        <ul className={headerStyles.navList}>
          <li>
            <NavLink to="/" className={navLinkClass} aria-label="Hjem">
              <i className="fas fa-house inline sm:!hidden"></i>
              <span className="hidden sm:inline">Hjem</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={navLinkClass}
              aria-label="Portfolio"
            >
              <i className="fas fa-briefcase inline sm:!hidden"></i>
              <span className="hidden sm:inline">Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/cv" className={navLinkClass} aria-label="CV">
              <i className="fas fa-file-lines inline sm:!hidden"></i>
              <span className="hidden sm:inline">CV</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kontakt"
              className={navLinkClass}
              aria-label="Kontakt"
            >
              <i className="fas fa-envelope inline sm:!hidden"></i>
              <span className="hidden sm:inline">Kontakt</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
