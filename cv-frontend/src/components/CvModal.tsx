import { useEffect, useRef, type FC, type MouseEvent } from "react";
import SkillSection from "./SkillSection";
import { ExternalIcon } from "./TimelineParts";
import { cvModalStyles as s } from "../styles/styles";

const CV_PDF = "/images/cv.pdf";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none">
    <path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/**
 * The CV as PDF beside the skills explorer. Built on <dialog>, which gives
 * focus trapping, Escape to close and focus returning to the CV button.
 */
const CvModal: FC<CvModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // A click on the dialog element itself (not its content) is a click on the backdrop.
  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-labelledby="cv-modal-title"
      onClose={onClose}
      onClick={onDialogClick}
    >
      {isOpen && (
        <div className={s.panel}>
          <header className={s.header}>
            <h2 id="cv-modal-title" className={s.title}>
              CV
            </h2>
            <div className={s.headerActions}>
              <a href={CV_PDF} target="_blank" rel="noreferrer" className={s.textLink}>
                Åpne PDF <ExternalIcon />
              </a>
              <button type="button" onClick={onClose} className={s.closeButton} aria-label="Lukk CV">
                <CloseIcon />
              </button>
            </div>
          </header>
          <div className={s.content}>
            <iframe src={CV_PDF} className={s.frame} title="CV som PDF" />
            <section className={s.skillPane} aria-label="Ferdigheter">
              <SkillSection onInternalLinkClick={onClose} layout="modal" />
            </section>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default CvModal;
