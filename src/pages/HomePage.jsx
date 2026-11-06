import { Link } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { featured } from "../data/menu.js";
import { rewardsCopy, storyLead } from "../data/content.js";
import { ReviewCards } from "../components/ReviewCards.jsx";
import {
  ADDRESS_LINES,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  REWARDS_URL,
} from "../data/site.js";

const quietClass =
  "inline-flex items-center justify-center rounded-md border-2 border-ink bg-transparent px-4 py-3 text-base font-bold text-ink no-underline hover:bg-ink hover:text-cream";

export function HomePage() {
  return (
    <>
      <Hero />

      <section aria-labelledby="preview-heading" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="preview-heading" className="font-display text-4xl font-semibold tracking-tight">
              From the menu
            </h2>
            <p className="mt-2 max-w-xl">A few sandwiches from the published menu. Prices may vary.</p>
          </div>
          <Link to="/menu" className={quietClass}>
            View Full Menu
          </Link>
        </div>
        <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
          {featured.map((item) => (
            <li key={item.name} className="bg-paper px-5 py-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
                <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                <p className="font-bold tabular-nums">{item.price}</p>
              </div>
              <p className="mt-2 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="story-heading" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-10">
          <img
            src="/images/interior.jpg"
            alt="Floral ceiling and window seats inside 953 Deli."
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <h2 id="story-heading" className="font-display text-4xl font-semibold tracking-tight">
              The deli
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{storyLead}</p>
            <Link to="/story" className={`${quietClass} mt-6`}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <ReviewCards />

      <section aria-labelledby="rewards-heading" className="grid border-t border-line lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-gold px-4 py-8 sm:px-10 sm:py-10">
          <h2 id="rewards-heading" className="font-display text-4xl font-semibold tracking-tight">
            953 Deli Rewards
          </h2>
          <p className="mt-3 max-w-md text-lg leading-relaxed">{rewardsCopy}</p>
          <a
            href={REWARDS_URL}
            className="mt-6 inline-flex w-fit items-center rounded-md bg-ink px-4 py-3 font-bold text-cream no-underline hover:bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join now
          </a>
        </div>
        <img
          src="/images/rewards-sandwich.jpg"
          alt="A sandwich cut in half and wrapped in paper, sitting on newspaper."
          className="h-56 w-full object-cover sm:h-72 lg:h-full lg:max-h-80"
        />
      </section>

      <section id="visit" aria-labelledby="visit-heading" className="scroll-mt-28 border-t border-line">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2">
          <div>
            <h2 id="visit-heading" className="font-display text-4xl font-semibold tracking-tight">
              Visit Us
            </h2>
            <address className="mt-4 text-2xl leading-snug not-italic">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3 max-w-md">The suite number printed on the current ordering site needs confirmation.</p>
            <p className="mt-4 text-xl font-bold">
              <a href={`tel:${PHONE_TEL}`} className="text-ink">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>Call to confirm hours.</p>
            <div className="mt-6">
              <a href={DIRECTIONS_URL} className={quietClass} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </div>
          </div>
          <iframe
            title="Map of 953 Deli on West Walnut Street in Allentown"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-72 w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
