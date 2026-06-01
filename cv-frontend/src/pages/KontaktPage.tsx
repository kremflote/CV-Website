import { useState } from "react";
import { WideLayout } from "../components/common/WideLayout";
import { contactStyles, pageStyles } from "../styles/styles";

const email = "work@mariuskristensen.no";

const KontaktPage = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setHasCopiedEmail(true);
  };

  return (
    <WideLayout>
      <section className="mx-auto w-full max-w-2xl px-6 pt-16 pb-24 text-center">
        <h1 className={pageStyles.titleLeft}>Kontakt</h1>
        <hr className={`mt-4 mb-8 ${pageStyles.divider}`} />

        <div className={`space-y-4 text-lg ${pageStyles.bodyText}`}>
          <p>Ta gjerne kontakt.</p>
          <button
            onClick={copyEmail}
            className={`cursor-pointer rounded border px-5 py-3 font-semibold transition-colors ${contactStyles.button}`}
          >
            {email}
          </button>
          {hasCopiedEmail && (
            <p className={`text-sm font-semibold ${contactStyles.copiedText}`}>
              E-post kopiert til utklippstavlen.
            </p>
          )}
        </div>
      </section>
    </WideLayout>
  );
};

export default KontaktPage;
