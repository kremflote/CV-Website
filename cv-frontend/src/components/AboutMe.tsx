import type { FC } from "react";

const AboutMe: FC = () => {
  return (
    <section className="px-4 pt-16 pb-16">
      <h1 className="mb-6 text-center text-wood text-4xl font-semibold">
        Hei!
      </h1>

      <hr className="mb-8 border-wood" />

      <div className="text-center space-y-6 text-gray-800 text-xl">
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

      <hr className="border-wood mt-10" />
    </section>
  );
};

export default AboutMe;
