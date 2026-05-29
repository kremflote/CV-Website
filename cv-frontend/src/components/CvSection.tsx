import type { FC } from "react";

const CvSection: FC = () => {
  return (
    <section className="w-full max-w-[620px] px-0 pt-0 pb-12 xl:pt-16">
      <iframe
        src="/api/Cv"
        className="h-[760px] w-full rounded shadow-lg"
        title="CV"
      ></iframe>
    </section>
  );
};

export default CvSection;
