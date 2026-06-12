import { useState } from "react";
import { NavLink } from "react-router-dom";
import CvModal from "../components/CvModal";
import CvTimeline from "../components/CvTimeline";
import RotatingHeroImage from "../components/RotatingHeroImage";
import SkillSection from "../components/SkillSection";
import { homeStyles } from "../styles/styles";
import { MediumLayout } from "../components/common/MediumLayout";
import { FullWidthLayout } from "../components/common/FullWidthLayout";

const HomePage = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section className={homeStyles.sketchShell}>
      <header className={homeStyles.sketchHero}>
        <div className={homeStyles.sketchHeroImage} />
        <div className={homeStyles.sketchOverlay} />
        <div className={homeStyles.sketchHeroContent}>
          <div className={homeStyles.sketchHeroText}>
            <p className={homeStyles.sketchKicker}>Digital Cv</p>
            <h1 className={homeStyles.sketchTitle}>Marius Kristensen</h1>
            <p className={homeStyles.sketchQuote}>
              En <span>nystartet utvikler</span> og tidligere kundebehandler
              <br />
              med <span>bakgrunn i salg og relasjonsbygging.</span>
            </p>
          </div>
          <RotatingHeroImage />
        </div>
      </header>

      <nav className={homeStyles.sketchNav} aria-label="Forside navigasjon">
        <NavLink
          to="/"
          className={homeStyles.sketchNavActive}
          aria-label="Hjem"
        >
          <i className="fas fa-house inline sm:!hidden"></i>
          <span className="hidden sm:inline">Hjem</span>
        </NavLink>
        <NavLink to="/portfolio" className={homeStyles.sketchNavLink}>
          <i className="fas fa-briefcase inline sm:!hidden"></i>
          <span className="hidden sm:inline">Portfolio</span>
        </NavLink>
        <NavLink to="/kontakt" className={homeStyles.sketchNavLink}>
          <i className="fas fa-envelope inline sm:!hidden"></i>
          <span className="hidden sm:inline">Kontakt</span>
        </NavLink>
        <button
          type="button"
          onClick={() => setIsCvOpen(true)}
          className={homeStyles.sketchNavButton}
          aria-label="Åpne CV"
        >
          <i className="fas fa-file-lines inline sm:!hidden"></i>
          <span className="hidden sm:inline">CV</span>
        </button>
      </nav>

      <section>
        <FullWidthLayout>
          <div className={homeStyles.timelineGradientShell}>
            <MediumLayout>
              <div className={homeStyles.timelineToBlackBand}>
                <div className={homeStyles.sketchTimeline}>
                  <CvTimeline />
                </div>
              </div>
            </MediumLayout>
          </div>
        </FullWidthLayout>
      </section>

      <section className={homeStyles.rainToCvBand}>
        <section className={homeStyles.rainSection}>
          <h2 className={homeStyles.rainText}>
            En <span className={homeStyles.rainHighlight}>pålitelig</span>{" "}
            utvikler, som tåler regnvær
          </h2>
          <div className={homeStyles.rainImageFrame}>
            <img
              src="/images/me/merain.jpg"
              alt="Marius Kristensen på regnværsdag"
              className={homeStyles.rainImage}
            />
          </div>
        </section>
      </section>

      <div className={homeStyles.sketchLowerStack}>
        <section className={homeStyles.skillEdgeSection}>
          <div className={homeStyles.sketchSkillPanel}>
            <SkillSection />
          </div>
        </section>
      </div>
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
};

export default HomePage;
