import { Link } from "react-router-dom";
import { faqs, storyLead, storySections } from "../data/content.js";

export function StoryPage() {
  return (
    <article>
      <header className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="font-display text-5xl leading-none font-semibold sm:text-6xl">
            New York deli soul in the heart of Pennsylvania
          </h1>
          <p className="mt-6 text-xl leading-relaxed">{storyLead}</p>
        </div>
      </header>
      <div>
        {storySections.map((section, index) => (
          <section key={section.title} className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={section.image} alt={section.alt} className="h-72 w-full object-cover lg:h-full lg:min-h-96" />
            <div className="flex flex-col justify-center px-4 py-12 sm:px-10">
              <h2 className="font-display text-4xl font-semibold">{section.title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed">{section.body}</p>
            </div>
          </section>
        ))}
      </div>
      <section aria-labelledby="questions-heading" className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 id="questions-heading" className="font-display text-4xl font-semibold">
          Questions
        </h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.question} className="py-4">
              <summary className="cursor-pointer text-xl font-bold">{item.question}</summary>
              <p className="mt-3 max-w-3xl leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <Link to="/menu" className="mt-8 inline-block font-bold text-ink">
          View the menu
        </Link>
      </section>
    </article>
  );
}
