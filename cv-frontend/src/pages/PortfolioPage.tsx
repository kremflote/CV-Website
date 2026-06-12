import { useContext } from "react";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import ShowcaseCard from "../components/ShowcaseCard";
import { pageStyles } from "../styles/styles";

const PortfolioPage = () => {
  const { showcases, showcaseIsLoading, initError } =
    useContext(ShowcaseContext)!;

  return (
    <WideLayout>
      <section className="mb-24 px-5 py-16">
        {showcaseIsLoading && (
          <p className="text-center text-xl font-extralight text-white/65">
            Loading...
          </p>
        )}

        {initError && (
          <p className={`text-center ${pageStyles.errorText}`}>{initError}</p>
        )}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.id} {...showcase} />
          ))}
        </div>
      </section>
    </WideLayout>
  );
};

export default PortfolioPage;
