import { useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import CvModal from "../CvModal";
import ThemeToggle from "./ThemeToggle";
import { Container } from "./Container";
import { buttonStyles, headerStyles } from "../../styles/styles";

const siteName = "Marius Kristensen";

const navItems = [
  { hash: "erfaring", label: "Erfaring" },
  { hash: "ferdigheter", label: "Ferdigheter" },
  { hash: "prosjekter", label: "Prosjekter" },
  { hash: "kontakt", label: "Kontakt" },
] as const;

const isProjectPath = (pathname: string) =>
  pathname.startsWith("/portfolio") || pathname.startsWith("/showcase");

const Header: FC = () => {
  const { pathname } = useLocation();
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <header className={headerStyles.nav}>
      <Container>
        <nav className={headerStyles.navInner} aria-label="Hovednavigasjon">
          <Link to="/" className={headerStyles.wordmark}>
            {siteName}
          </Link>

          <ul className={headerStyles.navList}>
            {navItems.map(({ hash, label }) => {
              const isActive = hash === "prosjekter" && isProjectPath(pathname);
              return (
                <li key={hash}>
                  <Link
                    to={{ pathname: "/", hash: `#${hash}` }}
                    className={`${headerStyles.navLink} ${
                      isActive ? headerStyles.navLinkActive : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={`${headerStyles.navActions} md:col-start-3 md:row-start-1 row-start-1 col-start-2`}>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className={`${buttonStyles.base} ${buttonStyles.primary} ${headerStyles.cvButton}`}
              aria-haspopup="dialog"
            >
              CV
            </button>
          </div>
        </nav>
      </Container>

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};

export default Header;
