import AboutMe from "../components/AboutMe";
import TenureTimeline from "../components/TenureTimeline";
import { WideLayout } from "../components/common/WideLayout";

const HomePage = () => {
  return (
    <WideLayout>
      <>
        <AboutMe />
        <TenureTimeline />
      </>
    </WideLayout>
  );
};

export default HomePage;
