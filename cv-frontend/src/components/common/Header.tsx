import { useState, type FC, type MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CvModal from "../CvModal";
import { headerStyles } from "../../styles/styles";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${headerStyles.navLinkBase} ${isActive ? headerStyles.navLinkActive : ""}`;

const pageCopy: Record<string, { title: string; quote: string }> = {
  "/portfolio": {
    title: "Portfolio",
    quote: "En samling av mine personlige- og akademiske prosjekter",
  },
  "/kontakt": {
    title: "Kontakt",
    quote: "Ta gjerne kontakt",
  },
};

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

  if (isHomePage) {
    return null;
  }

  const copy =
    pageCopy[pathname] ??
    (pathname.startsWith("/showcase/")
      ? pageCopy["/portfolio"]
      : {
          title: "Marius Kristensen",
          quote: "Digital Cv",
        });

  return (
    <header className={headerStyles.header}>
      <section className={headerStyles.hero}>
        <div className={headerStyles.heroImage} />
        <div className={headerStyles.heroOverlay} />
        <div className={headerStyles.heroContent}>
          <p className={headerStyles.kicker}>Digital Cv</p>
          <h1 className={headerStyles.pageTitle}>{copy.title}</h1>
          <p className={headerStyles.quote}>{copy.quote}</p>
        </div>
      </section>

      <nav className={headerStyles.nav} aria-label="Hovednavigasjon">
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

          <li>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className={headerStyles.navButton}
              aria-label="Åpne CV"
            >
              <i className="fas fa-file-lines inline sm:!hidden"></i>
              <span className="hidden sm:inline">CV</span>
            </button>
          </li>
        </ul>
      </nav>
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};

export default Header;
