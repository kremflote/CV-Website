import { useContext } from "react";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import ShowcaseCard from "../components/ShowcaseCard";
import type { IShowcase } from "../interfaces/IShowcase";
import { pageStyles, portfolioStyles } from "../styles/styles";

type ShowcaseCategory = "work" | "personal" | "kristiania";

const categoryOrder: { key: ShowcaseCategory; title: string }[] = [
  { key: "work", title: "Work" },
  { key: "personal", title: "Personal" },
  { key: "kristiania", title: "Kristiania" },
];

const academicPattern =
  /kristiania|eksamen|exam|pgr|pg\d|bachelor|frontend|mobil|algoritm|datastruktur|java|linux|semester|database/i;

const getShowcaseCategory = (showcase: IShowcase): ShowcaseCategory => {
  const category = showcase.category?.toLowerCase();

  if (
    category === "work" ||
    category === "personal" ||
    category === "kristiania"
  ) {
    return category;
  }

  const searchableText = `${showcase.title} ${showcase.description}`;
  return academicPattern.test(searchableText) ? "kristiania" : "personal";
};

const groupShowcasesByCategory = (showcases: IShowcase[]) =>
  showcases.reduce<Record<ShowcaseCategory, IShowcase[]>>(
    (groups, showcase) => {
      const category = getShowcaseCategory(showcase);
      groups[category].push(showcase);
      return groups;
    },
    { work: [], personal: [], kristiania: [] },
  );

const PortfolioPage = () => {
  const { showcases, showcaseIsLoading, initError } =
    useContext(ShowcaseContext)!;
  const groupedShowcases = groupShowcasesByCategory(showcases);

  return (
    <WideLayout>
      <section className={portfolioStyles.section}>
        {showcaseIsLoading && (
          <p className={pageStyles.loadingText}>Loading...</p>
        )}

        {initError && (
          <p className={`text-center ${pageStyles.errorText}`}>{initError}</p>
        )}

        <div className={portfolioStyles.categoryStack}>
          {categoryOrder.map(({ key, title }) => {
            const categoryShowcases = groupedShowcases[key];

            if (categoryShowcases.length === 0) {
              return null;
            }

            return (
              <section key={key}>
                <h2 className={portfolioStyles.categoryTitle}>{title}</h2>
                <div className={portfolioStyles.grid}>
                  {categoryShowcases.map((showcase) => (
                    <ShowcaseCard key={showcase.id} {...showcase} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </WideLayout>
  );
};

export default PortfolioPage;
