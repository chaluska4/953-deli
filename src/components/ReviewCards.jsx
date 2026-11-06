import { useEffect, useRef, useState } from "react";
import { reviews } from "../data/content.js";
import { GOOGLE_REVIEWS_URL } from "../data/site.js";

function ReviewCard({ review }) {
  const [open, setOpen] = useState(false);
  const long = review.quote.length > 160;

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm">
      <p className={open ? "leading-relaxed" : "line-clamp-4 leading-relaxed"}>{review.quote}</p>
      <div className="mt-2 h-8">
        {long ? (
          <button
            type="button"
            className="font-bold text-ink underline decoration-gold decoration-2 underline-offset-4"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Show less" : "Show more"}
          </button>
        ) : null}
      </div>
      <p className="mt-auto text-lg tracking-wide" aria-label={`Rated ${review.stars} out of 5 stars`}>
        <span aria-hidden="true">{"★".repeat(review.stars)}</span>
      </p>
      <p className="mt-2 font-bold">{review.name}</p>
    </article>
  );
}

export function ReviewCards() {
  const scroller = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function syncEnds() {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    syncEnds();
    window.addEventListener("resize", syncEnds);
    return () => window.removeEventListener("resize", syncEnds);
  }, []);

  function move(direction) {
    const el = scroller.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <section aria-labelledby="reviews-heading" className="overflow-x-clip border-t border-line bg-[#e7dccb]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="reviews-heading" className="font-display text-4xl font-semibold tracking-tight">
              Guest notes
            </h2>
            <p className="mt-2">
              A fixed selection from the current 953 Deli website. Each note is shown there with five stars. This is not
              a live Google feed.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-white text-xl font-bold disabled:opacity-40"
              aria-label="Previous guest notes"
              disabled={atStart}
              onClick={() => move(-1)}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-white text-xl font-bold disabled:opacity-40"
              aria-label="Next guest notes"
              disabled={atEnd}
              onClick={() => move(1)}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
        <ul
          ref={scroller}
          onScroll={syncEnds}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <li key={review.name} className="w-[82%] shrink-0 snap-start min-[900px]:w-[calc((100%-2rem)/3)]">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
        <a
          href={GOOGLE_REVIEWS_URL}
          className="mt-5 inline-block font-bold text-ink underline decoration-gold decoration-2 underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read reviews on Google
        </a>
      </div>
    </section>
  );
}
