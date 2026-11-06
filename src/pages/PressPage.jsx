import { Link } from "react-router-dom";
import { MORNING_CALL_URL, THREADS_URL } from "../data/site.js";

export function PressPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Press & Accolades</h1>
      <p className="mt-4 text-xl leading-relaxed">
        A Latin-owned New York-style deli on Walnut Street, catching attention in Allentown and beyond.
      </p>
      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-display text-3xl font-semibold">Threads: big backing at 953 Deli</h2>
        <blockquote className="mt-4 text-xl leading-snug">
          “We ain’t snacking, we big backing at 953 Deli in Allentown, Pennsylvania.”
        </blockquote>
        <p className="mt-2">@nashanclay on Threads</p>
        <a href={THREADS_URL} className="mt-4 inline-block font-bold text-ink" target="_blank" rel="noopener noreferrer">
          Read the Threads post
        </a>
      </section>
      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-display text-3xl font-semibold">The Morning Call: doors open on Walnut Street</h2>
        <p className="mt-4 text-lg leading-relaxed">
          The Morning Call noted 953 Deli’s opening at 953 W. Walnut St. in Allentown. The button on the current site
          goes to the reporter’s author page, not a single article.
        </p>
        <a href={MORNING_CALL_URL} className="mt-4 inline-block font-bold text-ink" target="_blank" rel="noopener noreferrer">
          Read The Morning Call
        </a>
      </section>
      <p className="mt-12">
        <Link to="/menu" className="font-bold text-ink">
          View the menu
        </Link>
      </p>
    </article>
  );
}
