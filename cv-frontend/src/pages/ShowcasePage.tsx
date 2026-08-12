import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import { glassStyles, pageStyles, showcaseStyles } from "../styles/styles";
import type { IShowcase } from "../interfaces/IShowcase";

type ShowcaseDetailSection = NonNullable<IShowcase["details"]>[number];

const getOrderedDetailSections = (details: ShowcaseDetailSection[]) =>
  [...details].sort((first, second) => {
    const firstIsGrade = first.title.toLowerCase().startsWith("karakter");
    const secondIsGrade = second.title.toLowerCase().startsWith("karakter");

    if (firstIsGrade === secondIsGrade) return 0;
    return firstIsGrade ? -1 : 1;
  });

const renderDetailTitle = (title: string) => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("karakter a")) {
    return (
      <>
        Karakter <span className={showcaseStyles.detailGradeA}>A</span>
      </>
    );
  }

  if (normalizedTitle.includes("karakter b")) {
    return (
      <>
        Karakter <span className={showcaseStyles.detailGradeB}>B</span>
      </>
    );
  }

  return title;
};

const ShowcasePage = () => {
  const { id } = useParams<{ id: string }>();
  const { showcases } = useContext(ShowcaseContext)!;
  const [showcaseImages, setShowcaseImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showcase = useMemo(
    () => showcases.find((s) => s.id === Number(id)) ?? null,
    [id, showcases],
  );

  useEffect(() => {
    let isActive = true;

    const loadShowcaseImages = () => {
      if (!showcase) return;

      const images =
        showcase.images && showcase.images.length > 0
          ? showcase.images
          : [showcase.image].filter(Boolean);

      if (isActive) {
        setShowcaseImages(images);
        setCurrentImageIndex(0);
      }
    };

    loadShowcaseImages();

    return () => {
      isActive = false;
    };
  }, [showcase]);

  const currentImage = showcaseImages[currentImageIndex];
  const hasImages = showcaseImages.length > 0;
  const hasMultipleImages = showcaseImages.length > 1;
  const imageContainerClasses = "relative min-w-0 overflow-hidden";
  const imageClasses = showcaseStyles.detailImageContained;
  const showPreviousImage = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? showcaseImages.length - 1 : index - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((index) =>
      index === showcaseImages.length - 1 ? 0 : index + 1,
    );
  };

  if (!showcase)
    return (
      <WideLayout>
        <p className={`pt-10 ${pageStyles.loadingText}`}>Loading...</p>
      </WideLayout>
    );

  return (
    <WideLayout>
      <section className="mb-24 min-w-0 py-10 sm:px-5 sm:py-14">
        <div
          className={`grid min-w-0 gap-8 overflow-hidden px-4 py-6 sm:gap-10 sm:px-10 sm:py-12 ${glassStyles.panel}`}
        >
          {hasImages && (
            <div className={`${imageContainerClasses} ${glassStyles.softPanel}`}>
              <img
                src={`/images/${currentImage}?v=${showcase.id}-${currentImageIndex}`}
                alt={showcase.title}
                className={imageClasses}
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Forrige bilde"
                    className={`left-4 ${showcaseStyles.carouselButtonBase} ${showcaseStyles.carouselButton}`}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Neste bilde"
                    className={`right-4 ${showcaseStyles.carouselButtonBase} ${showcaseStyles.carouselButton}`}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>
          )}

          <div
            className={`min-w-0 overflow-hidden px-4 py-6 sm:px-8 sm:py-8 ${glassStyles.softPanel}`}
          >
            <h1 className={glassStyles.title}>{showcase.title}</h1>
            <p className={`mt-8 max-w-4xl ${showcaseStyles.description}`}>
              {showcase.description}
            </p>
            {showcase.details && (
              <div className={showcaseStyles.detailTextStack}>
                {getOrderedDetailSections(showcase.details).map((section) => (
                  <section
                    key={section.title}
                    className={showcaseStyles.detailTextSection}
                  >
                    <h2 className={showcaseStyles.detailTextTitle}>
                      {renderDetailTitle(section.title)}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className={showcaseStyles.description}>
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            )}
            {showcase.gitHub_Link && (
              <a
                href={showcase.gitHub_Link}
                target="_blank"
                rel="noreferrer"
                className={`${showcaseStyles.githubLink} ${showcaseStyles.link}`}
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </section>
    </WideLayout>
  );
};

export default ShowcasePage;
