import { useContext, type FC } from "react";
import { Link } from "react-router-dom";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import ShowcaseCard from "./ShowcaseCard";
import { featuredStyles as s } from "../styles/styles";

const FEATURED_COUNT = 3;

const FeaturedProjects: FC = () => {
  const { showcases, showcaseIsLoading, initError } = useContext(ShowcaseContext)!;

  if (showcaseIsLoading) return <p className={s.status}>Laster …</p>;
  if (initError) return <p className={s.status}>{initError}</p>;
  if (showcases.length === 0) return <EmptyPortfolio />;

  // Projects marked as featured first, then fill up with the rest.
  const featured = [
    ...showcases.filter((showcase) => showcase.featured),
    ...showcases.filter((showcase) => !showcase.featured),
  ].slice(0, FEATURED_COUNT);

  return (
    <div className={s.grid}>
      {featured.map((showcase) => (
        <ShowcaseCard key={showcase.id} showcase={showcase} />
      ))}
    </div>
  );
};

/** Shown when no repository is tagged "portfolio" yet. */
export const EmptyPortfolio: FC = () => (
  <p className={s.status}>
    Ingen prosjekter å vise akkurat nå. Se{" "}
    <a href="https://github.com/kremflote" target="_blank" rel="noreferrer" className={s.inlineLink}>
      GitHub-profilen min
    </a>{" "}
    i mellomtiden.
  </p>
);

export const AllProjectsLink: FC = () => (
  <Link to="/portfolio" className={s.allLink}>
    Alle prosjekter <span aria-hidden="true">→</span>
  </Link>
);

export default FeaturedProjects;
