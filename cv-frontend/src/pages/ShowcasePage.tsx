import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { WideLayout } from "../components/common/WideLayout";
import { ShowcaseContext } from "../contexts/ShowcaseProvider";
import { getShowcaseImages } from "../services/CvService";

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

    const loadShowcaseImages = async () => {
      if (!showcase) return;

      const images = await getShowcaseImages(showcase.id);

      if (isActive) {
        setShowcaseImages(images.length > 0 ? images : [showcase.image]);
        setCurrentImageIndex(0);
      }
    };

    loadShowcaseImages();

    return () => {
      isActive = false;
    };
  }, [showcase]);

  const currentImage = showcaseImages[currentImageIndex];
  const hasMultipleImages = showcaseImages.length > 1;
  const usesMobileImageFrame =
    currentImage?.toLowerCase().startsWith("animedatabase-") ?? false;
  const usesContainedImageFrame =
    currentImage?.toLowerCase().startsWith("sportsworld-") ||
    currentImage?.toLowerCase().startsWith("catfish-") ||
    false;

  const imageContainerClasses = usesMobileImageFrame
    ? "relative mx-auto max-w-[390px]"
    : usesContainedImageFrame
      ? "relative"
      : "relative";
  const imageClasses = usesMobileImageFrame
    ? "aspect-[9/16] w-full rounded object-cover object-left-top shadow-lg"
    : usesContainedImageFrame
      ? "max-h-[720px] w-full rounded object-contain shadow-lg"
    : "h-[640px] w-full rounded object-cover object-left-top shadow-lg";
  const placeholderClasses = usesMobileImageFrame
    ? "flex aspect-[9/16] w-full items-center justify-center rounded bg-marble/10 text-wood-dark shadow-lg"
    : "flex h-[640px] w-full items-center justify-center rounded bg-marble/10 text-wood-dark shadow-lg";

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
        <p className="text-center pt-10">Loading...</p>
      </WideLayout>
    );

  return (
    <WideLayout>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className={imageContainerClasses}>
          {currentImage ? (
            <img
              src={`/images/${currentImage}?v=${showcase.id}-${currentImageIndex}`}
              alt={showcase.title}
              className={imageClasses}
            />
          ) : (
            <div className={placeholderClasses}>
              Laster bilde...
            </div>
          )}

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Forrige bilde"
                className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-marble/60 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-marble"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Neste bilde"
                className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-marble/60 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-marble"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>
        <div className="mt-8">
          <h1 className="text-wood text-4xl font-semibold">{showcase.title}</h1>
          <hr className="border-wood my-4" />
          <p className="text-gray-700 leading-relaxed">
            {showcase.description}
          </p>
          {showcase.gitHub_Link && (
            <a
              href={showcase.gitHub_Link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-wood underline hover:opacity-70 transition-opacity"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </WideLayout>
  );
};

export default ShowcasePage;
