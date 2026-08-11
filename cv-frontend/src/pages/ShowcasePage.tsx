import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import { glassStyles, pageStyles, showcaseStyles } from "../styles/styles";

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
  const usesMobileImageFrame =
    currentImage?.toLowerCase().startsWith("animedatabase-") ?? false;
  const usesContainedImageFrame =
    currentImage?.toLowerCase().startsWith("sportsworld-") ||
    currentImage?.toLowerCase().startsWith("catfish-") ||
    currentImage?.toLowerCase().startsWith("pgr107-python-exam-2026-") ||
    false;

  const imageContainerClasses = usesMobileImageFrame
    ? "relative mx-auto max-w-[390px]"
    : "relative";
  const imageClasses = usesMobileImageFrame
    ? showcaseStyles.detailImageMobile
    : usesContainedImageFrame
      ? showcaseStyles.detailImageContained
      : showcaseStyles.detailImageCover;
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
      <section className="mb-24 px-5 py-14">
        <div className={`grid gap-10 px-10 py-12 ${glassStyles.panel}`}>
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

          <div className={`px-8 py-8 ${glassStyles.softPanel}`}>
            <h1 className={glassStyles.title}>{showcase.title}</h1>
            <p className={`mt-8 max-w-4xl ${showcaseStyles.description}`}>
              {showcase.description}
            </p>
            {showcase.details && (
              <div className={showcaseStyles.detailTextStack}>
                {showcase.details.map((section) => (
                  <section
                    key={section.title}
                    className={showcaseStyles.detailTextSection}
                  >
                    <h2 className={showcaseStyles.detailTextTitle}>
                      {section.title}
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
