import { useState, type FC, type KeyboardEvent, type SyntheticEvent } from "react";
import { galleryStyles as s } from "../styles/styles";
import { imageSrc } from "../utils/showcase";

interface GalleryProps {
  images: string[];
  title: string;
  /** Busts cached screenshots when they are replaced. */
  version: string | number;
}

/**
 * One large image (16:10, cropped from the top), thumbnails below and an
 * "Bilde n av m" counter. Left/right arrow keys move between thumbnails.
 */
const Gallery: FC<GalleryProps> = ({ images, title, version }) => {
  const [index, setIndex] = useState(0);
  const [portrait, setPortrait] = useState<Record<number, boolean>>({});

  if (images.length === 0) return null;

  const current = Math.min(index, images.length - 1);
  const src = (image: string, i: number) => imageSrc(image, `${version}-${i}`);
  const go = (next: number) => setIndex((next + images.length) % images.length);

  // Portrait phone screenshots would lose most of their content to a 16:10 crop; show them whole.
  const onLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setPortrait((known) => ({ ...known, [current]: naturalHeight > naturalWidth }));
  };

  const onThumbKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (current + (event.key === "ArrowRight" ? 1 : -1) + images.length) % images.length;
    setIndex(next);
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
    buttons[next]?.focus();
  };

  return (
    <section className={s.gallery} aria-label="Bilder">
      <div className={s.frame}>
        <img
          src={src(images[current], current)}
          alt={`${title}, bilde ${current + 1} av ${images.length}`}
          onLoad={onLoad}
          className={`${s.image} ${portrait[current] ? s.imageContain : s.imageCover}`}
        />
      </div>

      {images.length > 1 && (
        <div className={s.controls}>
          <div className={s.thumbs} onKeyDown={onThumbKeyDown}>
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Vis bilde ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                tabIndex={i === current ? 0 : -1}
                className={`${s.thumb} ${i === current ? s.thumbActive : s.thumbIdle}`}
              >
                <img src={src(image, i)} alt="" className={s.thumbImage} loading="lazy" />
              </button>
            ))}
          </div>
          <div className={s.counterRow}>
            <button type="button" onClick={() => go(current - 1)} className={s.arrow} aria-label="Forrige bilde">
              ←
            </button>
            <p className={s.counter} aria-live="polite">
              Bilde {current + 1} av {images.length}
            </p>
            <button type="button" onClick={() => go(current + 1)} className={s.arrow} aria-label="Neste bilde">
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
