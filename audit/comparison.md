# 953 Deli — original vs redesign

Compared on 4 Nov 2026. Original: the live OrderSave site. Redesign at the time of this note: the local concept in `src/` before this revision.

## What the original does better

- The hero is a looping, muted, inline video (`hero.mp4` / `hero.webm`, about 3.5 MB) with several food and shop clips in one edited file. A still photo does not carry the same energy.
- Navigation actually goes somewhere. Menu, Catering, Our Story, Gift Cards, We’re Hiring, and More → Press & Accolades are all working pages. Order Online opens the live menu with the order-details dialog.
- Catering is a real request form (name, email, phone, date, guest count). Gift cards can be bought or checked (`/gift-cards` and `/gift-cards/check`). Hiring is a resume form. Rewards is a phone-number login that offers points, deals, and saved checkout details.
- Our Story and Press & Accolades have real copy: Latin-owned New York-style deli on West Walnut, plus a Threads post and a Morning Call mention.
- The homepage has photo bands, guest quotes, a rewards pitch, and three answered FAQs. The first version of the redesign dropped almost all of that.
- Photography is used large, edge to edge, instead of a small column beside a lot of empty cream.

## What the redesign does better

- Menu names and prices stay on one line on a phone. Category names wrap instead of clipping.
- There is one ordering URL, and it is the live checkout. The page does not repeat “Open now” against an all-closed hours list.
- The address is “953 W Walnut St, Allentown, PA 18102,” and the duplicated “#963” is flagged instead of printed as fact.
- Hours say “Call to confirm hours.”
- Buttons, focus rings, and the skip link are clearer. There is no sticky bar covering prices.
- Unmatched menu photos from the ordering platform are left off, so a sandwich is not shown with the wrong picture.

## Missing from the redesign

- Catering, gift cards, hiring, rewards login, press, privacy, terms, and accessibility.
- The More menu. On the original it contains only Press & Accolades.
- The hero video and poster.
- Story copy, guest quotes already published on the homepage, the rewards explanation, and the FAQ answers (meals, location, service area).
- A mobile menu that can hold the full link list. Three header links were all that fit.

## Changes this revision implements

- Desktop nav matches the original destinations. More opens Press & Accolades. Order Online stays the live order link.
- Phones get a full-screen menu with every destination and a visible Order Online button in the bar.
- Catering, gift cards (including balance check), hiring, rewards, privacy, terms, and accessibility link to the live pages. Those pages are forms or legal text, so they are not rebuilt here.
- Our Story and Press are local pages filled only with the copy and links already on the original site.
- The homepage uses the original `hero.mp4`, with the existing poster, a dark gradient, pause/play, and a still image when reduced motion is on.
- Photo bands, published quotes, rewards, and the three FAQ answers come back. The readable menu, price layout, suite warning, and “call to confirm hours” stay.
