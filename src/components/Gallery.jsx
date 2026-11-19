import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

// Galerie: grande image, miniatures, glisser au doigt, flèches clavier, plein écran.
const Gallery = ({ images, name }) => {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [full, setFull] = useState(false);
  const startX = useRef(null);
  const n = images.length;

  const go = useCallback((d) => setI((cur) => (cur + d + n) % n), [n]);

  useEffect(() => setI(0), [images]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Escape") setFull(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (!full) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [full]);

  // Précharge l'image suivante
  useEffect(() => {
    if (n > 1) new Image().src = images[(i + 1) % n];
  }, [i, images, n]);

  const onDown = (e) => (startX.current = e.clientX);
  const onUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  if (!n) return null;

  return (
    <div className="gallery">
      <div className="g-stage" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => (startX.current = null)}>
        <button type="button" className="g-img-btn" onClick={() => setFull(true)} aria-label={t.project.open}>
          <img key={images[i]} src={images[i]} alt={`${name} · ${t.project.image(i + 1, n)}`} draggable="false" />
        </button>
        {n > 1 && (
          <>
            <button type="button" className="g-nav g-prev" onClick={() => go(-1)} aria-label={t.project.prev}>
              <Chevron dir="left" />
            </button>
            <button type="button" className="g-nav g-next" onClick={() => go(1)} aria-label={t.project.next}>
              <Chevron dir="right" />
            </button>
            <span className="g-count">
              {i + 1} / {n}
            </span>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="g-thumbs">
          {images.map((src, k) => (
            <button
              type="button"
              key={src}
              className={k === i ? "on" : ""}
              onClick={() => setI(k)}
              aria-label={t.project.image(k + 1, n)}
              aria-current={k === i}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}

      {full && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setFull(false)}>
          <button type="button" className="lb-close" onClick={() => setFull(false)} aria-label={t.project.close}>
            ×
          </button>
          <img
            src={images[i]}
            alt={`${name} · ${t.project.image(i + 1, n)}`}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onDown}
            onPointerUp={onUp}
          />
          {n > 1 && (
            <>
              <button type="button" className="g-nav g-prev" onClick={(e) => (e.stopPropagation(), go(-1))} aria-label={t.project.prev}>
                <Chevron dir="left" />
              </button>
              <button type="button" className="g-nav g-next" onClick={(e) => (e.stopPropagation(), go(1))} aria-label={t.project.next}>
                <Chevron dir="right" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
