import { WideLayout } from "../components/common/WideLayout";
import SkillSection from "../components/SkillSection";
import CvSection from "../components/CvSection";

const CvPage = () => {
  return (
    <WideLayout>
      <div className="grid flex-1 grid-cols-1 gap-8 px-6 xl:grid-cols-[minmax(0,1fr)_minmax(520px,620px)]">
        <div>
          <SkillSection />
        </div>
        <div className="flex justify-center xl:justify-end">
          <CvSection />
        </div>
      </div>
    </WideLayout>
  );
};

export default CvPage;
