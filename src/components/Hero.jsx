import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ORDER_URL } from "../data/site.js";

const orderClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-4 py-3 text-base font-bold text-ink no-underline hover:bg-[#efc75d]";
const quietClass =
  "inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-4 py-3 text-base font-bold text-white no-underline hover:bg-white hover:text-ink";

export function Hero() {
  const videoRef = useRef(null);
  const [reduced, setReduced] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return undefined;
    const start = () => {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });
    return () => video.removeEventListener("loadeddata", start);
  }, [reduced]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="video-hero relative overflow-hidden bg-ink text-white" aria-label="Introduction">
      {reduced ? (
        <img
          src="/images/hero.jpg"
          alt="Chopped beef and melted cheese on a roll, set on newspaper."
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
          poster="/images/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pt-8 pb-6 sm:px-8 sm:pb-10 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-[0.9] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            953 Deli
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-snug text-white sm:text-2xl">
            New York-style cheesesteaks and made-to-order sandwiches on West Walnut Street.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/menu" className={quietClass}>
              View Menu
            </Link>
            <a href={ORDER_URL} className={orderClass} target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </div>
        </div>
      </div>
      {reduced ? null : (
        <button
          type="button"
          className="absolute top-4 right-4 z-20 rounded-md bg-cream px-3 py-2 text-sm font-bold text-ink"
          aria-pressed={playing}
          onClick={togglePlayback}
        >
          {playing ? "Pause video" : "Play video"}
        </button>
      )}
    </section>
  );
}
