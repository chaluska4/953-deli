# 953 Deli transaction systems

Inspected 4 Nov 2026 in a browser. No account was opened, no form was submitted, no order was placed, and no payment was started.

The public site is `https://a972b069bad5aea6e0304a55b1b23cdcce7e717e.web.ordersave.com/`. Its canonical URL is `https://ordersave.com/partnersite/EGCEtl9JToRj/`. The footer says “Powered by Owner” and links to `https://owner.com/?utm_source=customer-website&utm_medium=powered-by&utm_campaign=EGCEtl9JToRj`. The HTML includes `owner-brand-id` and `brand-id` `EGCEtl9JToRj`.

Same domain does not mean separate products. Order Online, Catering, Gift Cards, balance check, and Rewards are pages of this one Owner-hosted site. Card entry, where it appears, is a Stripe frame inside that page.

## Feature table

| Feature | Provider/platform | Evidence | Integration options | Required owner access | Unknowns |
| --- | --- | --- | --- | --- | --- |
| Order Online | Owner.com, hosted on `*.web.ordersave.com`. Checkout payment provider was not reached. | `/menu?dialogState=orderDetails` stays on the Owner site. The dialog offers Pickup, “Delivery unavailable,” and “Pickup time: ASAP.” The page calls same-origin `/api/olympus/carts/v3` and `/api/olympus/carts/v4/{location}/available-times`, plus Google Maps JavaScript. A script named `agenticPosOverrides` loads. No Stripe iframe appears on this step. | Owner’s own site says online orders can be routed into an existing POS and that the restaurant site can be the ordering channel. No public menu/order API was found on this site. | Owner dashboard login for the brand `EGCEtl9JToRj`, plus whoever manages the domain DNS if a custom domain is attached. | Which POS, if any, receives these orders. Whether the later pay step uses the same Stripe account as gift cards. Taxes, modifiers, and the real prep-time rules behind “ASAP.” |
| Catering | Owner.com form on the same site. Not a card checkout. | `/catering` is an Owner page (`Form.astro`) with name, email, phone, event date and time, guest ranges 1–10 through 50+, and “Submit Catering Request.” FAQ answers on that page: 24 hours’ notice; dietary needs by phone; plates, napkins, and cutlery are not included. No Stripe frame loaded. | Keep linking to this form. Rebuilding it would need Owner’s request endpoint, which is not documented for outside developers. | Owner dashboard, to read requests. | Where submitted requests arrive (email, dashboard, or POS). |
| Gift cards, purchase | Owner.com page. Card fields are Stripe Payment Element, embedded, live mode. | `/gift-cards` is an Owner page. Amounts are $10, $25, $50, $75, $100, and custom. Copy says the cards are for online pickup or delivery orders only. The page calls `/api/olympus/gift-cards/v1/estimate-price` and loads `https://js.stripe.com/clover/stripe.js` into `#gc-payment-element`. The word “clover” here is Stripe’s API version (`2025-09-30.clover`), not evidence of a Clover POS. | Leave purchase on this page. Stripe.js is Owner’s integration, not a key this concept can use to charge cards. | Owner dashboard for gift-card reports. Stripe access only if Owner has connected the restaurant’s own Stripe account; that was not visible. | The fee returned by `estimate-price` was not recorded, because that would mean driving the purchase form. Whether balances also work in the store. |
| Gift cards, balance | Owner.com page on the same site. | `/gift-cards/check` has “Check your balance,” a card-number field, and a Check Balance button. No number was entered. | Link to this page. There is no documented public balance API for a custom site. | A real card number, which only the owner or a guest should enter. | Whether the empty page’s “$0.00” is a placeholder or a lookup. It was not tested. |
| Rewards | Owner.com account login on the same site. | `/login` says “Sign in or create account,” asks for a mobile number, and lists points toward free food, deals, and saved checkout details. It uses `/api/olympus/auth/v1/mercury/login` and `mercury/session`. No separate rewards vendor appeared. | Link to this login. Points cannot be read or redeemed from this concept without Owner credentials. | Owner dashboard for the loyalty program. A guest phone number only for a real sign-in, which was not done. | Point value, expiration, and whether rewards are stored only in Owner or also in a POS. |

## What is not evidence of a POS

Owner’s public POS page says orders can go to Toast, Square, Clover, Lightspeed, and other systems, with a native Clover integration and a tablet or printer as a fallback ([owner.com/pos-integrations](https://www.owner.com/pos-integrations)). That is the product’s capability. This restaurant’s pages do not name a POS. The `agenticPosOverrides` file does not name Toast, Square, Clover, Otter, or Lightspeed. So a POS connection is possible and unproven.

## Domain, embeds, and APIs

Observed hosting is Owner’s subdomain, not a domain the deli controls. Owner’s marketing describes a restaurant website and on-domain ordering as part of the subscription. Third-party comparisons repeat that claim. An Owner help article that would show the exact domain steps did not load, so the setup steps are not copied here.

No public developer API, SDK, or webhook docs were found for this brand. The `/api/olympus/...` routes are the site’s own private API. They are not something to build a checkout against.

Stripe is embedded only on the gift-card purchase page that was opened. Card numbers stay in Stripe’s frame. This concept does not collect them.

## Recommendation

Keep Owner as the ordering, payment, gift-card, catering, and rewards system. Point the deli’s own domain at Owner if the dashboard supports a custom domain, or keep this design as the marketing site and leave the buttons on the current Owner URLs until that domain is attached.

That is the smallest path that keeps modifiers, taxes, pickup times, gift-card balances, and rewards where they already work. Owner supplies the checkout, the Stripe card form, the gift-card ledger, the rewards login, and, if it is already configured, the POS route. The work on a custom domain is DNS plus an Owner setting, not a new checkout.

Switching to another ordering provider means rebuilding the menu and modifiers, re-entering tax and pickup rules, reconnecting the POS, and abandoning the current gift-card balances and reward points unless that vendor imports them. Nothing observed shows an export.

A custom interface on documented provider APIs is not available. Owner does not publish an API for this site, and using the private `/api/olympus` routes would be unsupported and would break without notice. A custom card form is out of scope. Do not build one.

## What this concept does

The local site keeps the existing Order Online, Catering, Gift Cards, balance check, and Rewards links. No new payment screen was added. Attaching a domain, confirming the POS, and any Google Places API key for review text are owner decisions.
