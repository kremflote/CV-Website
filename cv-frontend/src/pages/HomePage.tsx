import CvTimeline from "../components/CvTimeline";
import { homeStyles } from "../styles/styles";
import { MediumLayout } from "../components/common/MediumLayout";
import { FullWidthLayout } from "../components/common/FullWidthLayout";

const HomePage = () => {
  return (
    <section className={homeStyles.sketchShell}>
      <section>
        <FullWidthLayout>
          <div className={homeStyles.timelineGradientShell}>
            <MediumLayout>
              <CvTimeline showDetailPanel />
            </MediumLayout>
          </div>
        </FullWidthLayout>
      </section>
    </section>
  );
};

export default HomePage;
