import { useState } from "react";
import { WideLayout } from "../components/common/WideLayout";
import { contactStyles } from "../styles/styles";

const email = "work@mariuskristensen.no";
const githubUrl = "https://github.com/kremflote";

const KontaktPage = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setHasCopiedEmail(true);
  };

  return (
    <WideLayout>
      <section className={contactStyles.section}>
        <div className={contactStyles.cardGrid}>
          <div className={contactStyles.card}>
            <i className={contactStyles.iconEnvelope}></i>
            <h2 className={contactStyles.title}>E-post</h2>
            <p className={contactStyles.body}>Ta gjerne kontakt.</p>

            <button
              type="button"
              onClick={copyEmail}
              className={`${contactStyles.action} ${contactStyles.button}`}
            >
              {email}
            </button>

            {hasCopiedEmail && (
              <p className={contactStyles.copiedText}>
                E-post kopiert til utklippstavlen.
              </p>
            )}
          </div>

          <div className={contactStyles.card}>
            <i className={contactStyles.iconGithub}></i>
            <h2 className={contactStyles.title}>GitHub</h2>
            <p className={contactStyles.body}>Se prosjekter og kode.</p>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`${contactStyles.action} ${contactStyles.button}`}
            >
              github.com/kremflote
            </a>
          </div>
        </div>
      </section>
    </WideLayout>
  );
};

export default KontaktPage;
