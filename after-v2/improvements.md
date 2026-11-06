# 953 Deli — revision after the comparison

The first concept in `after/` is unchanged. This pass is what is running at http://localhost:5173/. The comparison is in `audit/comparison.md`.

## What changed

- The hero is the shop’s own edited video, `public/videos/hero.mp4` (about 3.5 MB), reused as one file. It autoplays muted, loops, and uses `playsInline`. The poster is `public/images/hero.jpg`. A dark gradient keeps the white title and the two actions readable. Pause / Play sits on the video. If the browser prefers reduced motion, the video is not requested and the poster stays in place.
- Desktop navigation matches the original destinations: Menu, Catering, Our Story, Gift Cards, We’re Hiring, More → Press & Accolades, and Order Online. More opens on hover, click, and keyboard, and closes with Escape or a click outside.
- Below 840px the bar is the logo, Order Online, and a menu button. The menu is a full-screen dialog with every destination, including Press, Visit Us, and Rewards. Escape closes it and returns focus to the menu button.
- Catering, gift cards, gift-card balance, hiring, rewards login, privacy, terms, and accessibility go to the live OrderSave pages. Those are real forms or legal pages, so they are not rebuilt here.
- Our Story and Press & Accolades are local pages. The story uses the published narrative and the shop’s own photos. Press quotes the Threads post and keeps the Morning Call link, with a note that the live button goes to the reporter’s author page rather than one article.
- The homepage brings back a photo lead-in, the published guest notes (verbatim, including informal spelling), a rewards band, and the three answered FAQs. The readable menu, one-line prices, suite warning, and “Call to confirm hours” stay. Menu items stay text-only so a sandwich is not paired with the wrong picture.
- Order Online still opens `…/menu?dialogState=orderDetails`. No order was placed and no form was submitted.

## Still needs the owner

- Hours. The live site lists every day Closed and also says Open now. This page does not show a schedule or an open/closed badge.
- The suite. The ordering site prints “953 Walnut St #963 #963.” This page uses 953 W Walnut St, Allentown, PA 18102, and says the suite still needs confirmation.
- Wing Dings is published as 6 pieces or 12 pieces at the same $9.29. The fries section says so.
- “Copper sharp” on one fries item is written Cooper sharp so it matches the other item.
- The live category literally named “Menu” is labeled “Fries and coffee” here.

## Assets and functions not reproduced

- `hero.webm` exists on the live site next to the mp4. The mp4 plays in the preview, so the WebM was not copied.
- No local catering form, gift-card checkout, job application, or rewards account. Those stay on the ordering site.
- Catering FAQ answers on the live page were not copied; only the working catering form is linked.
