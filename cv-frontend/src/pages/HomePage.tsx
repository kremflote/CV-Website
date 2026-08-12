import CvTimeline from "../components/CvTimeline";
import { homeStyles } from "../styles/styles";
import { MediumLayout } from "../components/common/MediumLayout";
import { FullWidthLayout } from "../components/common/FullWidthLayout";

const HomePage = () => {
  return (
    <section className={homeStyles.shell}>
      <section>
        <FullWidthLayout>
          <MediumLayout>
            <CvTimeline showDetailPanel />
          </MediumLayout>
        </FullWidthLayout>
      </section>
    </section>
  );
};

export default HomePage;
