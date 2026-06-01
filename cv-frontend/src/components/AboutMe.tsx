import type { FC } from "react";
import { pageStyles } from "../styles/styles";

const AboutMe: FC = () => {
  return (
    <section className="px-4 pt-16 pb-16">
      <h1 className={`mb-6 ${pageStyles.title}`}>
        Hei!
      </h1>

      <hr className={`mb-8 ${pageStyles.divider}`} />

      <div className={`text-center space-y-6 ${pageStyles.bodyText} text-xl`}>
        <p>
          Mitt navn er Marius Kristensen, en nystartet utvikler og tidligere
          kundebehandler med bakgrunn i salg og relasjonsbygging.
        </p>

        <p>
          I 2024 tok jeg avgjørelsen å skifte karriere fra salg til IT. Jeg har
          vært datainteressert hele livet, og ønsket å arbeide med teknologi
          fremfor telefon.
        </p>

        <p>
          Kommunikasjonsferdighetene jeg har tilnærmet meg som verktøyselger og
          assisterende teamleder er en av mine styrker som utvikler. Det hjelper
          meg å forstå behov, bidra til en hyggelig intern kultur og formidle
          løsninger.
        </p>

        <p>
          Denne siden fungerer som en CV og showcase av mine side-prosjekter.
        </p>
      </div>

      <hr className={`mt-10 ${pageStyles.divider}`} />
    </section>
  );
};

export default AboutMe;
