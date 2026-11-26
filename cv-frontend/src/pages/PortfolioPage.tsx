import { useContext } from "react";
import { Container } from "../components/common/Container";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import ShowcaseCard from "../components/ShowcaseCard";
import { EmptyPortfolio } from "../components/FeaturedProjects";
import { categoryLabels, groupShowcases } from "../utils/showcase";
import { featuredStyles, portfolioStyles as s } from "../styles/styles";

const PortfolioPage = () => {
  const { showcases, showcaseIsLoading, initError } = useContext(ShowcaseContext)!;
  const groups = groupShowcases(showcases);

  return (
    <Container>
      <header className={s.header}>
        <p className={s.label}>Portefølje</p>
        <h1 className={s.title}>Prosjekter</h1>
        <p className={s.intro}>
          Sideprosjekter og eksamensoppgaver fra studiet, gruppert etter type.
        </p>
      </header>

      {showcaseIsLoading && <p className={s.status}>Laster …</p>}
      {initError && <p className={s.status}>{initError}</p>}
      {!showcaseIsLoading && !initError && groups.length === 0 && (
        <section className={s.group}>
          <EmptyPortfolio />
        </section>
      )}

      {groups.map(({ category, showcases: items }) => (
        <section
          key={category}
          aria-labelledby={`kategori-${category}`}
          className={s.group}
        >
          <h2 id={`kategori-${category}`} className={s.groupTitle}>
            {categoryLabels[category].plural}
            <span className={s.count}>{items.length}</span>
          </h2>
          <div className={featuredStyles.grid}>
            {items.map((showcase) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} />
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
};

export default PortfolioPage;
