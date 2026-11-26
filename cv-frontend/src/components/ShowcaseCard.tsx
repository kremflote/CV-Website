import type { FC } from "react";
import { Link } from "react-router-dom";
import type { IShowcase } from "../interfaces/IShowcase";
import {
  categoryLabels,
  getShowcaseCategory,
  getShowcaseGrade,
  getThumbnailSrc,
  showcasePath,
} from "../utils/showcase";
import { cardStyles as s } from "../styles/styles";

/** Project card: 16:10 thumbnail, category, title, one-line description, tech chips, grade. */
const ShowcaseCard: FC<{ showcase: IShowcase }> = ({ showcase }) => {
  const grade = getShowcaseGrade(showcase);
  const category = categoryLabels[getShowcaseCategory(showcase)].singular;

  return (
    <article className={s.card}>
      <div className={s.imageFrame}>
        {showcase.image_Thumbnail ? (
          <img src={getThumbnailSrc(showcase)} alt="" className={s.image} loading="lazy" />
        ) : (
          <span className={s.imagePlaceholder} aria-hidden="true">
            {showcase.title}
          </span>
        )}
        {grade && <span className={s.grade}>Karakter {grade}</span>}
      </div>
      <div className={s.body}>
        <p className={s.category}>{category}</p>
        <h3 className={s.title}>
          {/* The link covers the whole card; see cardStyles.link. */}
          <Link to={showcasePath(showcase)} className={s.link}>
            {showcase.title}
          </Link>
        </h3>
        <p className={s.description}>{showcase.description}</p>
        {showcase.tech && showcase.tech.length > 0 && (
          <ul className={s.chips} aria-label="Teknologi">
            {showcase.tech.map((tech) => (
              <li key={tech} className={s.chip}>
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ShowcaseCard;
