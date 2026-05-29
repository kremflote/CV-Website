import { useContext } from "react";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseProvider";
import ShowcaseCard from "../components/ShowcaseCard";

const PortfolioPage = () => {
  const { showcases, showcaseIsLoading, initError } =
    useContext(ShowcaseContext)!;

  return (
    <WideLayout>
      <>
        <h1 className="px-4 pt-16 text-center text-wood text-4xl font-semibold">
          Portfolio
        </h1>
        <hr className="mt-4 mb-8 border-wood" />

        {showcaseIsLoading && (
          <p className="text-center text-wood">Loading...</p>
        )}

        {initError && <p className="text-center text-red-500">{initError}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-6">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.id} {...showcase} />
          ))}
        </div>
      </>
    </WideLayout>
  );
};

export default PortfolioPage;
