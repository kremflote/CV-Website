import type { IShowcase } from "../interfaces/IShowcase";
import { useNavigate } from "react-router-dom";
import { showcaseStyles } from "../styles/styles";

const thumbnailVersion = "20260529";

const ShowcaseCard = ({
  id,
  title,
  image_Thumbnail,
}: IShowcase) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/showcase/${id}`)}
      className={showcaseStyles.card}
    >
      <div className={showcaseStyles.cardImageFrame}>
        <img
          src={`/images/${image_Thumbnail}?v=${id}-${thumbnailVersion}`}
          alt={title}
          className={showcaseStyles.cardImage}
        />
      </div>
      <h3 className={showcaseStyles.cardTitle}>{title}</h3>
    </article>
  );
};

export default ShowcaseCard;
