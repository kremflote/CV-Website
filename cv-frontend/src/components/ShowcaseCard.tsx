import type { IShowcase } from "../interfaces/IShowcase";
import { useNavigate } from "react-router-dom";
import { showcaseStyles } from "../styles/styles";

const thumbnailVersion = "20260529";

const ShowcaseCard = ({ id, title, image_Thumbnail }: IShowcase) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/showcase/${id}`)}
      className={showcaseStyles.card}
    >
      <img
        src={`/images/${image_Thumbnail}?v=${id}-${thumbnailVersion}`}
        alt={title}
        className={showcaseStyles.cardImage}
      />
      <div className={showcaseStyles.cardOverlay}>
        <span className={showcaseStyles.cardTitle}>{title}</span>
      </div>
    </article>
  );
};

export default ShowcaseCard;
