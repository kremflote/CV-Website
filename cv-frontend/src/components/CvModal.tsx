import type { FC } from "react";
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
    >
      <div className={cvModalStyles.panel}>
        <button
          type="button"
          onClick={onClose}
          className={cvModalStyles.closeButton}
          aria-label="Lukk CV"
        >
          X
        </button>
        <iframe src="/api/Cv" className={cvModalStyles.frame} title="CV PDF" />
      </div>
    </div>
  );
};

export default CvModal;
