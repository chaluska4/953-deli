import { useEffect } from "react";
import { CATERING_URL } from "../data/site.js";

const actionClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-bold text-ink no-underline hover:bg-[#efc75d]";

const details = [
  {
    title: "Advance notice",
    body: "The catering page asks for 24 hours’ notice.",
  },
  {
    title: "Dietary needs",
    body: "The shop says it will try to accommodate restrictions and asks you to call before ordering to talk through them.",
  },
  {
    title: "Service items",
    body: "Plates, napkins, and cutlery are not included. Call if you need something specific.",
  },
];

export function CateringPage() {
  useEffect(() => {
    document.title = "Catering | 953 Deli";
  }, []);

  return (
    <article>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2">
        <img
          src="/images/counter-spread.jpg"
          alt="Three deli sandwiches and loaded fries on newspaper, with a Dr Pepper bottle and the 953 Deli sign."
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
        <div>
          <h1 className="font-display text-5xl font-semibold tracking-tight">Catering for the table</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            Planning an event? The shop takes catering requests for Allentown. Tell them the date, how many guests, and
            what you need, and they will follow up.
          </p>
          <a href={CATERING_URL} className={`${actionClass} mt-6`} target="_blank" rel="noopener noreferrer">
            Request Catering
          </a>
          <p className="mt-3 text-sm">Continue to the catering request form.</p>
        </div>
      </div>
      <section aria-labelledby="catering-details" className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 id="catering-details" className="font-display text-3xl font-semibold">
            What the request page says
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {details.map((item) => (
              <li key={item.title} className="rounded-lg border border-line bg-cream p-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
