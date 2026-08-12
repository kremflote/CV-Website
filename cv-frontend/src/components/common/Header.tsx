import { useState, type FC, type MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CvModal from "../CvModal";
import { headerStyles } from "../../styles/styles";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${headerStyles.navLinkBase} ${isActive ? headerStyles.navLinkActive : ""}`;

const homeTitle = "Marius Kristensen";

const Header: FC = () => {
  const { pathname } = useLocation();
  const [isCvOpen, setIsCvOpen] = useState(false);
  const isHomePage = pathname === "/";
  const preventCurrentPageNavigation =
    (targetPath: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (pathname === targetPath) {
        event.preventDefault();
      }
    };

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav} aria-label="Hovednavigasjon">
        <div className={headerStyles.navInner}>
          <ul className={headerStyles.navList}>
            <li>
              <NavLink
                to="/"
                preventScrollReset
                onClick={preventCurrentPageNavigation("/")}
                className={navLinkClass}
                aria-label="Hjem"
              >
                <i className="fas fa-house inline sm:!hidden"></i>
                <span className="hidden sm:inline">Hjem</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                preventScrollReset
                onClick={preventCurrentPageNavigation("/portfolio")}
                className={navLinkClass}
                aria-label="Portfolio"
              >
                <i className="fas fa-briefcase inline sm:!hidden"></i>
                <span className="hidden sm:inline">Portfolio</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kontakt"
                preventScrollReset
                onClick={preventCurrentPageNavigation("/kontakt")}
                className={navLinkClass}
                aria-label="Kontakt"
              >
                <i className="fas fa-envelope inline sm:!hidden"></i>
                <span className="hidden sm:inline">Kontakt</span>
              </NavLink>
            </li>
          </ul>

          <div className={headerStyles.navAction}>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className={headerStyles.navButton}
              aria-label="Åpne CV"
            >
              <i className="fas fa-file-lines inline sm:!hidden"></i>
              <span className="hidden sm:inline">CV</span>
              <i className="fas fa-arrow-up-right-from-square text-base"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className={headerStyles.navSpacer} aria-hidden="true" />

      {isHomePage && (
        <section className={headerStyles.hero}>
          <div className={headerStyles.heroContent}>
            <div className={headerStyles.heroText}>
              <p className={headerStyles.kicker}>Digital Cv</p>
              <h1 className={headerStyles.pageTitle}>{homeTitle}</h1>
              <p className={headerStyles.quote}>
                En <span>nystartet utvikler</span> og tidligere kundebehandler
                <br />
                med <span>bakgrunn i salg og relasjonsbygging.</span>
              </p>
            </div>
          </div>
        </section>
      )}

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};

export default Header;
