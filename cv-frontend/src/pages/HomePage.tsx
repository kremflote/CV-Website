import Hero from "../components/Hero";
import CvTimeline from "../components/CvTimeline";
import ContactSection from "../components/ContactSection";
import { Container } from "../components/common/Container";
import { sectionStyles } from "../styles/styles";

const HomePage = () => {
  return (
    <>
      <Hero />

      <section
        id="erfaring"
        aria-labelledby="erfaring-title"
        className={sectionStyles.band}
      >
        <Container className={sectionStyles.inner}>
          <div className={sectionStyles.headingRow}>
            <h2 id="erfaring-title" className={sectionStyles.heading}>
              Erfaring
            </h2>
          </div>
          <CvTimeline />
        </Container>
      </section>

      <ContactSection />
    </>
  );
};

export default HomePage;
