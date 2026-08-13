import type { FC } from "react";
import SkillSection from "./SkillSection";
import { cvModalStyles } from "../styles/styles";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CvModal: FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cvModalStyles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="CV PDF"
      onClick={onClose}
    >
      <div
        className={cvModalStyles.panel}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={cvModalStyles.closeButton}
          aria-label="Lukk CV"
        >
          X
        </button>
        <div className={cvModalStyles.contentGrid}>
          <iframe
            src="/images/cv.pdf"
            className={cvModalStyles.frame}
            title="CV PDF"
          />
          <section className={cvModalStyles.skillPane}>
            <SkillSection onInternalLinkClick={onClose} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
