import Hero from "../components/Hero";
import CvTimeline from "../components/CvTimeline";
import SkillSection from "../components/SkillSection";
import FeaturedProjects, { AllProjectsLink } from "../components/FeaturedProjects";
import ContactSection from "../components/ContactSection";
import { Container } from "../components/common/Container";
import { sectionStyles } from "../styles/styles";

const HomePage = () => {
  return (
    <>
      <Hero />

      <section id="erfaring" aria-labelledby="erfaring-title" className={sectionStyles.band}>
        <Container className={sectionStyles.inner}>
          <div className={sectionStyles.headingRow}>
            <h2 id="erfaring-title" className={sectionStyles.heading}>
              Erfaring
            </h2>
          </div>
          <CvTimeline />
        </Container>
      </section>

      <section
        id="ferdigheter"
        aria-labelledby="ferdigheter-title"
        className={sectionStyles.plain}
      >
        <Container className={sectionStyles.inner}>
          <div className={sectionStyles.headingRow}>
            <h2 id="ferdigheter-title" className={sectionStyles.heading}>
              Ferdigheter
            </h2>
          </div>
          <SkillSection />
        </Container>
      </section>

      <section
        id="prosjekter"
        aria-labelledby="prosjekter-title"
        className={sectionStyles.plain}
      >
        <Container className={sectionStyles.inner}>
          <div className={sectionStyles.headingRow}>
            <h2 id="prosjekter-title" className={sectionStyles.heading}>
              Prosjekter
            </h2>
            <AllProjectsLink />
          </div>
          <FeaturedProjects />
        </Container>
      </section>

      <ContactSection />
    </>
  );
};

export default HomePage;
