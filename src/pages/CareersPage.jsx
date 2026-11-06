import { useEffect } from "react";
import { HIRING_URL } from "../data/site.js";

const actionClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-bold text-ink no-underline hover:bg-[#efc75d]";

export function CareersPage() {
  useEffect(() => {
    document.title = "We’re Hiring | 953 Deli";
  }, []);

  return (
    <article>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2">
        <img
          src="/images/storefront.jpg"
          alt="Patio tables outside 953 Deli on West Walnut Street."
          className="aspect-[4/3] w-full rounded-lg object-cover lg:order-2"
        />
        <div>
          <h1 className="font-display text-5xl font-semibold tracking-tight">Join a growing team with a love for food</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            953 Deli is hiring in Allentown. No specific openings are listed. The application asks for your name, email,
            phone, a short note, and a PDF resume. A comment or an attachment is required.
          </p>
          <p className="mt-3 max-w-xl">
            The form lists the shop at 953 Walnut St. The suite number on that form still needs confirmation.
          </p>
          <a href={HIRING_URL} className={`${actionClass} mt-6`} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
          <p className="mt-3 text-sm">Continue to our application form.</p>
        </div>
      </div>
    </article>
  );
}
