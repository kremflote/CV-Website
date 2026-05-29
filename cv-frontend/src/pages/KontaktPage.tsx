import { useState } from "react";
import { WideLayout } from "../components/common/WideLayout";

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
        <h1 className="text-wood text-4xl font-semibold">Kontakt</h1>
        <hr className="mt-4 mb-8 border-wood" />

        <div className="space-y-4 text-lg text-gray-800">
          <p>Ta gjerne kontakt.</p>
          <button
            onClick={copyEmail}
            className="cursor-pointer rounded border border-wood px-5 py-3 font-semibold text-wood-dark transition-colors hover:bg-wood hover:text-white"
          >
            {email}
          </button>
          {hasCopiedEmail && (
            <p className="text-sm font-semibold text-wood-dark">
              E-post kopiert til utklippstavlen.
            </p>
          )}
        </div>
      </section>
    </WideLayout>
  );
};

export default KontaktPage;
