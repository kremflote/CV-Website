import type { IShowcase } from "../interfaces/IShowcase";
import { useNavigate } from "react-router-dom";
import { showcaseStyles } from "../styles/styles";

const thumbnailVersion = "20260529";

const ShowcaseCard = ({ id, title, image_Thumbnail }: IShowcase) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/showcase/${id}`)}
      className="relative group shadow-lg rounded overflow-hidden cursor-pointer"
    >
      <img
        src={`/images/${image_Thumbnail}?v=${id}-${thumbnailVersion}`}
        alt={title}
        className="h-[260px] w-full object-fill"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${showcaseStyles.cardOverlay}`}
      >
        <span className={`rounded px-4 py-2 text-xl font-semibold ${showcaseStyles.cardTitle}`}>
          {title}
        </span>
      </div>
    </article>
  );
};

export default ShowcaseCard;
