import { useEffect } from "react";
import { GIFT_BALANCE_URL, GIFTS_URL } from "../data/site.js";

const actionClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-bold text-ink no-underline hover:bg-[#efc75d]";
const quietClass =
  "inline-flex items-center justify-center rounded-md border-2 border-ink bg-transparent px-5 py-3 text-base font-bold text-ink no-underline hover:bg-ink hover:text-cream";

export function GiftCardsPage() {
  useEffect(() => {
    document.title = "Gift Cards | 953 Deli";
  }, []);

  return (
    <article className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2">
      <div
        className="relative aspect-[1.7/1] overflow-hidden rounded-2xl bg-ink text-cream shadow-md"
        aria-hidden="true"
      >
        <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-gold/90" />
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
          <p className="font-display text-4xl font-semibold tracking-tight">
            953 <span className="text-[#e23b2f]">DELI</span>
          </p>
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-gold uppercase">Gift card</p>
            <p className="mt-2 font-display text-2xl">For any occasion</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-display text-5xl font-semibold tracking-tight">Give the perfect gift for any occasion</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">
          Give the gift of a delicious meal with our restaurant gift cards. On the purchase page, these cards are for
          online pickup or delivery orders only. You can send one now or choose a later date.
        </p>
        <p className="mt-3 max-w-xl">
          That checkout lists $10, $25, $50, $75, $100, and a custom amount from $5 to $2,000.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={GIFTS_URL} className={actionClass} target="_blank" rel="noopener noreferrer">
            Buy a Gift Card
          </a>
          <a id="balance" href={GIFT_BALANCE_URL} className={quietClass} target="_blank" rel="noopener noreferrer">
            Check Balance
          </a>
        </div>
        <p className="mt-3 text-sm">Continue to our secure gift-card checkout, or to the balance check.</p>
      </div>
    </article>
  );
}
