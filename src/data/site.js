const ORIGIN = "https://a972b069bad5aea6e0304a55b1b23cdcce7e717e.web.ordersave.com";

export const ORDER_URL = `${ORIGIN}/menu?dialogState=orderDetails`;
export const REWARDS_URL = `${ORIGIN}/login`;
export const CATERING_URL = `${ORIGIN}/catering`;
export const GIFTS_URL = `${ORIGIN}/gift-cards`;
export const GIFT_BALANCE_URL = `${ORIGIN}/gift-cards/check`;
export const HIRING_URL = `${ORIGIN}/careers`;
export const PRIVACY_URL = `${ORIGIN}/privacy`;
export const TERMS_URL = `${ORIGIN}/terms`;
export const ACCESSIBILITY_URL = `${ORIGIN}/accessibility`;

export const THREADS_URL =
  "https://www.threads.com/@nashanclay/post/Dcrw4C8joxb/who-said-i-wanted-to-move-for-american-deli/";
export const MORNING_CALL_URL = "https://www.mcall.com/author/graysen-golter/page/45/";

export const PHONE_DISPLAY = "(484) 221-8953";
export const PHONE_TEL = "+14842218953";

export const ADDRESS_LINES = ["953 W Walnut St", "Allentown, PA 18102"];

/** Google place attached to the live site’s address and directions links. */
export const GOOGLE_PLACE_ID = "ChIJ9yPrgf87xIkRSMp1TNHCBM0";

export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=953%20Deli%20Allentown&query_place_id=${GOOGLE_PLACE_ID}`;

/** Coordinates come from the verified Google place page for 953 Deli. */
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=953+Deli,+953+Walnut+St,+Allentown,+PA+18102&ll=40.5993712,-75.4769426&z=16&output=embed";

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=953%20W%20Walnut%20St%2C%20Allentown%2C%20PA%2018102&destination_place_id=${GOOGLE_PLACE_ID}`;

export const gallery = [
  {
    src: "/images/counter-spread.jpg",
    alt: "Three deli sandwiches and loaded fries on newspaper, with a Dr Pepper bottle and the 953 Deli sign.",
    caption: "Sandwiches and fries",
  },
  {
    src: "/images/wrapped-sandwiches.jpg",
    alt: "Two paper-wrapped sandwiches on newspaper, one cut open to show the filling.",
    caption: "Wrapped sandwiches",
  },
  {
    src: "/images/hero.jpg",
    alt: "Chopped beef and melted cheese on a roll, set on newspaper.",
    caption: "Chopped beef and cheese",
  },
  {
    src: "/images/chicken-hand.jpg",
    alt: "A chicken sandwich with cheese, shredded lettuce, mayonnaise, and sliced meat.",
    caption: "Chicken sandwich",
  },
  {
    src: "/images/burger-hand.jpg",
    alt: "A hand holds a sliced cheeseburger on wax paper beside a cap and bottled water.",
    caption: "Cheeseburger",
  },
  {
    src: "/images/car-sandwiches.jpg",
    alt: "Split toasted sandwiches filled with seasoned ground beef, shredded lettuce, sauce, and melted cheese.",
    caption: "Toasted sandwiches",
  },
  {
    src: "/images/interior.jpg",
    alt: "Floral ceiling and window seats inside 953 Deli.",
    caption: "Floral ceiling",
  },
];
