import type { FC } from "react";
import { homeStyles } from "../styles/styles";

const RotatingHeroImage: FC = () => {
  return (
    <div className={homeStyles.sketchPhoto}>
      <div className={homeStyles.sketchPhotoFrame}>
        <img
          src="/images/me/me8-edited.jpg"
          alt="Marius Kristensen og samboer"
          className={`${homeStyles.sketchPhotoImage} opacity-100`}
        />
      </div>
      <p className={homeStyles.sketchPhotoCaption}>
        Avbildet: Meg &amp; og samboer
      </p>
    </div>
  );
};

export default RotatingHeroImage;
