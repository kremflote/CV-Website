import CvTimeline from "../components/CvTimeline";
import ContactSection from "../components/ContactSection";
import { homeStyles, headerStyles } from "../styles/styles";
import { MediumLayout } from "../components/common/MediumLayout";

// Hero, skills and projects are rebuilt in step 3; this keeps the old content in place.
const HomePage = () => {
  return (
    <div className={homeStyles.shell}>
      <section className={headerStyles.hero} aria-labelledby="hero-title">
        <div className={headerStyles.heroContent}>
          <div className={headerStyles.heroText}>
            <p className={headerStyles.kicker}>Digital CV</p>
            <h1 id="hero-title" className={headerStyles.pageTitle}>
              Marius Kristensen
            </h1>
            <p className={headerStyles.quote}>
              En <span>nystartet utvikler</span> og tidligere kundebehandler
              <br />
              med <span>bakgrunn i salg og relasjonsbygging.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="erfaring" aria-label="Erfaring">
        <MediumLayout>
          <CvTimeline showDetailPanel />
        </MediumLayout>
      </section>

      <ContactSection />
    </div>
  );
};

export default HomePage;
