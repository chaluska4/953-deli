import { categories } from "../data/menu.js";
import { ORDER_URL } from "../data/site.js";

const orderClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-4 py-3 text-base font-bold text-ink no-underline hover:bg-[#efc75d]";

function ItemRow({ item }) {
  return (
    <li className="border-b border-line py-4">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        {item.price ? <p className="font-bold tabular-nums">{item.price}</p> : <p className="text-sm font-bold">Confirm price</p>}
      </div>
      {item.description ? <p className="mt-1 max-w-[68ch] leading-relaxed">{item.description}</p> : null}
    </li>
  );
}

export function MenuPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Menu</h1>
      <p className="mt-3 max-w-2xl text-lg">
        Names and prices from the current online menu. Prices may vary. Pickup and payment stay on the existing order
        page.
      </p>
      <nav aria-label="Menu categories" className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="font-bold text-ink underline decoration-gold decoration-2 underline-offset-[6px]"
          >
            {category.name}
          </a>
        ))}
      </nav>
      <div className="mt-10 space-y-12">
        {categories.map((category) => (
          <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-28">
            <h2 id={`${category.id}-heading`} className="font-display text-3xl font-semibold">
              {category.name}
            </h2>
            {category.id === "fries" ? (
              <p className="mt-2 max-w-2xl">
                On the ordering site this group is named “Menu.” Wing Dings is listed as 6 or 12 pieces at the same
                price, so that price is left off until the shop confirms it.
              </p>
            ) : null}
            <ul className="mt-2">
              {category.items.map((item) => (
                <ItemRow key={`${category.id}-${item.name}`} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <a href={ORDER_URL} className={`${orderClass} mt-10`} target="_blank" rel="noopener noreferrer">
        Order Online
      </a>
    </article>
  );
}
