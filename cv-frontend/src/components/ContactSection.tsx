import { useEffect, useRef, useState } from "react";
import { Container } from "./common/Container";
import { ExternalIcon } from "./TimelineParts";
import { contactStyles as s } from "../styles/styles";

const email = "work@mariuskristensen.no";
const githubUrl = "https://github.com/kremflote";

const CopyIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 5V3.5A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5H5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/** Full-width contact block at the bottom of the home page. */
const ContactSection = () => {
  const [status, setStatus] = useState("");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("E-postadressen er kopiert.");
    } catch {
      // Clipboard access can be refused; fall back to the mail app.
      window.location.href = `mailto:${email}`;
      return;
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className={s.section}>
      <Container className={s.inner}>
        <h2 id="kontakt-title" className={s.headline}>
          Kanskje du er min neste arbeidsplass?
        </h2>
        <div className={s.actions}>
          <button type="button" onClick={copyEmail} className={s.primary}>
            {email} <CopyIcon />
            <span className="sr-only"> – kopier e-postadressen</span>
          </button>
          <a href={githubUrl} target="_blank" rel="noreferrer" className={s.outline}>
            GitHub <ExternalIcon />
          </a>
        </div>
        <p className={s.status} aria-live="polite">
          {status}
        </p>
      </Container>
    </section>
  );
};

export default ContactSection;
